import React, { MouseEventHandler, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  SwipeableDrawer,
  Switch,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = (props: {
  toggleTheme: MouseEventHandler<HTMLAnchorElement>;
}) => {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const onSwitchChange = (e: any) => {
    props.toggleTheme(e);
    setIsDark(!isDark);
  };
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position='fixed'>
      <MenuIcon
        onClick={handleMenuClick}
        sx={{ transform: 'scale(1.5)', marginTop: '1rem', marginRight: '1rem' }}
      />
      <SwipeableDrawer
        onOpen={() => {}}
        onClose={() => {}}
        anchor="right"
        open={isOpen}
      >
        <ChevronRightIcon
          sx={{
            alignSelf: 'center',
            transform: 'scale(1.1)',
            marginBottom: '0.25rem',
          }}
          onClick={handleMenuClick}
        />
        <Divider />
        <Box marginTop="0.5rem">
          <FormControlLabel
            control={<Switch color="primary" onChange={onSwitchChange} />}
            label="Light mode"
            labelPlacement="top"
          />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default Navbar;
