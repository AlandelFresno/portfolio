import React, { MouseEventHandler } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';

const Home = (props: { toggleTheme: MouseEventHandler<HTMLAnchorElement> }) => {
  return (
    <Box height="100%">
      <Box display="flex" justifyContent="flex-end">
        <Navbar toggleTheme={props.toggleTheme} />
      </Box>
      <Header />
      
    </Box>
  );
};

export default Home;
