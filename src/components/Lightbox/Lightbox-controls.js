import React from 'react';
import EventListener from 'react-event-listener';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CloseIcon, NextIcon, PreviousIcon } from './icons';
import { closeLightbox } from '../../actions/lightboxActions'

class LightboxControls extends React.Component {

	constructor(props) {
		super(props);
		this.handleKeyUp = this.handleKeyUp.bind(this);
}

	handleKeyUp(e) {
		e.preventDefault();
		if (e.keyCode === 27) {
			this.props.closeLightbox();
		}

		if(e.keyCode === 39) {
		}

		if(e.keyCode === 37) {

		}
	}

	render() {
		return (
			<EventListener
				target="window"
				onKeyUp={this.handleKeyUp}
			>
				<div className="lightbox-controls">
					<NextIcon />
					<PreviousIcon />
					<CloseIcon closeLightbox={this.props.closeLightbox} />
				</div>
			</EventListener>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		closeLightbox
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LightboxControls);
