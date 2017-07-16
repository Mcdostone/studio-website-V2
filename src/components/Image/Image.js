import React from 'react';
import Anime from 'react-anime';
import './Image.css';


class Image extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
		this.imageLoaded = this.imageLoaded.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (this.state.loaded === false && nextState.loaded === true) ||
		(this.props.src !== nextProps.src);
	}

	imageLoaded() {
		this.setState({loaded: true});
	}

	render() {
		return (
			<Anime
				opacity={[0, 1]}
				duration={2000}
				autoplay={this.state.loaded}
			>
				<img src={this.props.src} onLoad={this.imageLoaded} className={this.props.className} alt=""/>
			</Anime>
		)
	}

}

export default Image;
