import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const ResponsiveSkills = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  h5: {
    maxWidth: '150px',
    width: '150px',
    display: 'flex',
    justifyContent: 'center',
  },
  [theme.breakpoints.up(1180)]: {
    paddingTop: '4rem',
  },
  [theme.breakpoints.down(1180)]: {
    flexDirection: 'column',
    alignItems: 'center',
    h5: {
      marginTop: '2rem',
    },
  },
}));

const Skills = () => {
  return (
    <Box display="flex" justifyContent="center" marginTop="10rem">
      <Box flexDirection="column" width="70%">
        <Box display="flex" justifyContent="center">
          <Typography variant="h3">Skills</Typography>
        </Box>
        <ResponsiveSkills>
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
            TypeScript
          </Typography>
          <Typography
            variant="h5"
            border="2px solid"
            borderRadius="2rem"
            padding="0.5rem"
          >
            React
          </Typography>
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
            NodeJS
          </Typography>
        </ResponsiveSkills>
      </Box>
    </Box>
    // <Box
    //   display="flex"
    //   flexDirection="column"
    //   justifyContent="center"
    //   marginTop="10rem"
    // >
    //   <Box alignSelf="center">
    //     <Typography
    //       variant="h5"
    //       border="2px solid"
    //       borderRadius="2rem"
    //       padding="0.5rem"
    //     >
    //       TypeScript
    //     </Typography>
    //   </Box>
    //   <Box
    //     display="flex"
    //     width="60%"
    //     justifyContent="space-around"
    //     alignSelf="center"
    //   >
    //     <Typography
    //       variant="h5"
    //       border="2px solid"
    //       borderRadius="2rem"
    //       padding="0.5rem"
    //     >
    //       JavaScript
    //     </Typography>
    //     <Typography
    //       variant="h5"
    //       border="2px solid"
    //       borderRadius="2rem"
    //       padding="0.5rem"
    //     >
    //       React
    //     </Typography>
    //   </Box>
    //   <Box alignSelf="center">
    //     <Typography variant="h2">Skills</Typography>
    //   </Box>
    //   <Box
    //     display="flex"
    //     width="60%"
    //     justifyContent="space-around"
    //     alignSelf="center"
    //   >
    //     <Typography
    //       variant="h5"
    //       border="2px solid"
    //       borderRadius="2rem"
    //       padding="0.5rem"
    //     >
    //       NextJS
    //     </Typography>

    //     <Typography
    //       variant="h5"
    //       border="2px solid"
    //       borderRadius="2rem"
    //       padding="0.5rem"
    //     >
    //       ExpressJS
    //     </Typography>
    //   </Box>
    //   <Box alignSelf="center">
    //     <Typography
    //       variant="h5"
    //       border="2px solid"
    //       borderRadius="2rem"
    //       padding="0.5rem"
    //     >
    //       NodeJS
    //     </Typography>
    //   </Box>
    //   {/*
    //     JavaScript
    //     TypeScript
    //     React
    //     NextJS
    //     NodeJS
    //     ExpressJS
    //     GraphQL (Apollo)
    //   */}
    // </Box>
  );
};

export default Skills;
