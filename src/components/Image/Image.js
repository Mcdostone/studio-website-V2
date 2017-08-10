import React from 'react';
import PropTypes from 'prop-types';
import Anime from 'react-anime';

class AnimatedImage extends React.Component {

	constructor(props) {
		super(props);
		this.state = { image: null };
	}

	componentDidMount() {
		if(this.props.src) {
			this.loadImage(this.props.src)
		}
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		return (nextState.image !== this.state.image);
	}

	render = _ => {
		const { duration, style } = this.props;
		return (
			<Anime
			opacity={[0, 1]}
			duration={duration}
			autoplay={true} >
				<img src={this.state.image} style={style} className={this.props.className} alt="" />
			</Anime>
		);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.src !== nextProps.src && nextProps.src) {
			this.loadImage(nextProps.src);
		}
	}

	loadImage = (src) => {
		const image = new Image();
		image.src = src;
		image.onload = () => this.setState({image: src});
	}

}

AnimatedImage.PropTypes = {
	src: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	duration: PropTypes.number,
};

AnimatedImage.defaultProps = {
	duration: 2000,
};

export default AnimatedImage;
