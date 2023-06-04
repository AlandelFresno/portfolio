import React from 'react';
import { Box } from '@mui/material';
import CarouselComponent from './CarouselComponent';

const Projects = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ height: { xs: '100%', sm: '55%' } }}
      width="100%"
    >
      <CarouselComponent />
    </Box>
  );
};

export default Projects;
