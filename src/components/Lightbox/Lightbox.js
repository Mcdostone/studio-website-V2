import React from 'react';
import AutoLockScrolling from 'material-ui/internal/AutoLockScrolling';
import Picture from './Picture';
import LightboxInfos from './Lightbox-infos';
import LightboxControls from './Lightbox-controls';
import { connect } from 'react-redux';
import './Lightbox.css';

class Lightbox extends React.Component {

	generateMedium(medium) {
		switch(medium.type) {
			case 'picture':
				return <Picture src={medium.src} />
			default:
				return <Picture src={medium.src} />
		}
	}

	render() {
		if(this.props.open) {
			return (
				<div className="lightbox">
					{this.generateMedium(this.props.medium)}
					<LightboxInfos />
					<LightboxControls />
					<AutoLockScrolling lock={this.props.open}/>
				</div>
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

export default connect(mapStateToProps, null)(Lightbox);
