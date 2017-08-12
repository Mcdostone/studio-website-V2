import React from 'react';
import PropTypes from 'prop-types';
import Cover from './Cover';

class SimpleCover extends React.Component {

	render() {
		return (
			<Cover {...this.props}>
				{this.props.children}
			</Cover>
		);
	}
}

SimpleCover.propTypes = {
	src: PropTypes.string,
};

SimpleCover.defaultProps = {
	src: undefined,
}

export default SimpleCover;
