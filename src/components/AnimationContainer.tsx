import React, { useEffect } from 'react';

const AnimationContainer = () => {
  let bgAnimation: HTMLElement;
  let degrees: number = 45;
  useEffect(() => {
    bgAnimation = document.querySelector(
      '#background__animation'
    ) as HTMLElement;
  }, []);

  let setProperty = (degrees: number): void => {
    bgAnimation?.style.setProperty('--animation-degrees', degrees + 'deg');
  };

  setInterval(() => {
    if (degrees < 360) {
      degrees = degrees + 0.1;
    } else {
      degrees = 0;
    }
    setProperty(degrees);
  }, 500);

  return <></>;
};

export default AnimationContainer;
