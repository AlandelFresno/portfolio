import React from 'react';
import { Box, Typography } from '@mui/material';
import CarouselComponent from './CarouselComponent';

const Projects = () => {
  const test = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  return (
    <Box display="flex" justifyContent="center" marginTop="4rem">
        <CarouselComponent />
        {/* {test.map(() => (
          <Box height="450px" width="350px" border="solid" borderColor="red">
            <Box height="250px" border="solid" borderColor="blue"></Box>
            <Box marginTop="1rem">
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                explicabo deleniti. A dolores, qui consectetur cum cumque minus
                perspiciatis aliquam neque ipsum. Similique, quaerat fugiat!
                Dicta eum quas quasi qui.
              </Typography>
            </Box>
          </Box>
        ))} */}
    </Box>
  );
};

export default Projects;
