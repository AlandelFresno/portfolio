import React from 'react';
import { Box, Typography } from '@mui/material';
import AnimationContainer from './AnimationContainer';

const Header = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      id="background__animation"
    >
      <AnimationContainer />
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontSize: { xs: '2.80rem', md: '3.75rem' } }}
      >
        Alan del Fresno
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        Full Stack Developer
      </Typography>
    </Box>
  );
};

export default Header;
