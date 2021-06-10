import React from 'react';
import { Container, Grid, Paper, makeStyles, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useState } from 'react';

const useStyle = makeStyles((theme)=>({
  root: {
    flexGrow: 1
  },
  paper: {
    width: 100,
    height: 140
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const GridTest = () => {
  const [spacing, setSpacing] = useState(2);
  const classes = useStyle();

  const handleChange = (event)=>{
    setSpacing(Number(event.target.value));
  }
  return (
    <Container style={{backgroundColor: '#f5f5f5', padding: '10px'}}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {
              [0, 1, 2].map(val=>
                <Grid key={val} item>
                  <Paper className={classes.paper}/>
                </Grid>
              )
            }
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>Spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value=>
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />)
                  }
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
 
export default GridTest;