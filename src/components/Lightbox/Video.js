import React from 'react';
import Youtube from 'react-youtube';

class Video extends React.Component {

	render() {
		if(this.props.src !== null)
			return <Youtube videoId="y1kwJBLXF_M" className={this.props.className} alt=""/>;
		return null;
	}
}

export default Video;
