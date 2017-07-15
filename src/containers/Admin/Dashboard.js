import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

	render() {
		return (
			<div>
				<Link to="/admin/users">users</Link>
				<Link to="/admin/events">events</Link>
			</div>
		);
	}

}
export default Dashboard;
