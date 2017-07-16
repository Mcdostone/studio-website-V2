import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';


class SimpleThumbnail extends React.Component {

	render() {
		return (
			<div style={{height: '100%', width: '100%', background: 'black'}}>
				<Image className="thumbnail" src={this.props.src} alt="" />
			</div>
		)
	}
}

SimpleThumbnail.propTypes = {
	src: PropTypes.string.isRequired,
};

export default SimpleThumbnail;
