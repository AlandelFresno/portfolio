import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';

const CarouselComponent = () => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Hello world',
    },
    {
      name: 'Random name #2',
      description: 'Hello moon',
    },
  ];

  return (
    <Carousel
      sx={{ width: '50%', height: '100%' }}
      interval={5000}
      stopAutoPlayOnHover={true}
      autoPlay={true}
      animation="slide"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
