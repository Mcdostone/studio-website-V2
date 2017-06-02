import React from 'react';
import SearchAction from 'material-ui/svg-icons/action/search';
import Icon from './Icon';

class IconSearch extends Icon {
	render() {
		return (
			<Icon
				style={this.props.style}
				onTouchTap={this.props.onTouchTap}
			>
				<SearchAction color="white" />
			</Icon>
		);
	}
}

export default IconSearch;

