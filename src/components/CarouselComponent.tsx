import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import Item from './Item';
import { Box } from '@mui/material';

type ProjectsItem = {
  id: number;
  name: string;
  description: string;
  page: string;
};

const CarouselComponent = () => {
  const [projects, setProjects] = useState<ProjectsItem[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await axios.get(`/api/projects`);
        setProjects(result.data.result);
      } catch (error) {}
    };
    fetchDataAsync();
  }, []);

  return (
    <Carousel
      sx={{ width: '60%' }}
      interval={5000}
      stopAutoPlayOnHover={true}
      autoPlay={true}
      animation="slide"
      navButtonsProps={{
        style: {
          backgroundColor: 'white',
          color: 'black',
        },
      }}
      //   navButtonsWrapperProps={{
      //     style: {
      //
      //     }
      // }}
    >
      <Box display="flex" justifyContent="center">
        {projects.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Box>
    </Carousel>
  );
};

export default CarouselComponent;
