import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const NavBar = ()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           COUPON HOUSE
          </Typography>
          <Link to="/register">  <Button sx={{color: "white" }}>Register</Button></Link>
          <Link to="/login">  <Button sx={{color: "white" }}>Login</Button></Link>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}