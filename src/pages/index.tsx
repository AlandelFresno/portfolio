import React, { MouseEventHandler } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Bio from '@/components/Bio';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


const Home = (props: { toggleTheme: MouseEventHandler<HTMLAnchorElement> }) => {
  return (
    <Box height="100%">
      <Box display="flex" justifyContent="flex-end">
        <Navbar toggleTheme={props.toggleTheme} />
      </Box>
      <Header />
      <Bio />
      <Skills />
      {/* <Where I worked /> */}
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
