import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';

const Skills = () => {
  const degrees = 360;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginTop="10rem"
    >
      <Box alignSelf="center">
        <Typography
          variant="h5"
          border="2px solid"
          borderRadius="2rem"
          padding="0.5rem"
        >
          TypeScript
        </Typography>
      </Box>
      <Box
        display="flex"
        width="60%"
        justifyContent="space-around"
        alignSelf="center"
      >
        <Typography
          variant="h5"
          border="2px solid"
          borderRadius="2rem"
          padding="0.5rem"
        >
          JavaScript
        </Typography>
        <Typography
          variant="h5"
          border="2px solid"
          borderRadius="2rem"
          padding="0.5rem"
        >
          React
        </Typography>
      </Box>
      <Box alignSelf="center">
        <Typography variant="h2">Skills</Typography>
      </Box>
      <Box
        display="flex"
        width="60%"
        justifyContent="space-around"
        alignSelf="center"
      >
        <Typography
          variant="h5"
          border="2px solid"
          borderRadius="2rem"
          padding="0.5rem"
        >
          NextJS
        </Typography>

        <Typography
          variant="h5"
          border="2px solid"
          borderRadius="2rem"
          padding="0.5rem"
        >
          ExpressJS
        </Typography>
      </Box>
      <Box alignSelf="center">
        <Typography
          variant="h5"
          border="2px solid"
          borderRadius="2rem"
          padding="0.5rem"
        >
          NodeJS
        </Typography>
      </Box>
      {/*
        JavaScript
        TypeScript
        React
        NextJS
        NodeJS
        ExpressJS 
        GraphQL (Apollo)
      */}
    </Box>
  );
};

export default Skills;
