import { Box, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box
      width="100%"
      height="50rem"
      display="center"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontSize: { xs: '2.80rem', md: '3.75rem' } }}
      >
        Alan del Fresno
      </Typography>
    </Box>
  );
};

export default Header;
