import classes from './StoryLoading.module.scss';

import dummy_image from './dummy-image.jpeg';

const StoryLoading = () => {
  return (
    <li className={classes.wrapper}>
      <div className={`font-bolder ${classes.score}`}>
        ...
      </div>
      <div className="w-full">
        <div className={classes.top}>
          <div className={`w-full ${classes['top-content-wrapper']}`}>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.image}></div>
          <div className={classes.content}></div>
        </div>
      </div>
    </li>
  )
}

export default StoryLoading;
