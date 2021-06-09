import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Delete, Send as SendIcon, CloudUpload as CloudUploadIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const ButtonTest = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>Contained Buttons 实心按钮</h1>
      <div className={classes.root}>
        <Button variant="contained">DEFAULT</Button>
        <Button variant="contained" color="primary">PRIMARY</Button>
        <Button variant="contained" color="secondary">SECONDARY</Button>
        <Button variant="contained" style={{backgroundColor: green[500], color: 'white'}}>SUCCESS</Button>
        <span style={{cursor: 'not-allowed'}}>
          <Button variant="contained" disabled>DISABLED</Button>
        </span>
        <Button variant="contained" color="primary" href="#">LINK</Button>
      </div>
      <h3>消除立体效果</h3>
      <div className={classes.root}>
        <Button variant="contained" color="primary" disableElevation>DISABLE ELEVATION</Button>
      </div>
      <h1>Text Button 文本按钮</h1>
      <div className={classes.root}>
        <Button>DEFAULT</Button>
        <Button color="primary">PRIMARY</Button>
        <Button color="secondary">SECONDARY</Button>
        <Button style={{color: green[500]}}>SUCCESS</Button>
        <Button disabled>DISABLED</Button>
        <Button color="primary" href="#">LINK</Button>
      </div>
      <h1>Outlined Button 描边按钮</h1>
      <div className={classes.root}>
        <Button variant="outlined">DEFAULT</Button>
        <Button variant="outlined" color="primary">PRIMARY</Button>
        <Button variant="outlined" color="secondary">SECONDARY</Button>
        <Button variant="outlined" style={{color: green[500], borderColor: green[500]}}>SUCCESS</Button>
        <Button variant="outlined" disabled>DISABLED</Button>
        <Button variant="outlined" color="primary" href="#">LINK</Button>
      </div>
      <h1>Handling click 处理点击事件</h1>
      <Button variant="contained" color="primary" onClick={()=>{alert("CLICKED")}}>CLICK ME</Button>
      <h1>带有 ICON 和 LABEL 的按钮</h1>
      <div className={classes.root}>
        <Button variant="contained" color="primary" endIcon={<SendIcon />} >SEND</Button>
        <Button variant="contained" color="secondary" startIcon={<Delete />}>DELETE</Button>
        <Button variant="contained" style={{backgroundColor: green[500], color: 'white'}} startIcon={<CloudUploadIcon/>}>UPLOAD</Button>
      </div>
      <h1>Icon Button 图标按钮</h1>
      <div className={classes.root}>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
        <IconButton aria-label="delete" color="secondary">
          <Delete />
        </IconButton>
        <IconButton aria-label="delete" color="secondary" disabled>
          <Delete />
        </IconButton>
        <IconButton aria-label="delete" style={{color: green[500]}}>
          <Delete />
        </IconButton>
      </div>

    </React.Fragment>
  );
}
 
export default ButtonTest;