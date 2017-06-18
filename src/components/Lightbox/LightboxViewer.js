import React from 'react';
import EventListener from 'react-event-listener';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Picture from './Picture';
import Video from './Video';
import LightboxToolbar from './LightboxToolbar';
import { NextIcon , PreviousIcon } from './icons';
import { closeLightbox, previousMedium, nextMedium } from '../../actions/lightboxActions'
import './Lightbox.css';


class LightboxViewer extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleNextMedium = this.handleNextMedium.bind(this);
		this.handlePreviousMedium = this.handlePreviousMedium.bind(this);
	}

	handlePreviousMedium() {
		this.props.previousMedium(this.props.media);
	}

	handleNextMedium() {
		this.props.nextMedium(this.props.media);
	}

	handleClick(event) {
		if(this.props.open === true)
			this.props.closeLightbox();
	}

	handleKeyUp(e) {
		e.preventDefault();
		switch(e.keyCode) {
			case 27:
				this.props.closeLightbox();
				break;
			case 37:
				this.handlePreviousMedium();
				break;
			case 39:
				this.handleNextMedium();
				break;
			default:
		}
	}

	generateMedium(medium) {
		let elem = null
		switch(medium.type) {
			case 'picture':
				elem = <Picture className="lightbox-medium" src={medium.src} />
				break;
			case 'video':
				elem = <Video className="lightbox-medium" src={medium.src} />
				break;
			default:
				elem = <Picture className="lightbox-medium" src={medium.src} />
		};

		return (
			<div className="lightbox-container-medium">
				{elem}
			</div>
		);
	}

	render() {
		if(this.props.open) {
			const styles = {
				icon: {
					position: 'absolute',
					top: '50%',
					zIndex: 105,
				},
				next: {
					right: '10px',
				},
				previous: {
					left: '10px',
				}
			}

			return (
				<div className="lightbox-viewer" onClick={this.handleClick}>
					<EventListener
						target="window"
						onKeyUp={this.handleKeyUp}
					/>
					<LightboxToolbar />
					{this.generateMedium(this.props.medium)}
					<NextIcon
						onTouchTap={this.handleNextMedium}
						style={{...styles.icon, ...styles.next}}/>
					<PreviousIcon
						onTouchTap={this.handlePreviousMedium}
						style={{...styles.icon, ...styles.previous}}/>
				</div>
			);
		}
		return null;
	}
}

function mapStateToProps(state) {
	return {
		open: state.lightbox.lightboxOpened,
		medium: state.lightbox.medium,
		media: state.mediaList.processedMedia
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		closeLightbox,
		nextMedium,
		previousMedium,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LightboxViewer);
