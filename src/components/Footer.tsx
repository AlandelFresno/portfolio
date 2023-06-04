import { Box, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      marginTop="10rem"
      paddingBottom="2rem"
    >
      <Box>
        <Typography> Email:</Typography>
        <Typography> alandelfresno2@gmail.com</Typography>
      </Box>
      <Box>
        <KeyboardArrowUpIcon
          onClick={scrollToTop}
          cursor="pointer"
          transform="scale(2)"
        />
      </Box>
    </Box>
  );
};

export default Footer;
