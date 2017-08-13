import React from 'react';
import PropTypes from 'prop-types';
import Anime from 'react-anime';

class CoverContent extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.title !== this.props.title;
	}

	render() {
		return (
			<Anime
			opacity={[0, 1]}
			translateY={['-0.2rem', '0rem']}
  		scale={[0.97, 1]}
			duration={250}
			delay={1000}
			direction="forwards"
			easing="easeInOutQuad"
			elasticity={250}>
				<h2 className="cover-title">{this.props.title}</h2>
			</Anime>
		);
	}

}

CoverContent.propTypes = {
	title: PropTypes.string
};

CoverContent.defaultProps = {
	title: ''
};

export default CoverContent;
