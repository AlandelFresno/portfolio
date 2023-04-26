import React, { MouseEventHandler } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';

const Home = (props: { toggleTheme: MouseEventHandler<HTMLAnchorElement> }) => {
  

  return (
    <Box height="100%">
      <Box display='flex' justifyContent='flex-end'>
        <Navbar toggleTheme={props.toggleTheme} />
      </Box>
      <Typography color="primary"> testing </Typography>
    </Box>
  );
};

export default Home;
