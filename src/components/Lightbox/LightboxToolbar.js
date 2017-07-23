import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CloseIcon } from './icons';
import { closeLightbox } from '../../actions/lightboxActions'
import ReportDialog from './ReportDialog';

class LightboxToolbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openSnackbar: false,
		};
	}

	render() {
		return (
			<div className="lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
				<ReportDialog />
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

