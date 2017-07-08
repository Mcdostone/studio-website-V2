import React from 'react';
import PropTypes from 'prop-types';
import Studio from '../Studio'

class Media extends React.Component {

	render() {
		console.log(this.props.dataSource);
		return (
			<Studio media={this.props.dataSource} />
		);
	}
}

Media.propTypes = {
	dataSource: PropTypes.object,
}

Media.defaultProps = {
	dataSource: {},
}

export default Media;
