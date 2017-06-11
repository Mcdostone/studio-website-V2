import React from 'react';
import AutoLockScrolling from 'material-ui/internal/AutoLockScrolling';
import EventListener from 'react-event-listener';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeLightbox, openLightbox } from '../../actions/lightboxActions'
import './Lightbox.css';

class Lightbox extends React.Component {

	constructor(props) {
		super(props);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	handleKeyUp(e) {
		if (e.keyCode === 27) {
			this.props.closeLightbox();
		}
	}

	render() {
		if(this.props.open) {
			return (
				<EventListener
					target="window"
					onKeyUp={this.handleKeyUp}
				>
					<div className="lightbox">
						<img src={this.props.media} alt=""/>
						<AutoLockScrolling lock={this.props.open}/>
					</div>
				</EventListener>
			);
		}
		return null;
	}
}

function mapStateToProps(state) {
	return {
		open: state.lightbox.lightboxOpened,
		medium: state.lightbox.medium
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		closeLightbox
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lightbox);
