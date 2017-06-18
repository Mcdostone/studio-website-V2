import React from 'react';
import AutoLockScrolling from 'material-ui/internal/AutoLockScrolling';
import Picture from './Picture';
import Video from './Video';
import LightboxViewer from './LightboxViewer';
import LightboxInfos from './LightboxInfos';
import { connect } from 'react-redux';
import './Lightbox.css';

class Lightbox extends React.Component {

	generateMedium(medium) {
		let elem = null;
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
			return (
				<div className="lightbox">
					<LightboxViewer medium={this.props.medium} />
					<LightboxInfos />
					<AutoLockScrolling lock={this.props.open} />
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
	}
}

export default connect(mapStateToProps, null)(Lightbox);
