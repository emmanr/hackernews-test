import { useState, useEffect } from "react";

import classes from './Story.module.scss';
import dummy_image from './dummy-image.jpeg';

const Story = ({ story }) => {
  const [user, setUser] = useState({});
  const [timestamp, setTimestamp] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStoryData = async () => {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${story.by}.json`);

      if (!res.ok) {
        return setLoading(false);
      }

      const data = await res.json();

      return setUser(data);
    }

    setTimestamp(new Date(story.time * 1000));

    getStoryData();
  }, [story]);

  const formatDate = new Date(timestamp);

  return (
    <li className={classes.wrapper}>
      <div className={`font-bolder ${classes.score}`}>
        {story.score}
      </div>
      <div className="w-full">
        <div className={classes.top}>
          <div className={`w-full ${classes['top-content-wrapper']}`}>
            <div className={`font-bolder ${classes.author}`}>
              <small className={classes.label}>author:</small>
              {
                user.id !== 'undefined' ? (
                  <>
                    {user.id}
                    <span className={classes['user-karma']}>{user.karma}</span>
                  </>
                ) : "anonymous"
              }
            </div>
            <div className={classes.timestamp}>
              <small className={classes.label}>posted on</small>
              <span className={classes.date}>{`${formatDate.getMonth()}/${formatDate.getDate()}/${formatDate.getFullYear()}`}</span>
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <img src={dummy_image} className={classes.image} alt="dummy" width="230px" height="129" />
          <div>
            <h3>
              <a className={`font-bolder ${classes.title}`} href={story.url}>{story.title}</a>
            </h3>
            <p className={classes.description}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <a href={story.url} className={classes.readmore}>Read More</a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Story;
