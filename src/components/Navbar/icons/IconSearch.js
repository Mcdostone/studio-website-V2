import React from 'react';
import IconButton from 'material-ui/IconButton';
import SearchAction from 'material-ui/svg-icons/action/search';
import Icon from './Icon';

class IconSearch extends Icon {
	render() {
		return (
			<IconButton
				className="navbar-icon"
				style={this.props.style}
				onTouchTap={this.props.onTouchTap}
			>
				<SearchAction color="white" />
			</IconButton>
		);
	}
}

export default IconSearch;

