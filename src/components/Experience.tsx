import { Box, Typography } from '@mui/material';
import React from 'react';

const Experience = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginTop="6rem"
    >
      <Box
        display="flex"
        justifyContent="space-around"
        width="60%"
        alignSelf="center"
      >
        <Box border="1px solid" borderRadius="0.5rem" marginTop="1rem">
          <Box margin="0.5rem">
            <Typography variant="h4">Full Stack Developer</Typography>
            <Box display="flex">
              <Typography variant="h5">Cobuild Lab</Typography>
              <Typography marginLeft="1rem" alignSelf="end">
                Oct 2022 - Feb 2023 | 5mos
              </Typography>
            </Box>
            <Typography variant="body1" marginTop="0.5rem">
              Skills used:
            </Typography>
            <Typography variant="body2" marginTop="0.25rem">
              NextJS, TypeScript, Hasura API, GraphQL (Apollo)
            </Typography>
          </Box>
        </Box>
        <Typography variant="h3" justifySelf="center">
          Experience
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;
