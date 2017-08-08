import React from 'react';
import PropTypes from 'prop-types';
import Anime from 'react-anime';
import Cover from './Cover';


class SimpleCover extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.children !== nextProps.children;
	}

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
	src: PropTypes.string,
};

SimpleCover.defaultProps = {
	src: undefined,
}

export default SimpleCover;
