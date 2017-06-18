import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CloseIcon , ReportButton } from './icons';
import { closeLightbox } from '../../actions/lightboxActions'


class LightboxToolbar extends React.Component {

	render() {
		return (
			<div className="lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
				<ReportButton size={26} />
				<CloseIcon
					size={26}
					closeLightbox={this.props.closeLightbox}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		closeLightbox
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LightboxToolbar);

