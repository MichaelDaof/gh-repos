import React from 'react';
import {
  Container,
  Box,
  Typography,
  AppBar as MuiAppBar,
} from '@material-ui/core';

import star from './star.svg';

export default function AppBar() {
  return (
    <MuiAppBar color="primary" style={{ backgroundColor: '#2196f3' }}>
      <Box
        display="flex"
        height="50px"
        alignItems="center"
        justifyContent="space-between"
        padding="0px 40px"
      >
        <Box width="400px">
          <Typography variant="h4">GitHub Repos</Typography>
        </Box>
        <a href="https://www.github.com" target="blank">
          <img
            src="assets/Octocat.jpg"
            alt="octocat"
            width="37px"
            height="37px"
            style={{ borderRadius: 20 }}
          />
        </a>
      </Box>
    </MuiAppBar>
  );
}
