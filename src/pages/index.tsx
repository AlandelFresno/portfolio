import React, { MouseEventHandler } from 'react';
import { Box } from '@mui/material';
// import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Bio from '@/components/Bio';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';

const Home = (props: { toggleTheme: MouseEventHandler<HTMLAnchorElement> }) => {
  return (
    <Box height="100%">
      <Box display="flex" justifyContent="flex-end">
        {/* <Navbar toggleTheme={props.toggleTheme} /> */}
      </Box>
      <Header />
      <Bio />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;
