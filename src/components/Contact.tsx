import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { LinkedIn, GitHub, Email} from '@mui/icons-material';
const Contact = () => {
  return (
    <Box display="flex" justifyContent="center" marginTop="6rem">
      <Box flexDirection="column">
        <Typography variant="h4">Contact me:</Typography>
        <Box display="flex" justifyContent="center" marginTop="2rem">
        </Box>
        <Box display="flex" justifyContent="space-evenly" marginTop="1rem">
        <a
            target="_blank"
            href="mailto:alandelfresno2@gmail.com"
            style={{ color: 'inherit', transform: 'scale(1.7)' }}
          >
            <Email />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alandelfresno/"
            style={{ color: 'inherit', transform: 'scale(1.7)' }}
          >
            <LinkedIn />
          </a>
          <a
            target="_blank"
            href="https://github.com/AlandelFresno"
            style={{ color: 'inherit', transform: 'scale(1.5)' }}
          >
            <GitHub />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
