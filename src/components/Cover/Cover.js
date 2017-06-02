import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './Cover.css';


class Cover extends React.Component {
	render() {
		const settings = (
			<IconMenu
				style={{ zIndex: 15, position: 'absolute', right: 100, bottom: 0 }}
				iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>}
				anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
				targetOrigin={{ horizontal: 'right', vertical: 'top' }}
			>
				<MenuItem primaryText="Settings" />
			</IconMenu>
		);


		return (
			<div className="cover">
				<h2 className="cover-title">{this.props.title}</h2>
				<img src="http://lorempicsum.com/futurama/600/600/2" alt="" />
				{settings}

			</div>
		);
	}
}

Cover.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Cover;
