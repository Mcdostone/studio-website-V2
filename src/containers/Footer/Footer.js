import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { authWrapper } from 'wrappers';


class Footer extends React.Component {

	render() {
		return (
			<div className="footer">
				<Link to="/cgu"><p>CGU</p></Link>
				<p>studio@telecomnancy.net</p>
				{this.props.auth.authentificated  && <p>Suppression de compte</p>}
			</div>
		);
	}
}

export default authWrapper(Footer);
