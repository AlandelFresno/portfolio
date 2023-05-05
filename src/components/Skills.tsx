import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';

const Skills = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginTop="5rem"
      marginBottom="2rem"
    >
      <Box
        display="flex"
        justifyContent="space-around"
        width="60%"
        alignSelf="center"
      >
        <Box>
          <Typography variant="h4">Skills</Typography>
        </Box>
        <List>
          <ListItem> JavaScript</ListItem>
          <ListItem> TypeScript</ListItem>
          <ListItem> React</ListItem>
          <ListItem> NextJS</ListItem>
          <ListItem> NodeJS</ListItem>
          <ListItem> ExpressJS</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Skills;
