import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {

	render() {
		return (
			<div>
				<Link to="/admin/users">
				Users
				</Link>
				<Link to="/admin/albums">
				Albums
				</Link>
			</div>
		)
	}
}

export default Dashboard;
