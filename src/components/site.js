import React, { useState, useEffect } from 'react';
import Landing from './landing/landing';
import About from './about/about';
import Loader from './shared/loader/loader';

const Site = () => {
  const [loaded, setLoaded] = useState(false);
  const [loaderActive, setLoaderActive] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 1200);
  }, [loaderActive]);

  return (
    <>
      {loaded ? null : <Loader isActive={loaderActive}/>}
      <Landing onLoadAction={() => setLoaderActive(true)}/>
      <About/>
    </>
  );
};

export default Site;