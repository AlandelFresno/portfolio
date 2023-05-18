import React from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';

const Item = ({ item }: { item: { name: string; description: string } }) => {
  return (
    <Box>
      <Typography variant="h2"> {item.name} </Typography>
    </Box>
  );
};

export default Item;
