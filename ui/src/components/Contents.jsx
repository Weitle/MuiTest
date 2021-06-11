import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ButtonTest from './ButtonTest';
import ButtonGroupTest from './ButtonGroupTest';
import BoxTest from './BoxTest';
import LinkTest from './LinkTest';

const Contents = () => {
	return (
		<Switch>
			<Route path="/button" component={ButtonTest} />
			<Route path="/buttongroups" component={ButtonGroupTest} />
			<Route path="/box" component={BoxTest} />
			<Route path="/link" component={LinkTest} />
		</Switch>
	);
}
 
export default Contents;