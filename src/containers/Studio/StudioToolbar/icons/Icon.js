import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

class Icon extends React.Component {

	render() {
		return (
			<IconButton
				disableTouchRipple={true}
				className="media-toolbar-icon"
				style={this.props.style}
				onTouchTap={this.props.onTouchTap}
			>
				{React.cloneElement(this.props.children, {})}
			</IconButton>
		);
	}
}

Icon.propTypes = {
	active: PropTypes.bool,
	style: PropTypes.object,
	onTouchTap: PropTypes.func,
};

Icon.defaultProps = {
	active: false,
	style: { margin: '0', width: '60px', height: '60px' },
	onTouchTap: () => {},
};

export default Icon;

