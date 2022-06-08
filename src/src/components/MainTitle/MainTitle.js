import { useEffect } from 'react';

import WebFont from 'webfontloader';

import classes from './MainTitle.module.scss';

const MainTitle = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Merriweather']
      }
    })
  }, []);

  return (
    <div id="top" className={`container ${classes.container}`}>
      <h1>Hello, This is my Coding Assignment!</h1>
      <h2>By Emmanuel L Ruaza</h2>
      <hr />
    </div>
  );
}

export default MainTitle;
