import React from 'react';
import PropTypes from 'prop-types';
import Anime from 'react-anime';
import Cover from './Cover';


class SimpleCover extends React.Component {

	render() {
		return (
			<Cover {...this.props}>
				<Anime
					opacity={[0, 1]}
					translateY={['-0.2rem', '0rem']}
  				scale={[0.97, 1]}
					duration={250}
					direction="forwards"
					easing="easeInOutQuad"
					elasticity={250}>
					{this.props.children}
				</Anime>
			</Cover>
		);
	}
}

SimpleCover.propTypes = {
	title: PropTypes.string,
	src: PropTypes.string,
	admin: PropTypes.bool,
};

SimpleCover.defaultProps = {
	title: undefined,
	src: undefined,
	admin: false,
}

export default SimpleCover;
