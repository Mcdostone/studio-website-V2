import React from 'react';
import PropTypes from 'prop-types';
import AutoLockScrolling from 'material-ui/internal/AutoLockScrolling';
import { Scrollbars } from 'react-custom-scrollbars';
import Picture from './Picture';
import Video from './Video';
import LightboxViewer from './LightboxViewer';
import LightboxInfos from './LightboxInfos';
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
					<Scrollbars>
						<div className="lightbox-container">
							<LightboxViewer medium={this.props.medium} />
							<LightboxInfos medium={this.props.medium} />
							<AutoLockScrolling lock={this.props.open} />
						</div>
					</Scrollbars>
				</div>
			);
		}
		return null;
	}
}

Lightbox.propTypes = {
	medium: PropTypes.object,
	open: PropTypes.bool,
};

export default Lightbox;
