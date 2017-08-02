import React from 'react';
import PropTypes from 'prop-types';
import Anime from 'react-anime';

class Image extends React.Component {

	constructor(props) {
		super(props);
		this.state = { imageLoaded: false };
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		return this.props.src !== nextProps.src || this.state !== nextState;
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({imageLoaded: false});
		return this.props.src !== nextProps.src;
	}

	imageLoaded = e => {
		this.setState({imageLoaded : e.target.src === this.props.src});
	}

	render = _ => {
		const { duration, ...others } = this.props;
		return (
			<Anime
			opacity={[0, 1]}
			duration={duration}
			autoplay={this.state.imageLoaded} >
				<img {...others} onLoad={this.imageLoaded} alt="" />
			</Anime>
		);
	}

}

Image.PropTypes = {
	src: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	duration: PropTypes.number,
};

Image.defaultProps = {
	duration: 2000,
};

export default Image;
