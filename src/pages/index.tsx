import React, { MouseEventHandler } from 'react';
import { Box, Button, Typography } from '@mui/material';

const Home = (props: { toggleTheme: MouseEventHandler<HTMLAnchorElement> }) => {
  return (
    <Box height="100%">
      <Button onClick={props.toggleTheme as any}>Toggle Theme</Button>
      <Typography color="primary"> testing </Typography>
    </Box>
  );
};

export default Home;
