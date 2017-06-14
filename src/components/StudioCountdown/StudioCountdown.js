import React from 'react';
import Youtube from 'react-youtube';

import './StudioCountdown.css';

class StudioCountdown extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
		this.onReady = this.onReady.bind(this);
	}

	onReady(event) {
		event.target.playVideo();
	}

	render() {
		const opts = {
			playerVars: {
        autoplay: 1,
				showinfo: 0,
				controls: 0,
				rel : 0
      },
		};

		return (
			<div className="countdown">
				<Youtube
					className="countdown-video"
					videoId={this.props.videoId}
					opts={opts}
					onReady={this.onReady}
				/>
				<div className="countdown-overlay"></div>
			</div>
		);

	}
}

export default StudioCountdown;
