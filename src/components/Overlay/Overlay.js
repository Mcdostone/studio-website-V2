import React from 'react';
import PropTypes from 'prop-types';

const Overlay = (props) => {
	const overlayStyles = {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: props.foregroundColor
	}

	return (
		<div style={overlayStyles} />
	)
}

Overlay.propTypes = {
	foregroundColor: PropTypes.string,
};

Overlay.defaultProps = {
	foregroundColor: 'rgba(0, 0, 0, 0.6)',
}

export default Overlay;
