import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

class Icon extends React.Component {
	render() {
		return undefined;
	}
}

Icon.propTypes = {
	style: PropTypes.object,
	onTouchTap: PropTypes.func,
};

Icon.defaultProps = {
	style: { margin: '0', width: '60px', height: '60px' },
	onTouchTap: () => {},
};

export default Icon;

