import React from 'react';
import Youtube from 'react-youtube';

class Video extends React.Component {

	onReady(event) {
		event.target.playVideo();
	}

	render() {
		if(this.props.src !== null)
			return <Youtube
			videoId={this.props.src}
			onReady={this.onReady}
			className={this.props.className} alt=""/>;
		return null;
	}
}

export default Video;
