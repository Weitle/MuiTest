import { ButtonGroup, Button, makeStyles, Grid, Popper, Grow, Paper, MenuItem, MenuList, ClickAwayListener } from '@material-ui/core';
import React, {useRef, useState} from 'react';
import { green } from '@material-ui/core/colors';
import { ArrowDropDown } from '@material-ui/icons';

const useStyle = makeStyles(theme=>({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	verRoot: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

const options = [
	'Create a merge commit',
	'Squash and merge', 
	'Rebase and merge'
];

const ButtonGroupTest = () => {
	const classes = useStyle();
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);
	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleClick = ()=>{
		alert(`You clicked ${options[selectedIndex]}`);
	}
	const handleToggle = ()=>{
		setOpen((prevOpen)=>!prevOpen);
	}
	const handleMenuItemClick = (event, index)=>{
		setSelectedIndex(index);
		setOpen(false);
	}
	const handleClose = (event)=>{
		if(anchorRef.current && anchorRef.current.contains(event.target)){
			return;
		}
		setOpen(false);
	}

	return (
		<React.Fragment>
			<h1>基本按钮组</h1>
			<div className={classes.root}>
				<ButtonGroup variant="outlined" color="primary">
					<Button>ONE</Button>
					<Button>TWO</Button>
					<Button>THREE</Button>
				</ButtonGroup>
				<ButtonGroup variant="contained" color="secondary">
					<Button>ONE</Button>
					<Button>TWO</Button>
					<Button>THREE</Button>
				</ButtonGroup>
				<ButtonGroup variant="text">
					<Button style={{borderColor: green[500]}}>ONE</Button>
					<Button style={{borderColor: green[500]}}>TWO</Button>
					<Button>THREE</Button>
				</ButtonGroup>
			</div>
			<h1>垂直按钮组</h1>
			<div className={classes.verRoot}>
				<ButtonGroup orientation="vertical" variant="outlined" color="primary">
					<Button>ONE</Button>
					<Button>TWO</Button>
					<Button>THREE</Button>
				</ButtonGroup>
				<ButtonGroup orientation="vertical" variant="contained" color="secondary">
					<Button>ONE</Button>
					<Button>TWO</Button>
					<Button>THREE</Button>
				</ButtonGroup>
				<ButtonGroup orientation="vertical" variant="text">
					<Button style={{borderColor: green[500]}}>ONE</Button>
					<Button style={{borderColor: green[500]}}>TWO</Button>
					<Button>THREE</Button>
				</ButtonGroup>
			</div>
			<h1>消除立体效果</h1>
			<div className={classes.root}>
				<ButtonGroup disableElevation variant="outlined" color="primary">
					<Button>ONE</Button>
					<Button>TWO</Button>
					<Button>THREE</Button>
				</ButtonGroup>
				<ButtonGroup disableElevation variant="contained" color="secondary">
					<Button>ONE</Button>
					<Button>TWO</Button>
					<Button>THREE</Button>
				</ButtonGroup>
				<ButtonGroup disableElevation variant="text">
					<Button style={{borderColor: green[500]}}>ONE</Button>
					<Button style={{borderColor: green[500]}}>TWO</Button>
					<Button>THREE</Button>
				</ButtonGroup>
			</div>
			<h1>分体式按钮</h1>
			<Grid container direction="column" alignItems="center">
				<Grid item xs={12}>
					<ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
						<Button
							style={{backgroundColor: green[500], color: 'white'}} 
							onClick={handleClick}
						>
							{options[selectedIndex]}
						</Button>
						<Button
							style={{backgroundColor: green[500], color: 'white'}} 
							aria-controls={open ? 'split-button-menu' : undefined}
							aria-expanded={open? 'true' : undefined}
							aria-label="select merge strategy"
							aria-haspopup="menu"
							onClick={handleToggle}
						>
							<ArrowDropDown />
						</Button>
					</ButtonGroup>
					<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
					{({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
					</Popper>
				</Grid>
			</Grid>

		</React.Fragment>
	);
}
 
export default ButtonGroupTest;