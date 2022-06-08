import { useEffect } from 'react';

import WebFont from 'webfontloader';

import { Stories, MainTitle } from "./components";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans:300,500,700']
      }
    })
  }, []);

  return <>
    <MainTitle />
    <Stories />
  </>;
}

export default App;
