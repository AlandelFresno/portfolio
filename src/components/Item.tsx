import React from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';
import Image from 'next/image';
// @ts-ignore
import NGO from '../assets/images/NGO.PNG';

const Item = ({
  item,
}: {
  item: { id: number; name: string; description: string; page: string };
}) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <a
        target="_blank"
        href={item.page}
        style={{ alignSelf: 'center', cursor: 'pointer' }}
      >
        <Image
          src={NGO}
          alt={`${item.name} preview`}
          width={600}
          height={338}
        />
      </a>
      <Typography variant="h6" alignSelf="center" marginTop="1rem">
        {item.name}
      </Typography>
      <Typography
        variant="body2"
        width="60%"
        alignSelf="center"
        marginTop="2rem"
      >
        {item.description}
      </Typography>
    </Box>
  );
};

export default Item;
