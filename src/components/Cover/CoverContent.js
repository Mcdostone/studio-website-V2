import React from 'react';
import PropTypes from 'prop-types';
import Anime from 'react-anime';

class CoverContent extends React.Component {

	shouldComponentUpdate = (nextProps, nextState) => {
		return nextProps.data !== this.props.data;
	}

	render() {
		return (
			<Anime
			opacity={[0, 1]}
			translateY={['-0.2rem', '0rem']}
  		scale={[0.97, 1]}
			duration={this.props.duration}
			delay={this.props.delay}
			direction="forwards"
			easing="easeInOutQuad"
			elasticity={250}>
				{this.props.children}
			</Anime>
		);
	}

}

CoverContent.propTypes = {
	data: PropTypes.any,
	delay: PropTypes.number,
	duration: PropTypes.number,
};

CoverContent.defaultProps = {
	delay: 1000,
	duration: 250,
}

export default CoverContent;
