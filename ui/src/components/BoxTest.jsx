import { Box, Grid, Typography, Button } from '@material-ui/core';
import React from 'react';

const BoxTest = () => {
  return (
    <React.Fragment>
      <h1>Color 颜色</h1>
      <Typography component="div" variant="body1">
        <Box color="primary.main">primary.main</Box>
        <Box color="secondary.main">secondary.main</Box>
        <Box color="error.main">error.main</Box>
        <Box color="warning.main">warning.main</Box>
        <Box color="info.main">info.main</Box>
        <Box color="success.main">success.main</Box>
        <Box color="text.primary">text.primary</Box>
        <Box color="text.secondary">text.secondary</Box>
        <Box color="text.disabled">text.disabled</Box>
      </Typography>
      <h1>背景颜色</h1>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>primary.main</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>secondary.main</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="warning.main" color="warning.contrastText" p={2}>warning.main</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="error.main" color="error.contrastText" p={2}>error.main</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>info.main</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="success.main" color="success.contrastText" p={2}>success.main</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="text.primary" color="background.paper" p={2}>text.primary</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="text.secondary" color="background.paper" p={2}>text.secondary</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="text.disabled" color="background.paper" p={2}>text.disabled</Box>
        </Grid>
      </Grid>
      <h1>封装别的组件</h1>
      <Box component="div" m={1}>
        <Button variant="contained" color="primary">PRIMARY</Button>
      </Box>
      <Box bgcolor="success.main" p={2}>
        { props => <Button {...props} style={{color:'white'}}>TEXTBUTTON</Button> }
      </Box>
    </React.Fragment>
  );
}
 
export default BoxTest;