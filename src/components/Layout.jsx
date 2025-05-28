import React from 'react';
import { Box } from '@mui/material';
import {Navbar} from './Navbar';

export const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' ,direction:'rtl'}}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, pt: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

