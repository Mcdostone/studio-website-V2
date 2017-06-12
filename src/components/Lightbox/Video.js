import React from 'react';
import Youtube from 'react-youtube';

class Video extends React.Component {

	render() {
		if(this.props.src !== null)
			return <Youtube videoId={this.props.src} className={this.props.className} alt=""/>;
		return null;
	}
}

export default Video;
