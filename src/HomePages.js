import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';

function HomePages() {

  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default HomePages;
