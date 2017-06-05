import React from 'react';
import 'Lightbox.css';

class Lightbox extends React.Component {

	render() {
		return (
			<div className="lightbox">
				<img src={this.props.media} alt=""/>
			</div>
		)
	}
}
