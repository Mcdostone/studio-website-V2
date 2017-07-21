import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {

	render() {
		return (
			<div>
				<Link to="/admin/users">
				Users
				</Link>
				<br/>
				<Link to="/admin/albums">
				Albums
				</Link>
				<br/>
				<Link to="/admin/media">
				Media
				</Link>

			</div>
		)
	}
}

export default Dashboard;
