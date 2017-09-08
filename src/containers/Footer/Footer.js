import React from 'react';
import { authWrapper } from 'wrappers';
import { CguDialog } from 'components/Dialogs';
import './Footer.css';

class Footer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
		this.closeCGU = this.closeCGU.bind(this);
	}

	closeCGU() {
		this.setState({open: false});
	}

	render() {
		return (
			<div className="footer">
				<CguDialog open={this.state.open} handleClose={this.closeCGU} />
				<p style={{cursor: 'pointer'}} onClick={() => this.setState({open: true})}>CGU</p>
				<p>studio@telecomnancy.net</p>
				{this.props.auth.authentificated  && <p>Suppression de compte</p>}
			</div>
		);
	}
}

export default authWrapper(Footer);
