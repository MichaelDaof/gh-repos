import React from 'react'
import { Box, Typography } from '@material-ui/core';

export default function ErrorMsg({ message }) {
  return (
    <Box marginTop='100px' textAlign='center'>
      <Typography variant='h3'>{message}</Typography>
    </Box>
  )
}