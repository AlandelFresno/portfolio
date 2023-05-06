import React from 'react';
import { Box, Typography } from '@mui/material';

const Bio = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginTop="6rem"
    >
      <Box maxWidth="60%" alignSelf="center">
        <Typography>
          My name is Alan del Frenso and I am a full stack developer with
          experience in web development. I am capable of seeing a project
          through from start to finish, thanks to my understanding of front-end
          and back-end technologies and databases, which allows me to create
          solutions for a variety of clients.
        </Typography>
        <Typography marginTop="1rem">
          I am a self-motivated and enthusiastic team player who thrives on
          collaboration. I am skilled at breaking down complex problems into
          manageable components and finding creative solutions to technical
          challenges. I am also a strong communicator and able to explain
          technical concepts to non-technical stakeholders.
        </Typography>
        <Typography marginTop='1rem'>
          My passion for web development is fueled by my desire to create
          solutions that are not only functional but also user-friendly and
          aesthetically pleasing. I am always seeking to improve my skills and
          stay up-to-date with the latest technologies and trends in the
          industry. I am a problem solver who enjoys a challenge and is
          committed to delivering high-quality results.
        </Typography>
      </Box>
    </Box>
  );
};

export default Bio;
