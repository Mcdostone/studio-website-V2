import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';


const Admin = (props) => (
		<Switch>
			<Route exact path="/admin" component={Dashboard} />
		</Switch>
	)

export default Admin;
