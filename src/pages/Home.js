import React from 'react'

import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import hiddenJamsLogo from '../assets/logo.png';


const Home = () => {
    return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          bgcolor="#212121"
          color="#fff"
          style={{ marginTop: '-100px', paddingBottom: '40px' }}
        >
          <img src={hiddenJamsLogo} alt="Hidden Jams" style={{ maxWidth: '100%', height: 'auto' }} />
          <Typography variant="h6" style={{ marginTop: '16px' }}>
            Uncover an Artist's Underrated Songs
          </Typography>
          <TextField
            variant="outlined"
            placeholder="My Favourite Artist"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: '#000000' }} />
                </InputAdornment>
              ),
              style: { color: '#000000' }
            }}
            style={{ marginTop: '16px', width: '300px', backgroundColor: '#fff' }}
          />
        </Box>
    );
}
    
export default Home;