import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles(theme=>({
	root: {
		flexGrow: 1
	},
	headTitle: {
		marginRight: theme.spacing(2)
	},
	menuButtons: {
		'& > *': {
			padding: theme.spacing(1)
		}
	}
}));

const Navbar = () => {
	const classes = useStyle();
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Typography variant="h6" color="inherit" className
				={classes.headTitle}>MuiTest</Typography>
				<div className={classes.menuButtons}>
					<Link component={NavLink} to="/button" color="inherit" underline="none">Button</Link>
					<Link component={NavLink} to="/buttongroups" color="inherit" underline="none">ButtonGrops</Link>
					<Link component={NavLink} to="/box" color="inherit" underline="none">Box</Link>
					<Link component={NavLink} to="/link" color="inherit" underline="none">Link</Link>
				</div>
			</Toolbar>
		</AppBar>
	);
}
 
export default Navbar;