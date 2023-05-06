import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';

const Skills = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginTop="5rem"
    >
      <Box
        display="flex"
        justifyContent="space-around"
        width="60%"
        alignSelf="center"
      >
        <Box display='flex' alignItems='center'>
          <Typography variant="h3">Skills</Typography>
        </Box>
        <List>
          <ListItem>JavaScript</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>NextJS</ListItem>
          <ListItem>NodeJS</ListItem>
          <ListItem>ExpressJS</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Skills;
