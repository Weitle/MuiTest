import React from 'react';
import { Typography, Link, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme=>({
	root: {
		'& > * + *': {
			marginLeft: theme.spacing(2)
		}
	}
}));

const LinkTest = () => {
	const classes = useStyle();
	const preventDefault = event => event.preventDefault();
	return (
		<React.Fragment>
			<h1>简单链接</h1>
			<Typography className={classes.root}>
				<Link href="#" onClick={preventDefault}>Link</Link>
				<Link href="#" onClick={preventDefault} color="inherit">{'color="inherit"'}</Link>
				<Link href="#" onClick={preventDefault} variant="body2">{'variant="body2"'}</Link>
			</Typography>
			<h1>Button Link</h1>
			<Link component="button" variant="body2" onClick={()=>alert('CLICK')}>BUTTON LINK</Link>
		</React.Fragment>
	);
}
 
export default LinkTest;