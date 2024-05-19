import React from 'react'
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#212121' }}>
      <Toolbar style={{ justifyContent: 'flex-end' }}>
        <Box display="flex">
          <Button color="inherit" sx={{ mx: 2, textTransform: 'none' }}>Home</Button>
          <Button color="inherit" sx={{ mx: 2, textTransform: 'none' }}>About</Button>
          <Button color="inherit" sx={{ mx: 2, textTransform: 'none' }}>Privacy Policy</Button>
          <Button color="inherit" sx={{ mx: 2, textTransform: 'none' }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;