import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconSearch from '../icons/IconSearch';

class Navigator extends React.Component {
	render() {
		return (
			<div className="navigator">
				<IconSearch className="navbar-link" onTouchTap={this.props.onSearchTap} />
				<a href="#" className="navbar-link">
					<Avatar src="http://lorempicsum.com/futurama/255/200/2" style={{ marginRight: '5px' }} />
					Yann Prono
				</a>
				<a href="#" className="navbar-link">
					Login
				</a>
			</div>
		);
	}
}

export default Navigator;
