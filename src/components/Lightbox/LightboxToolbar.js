import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Snackbar from 'material-ui/Snackbar';
import { CloseIcon } from './icons';
import { closeLightbox } from '../../actions/lightboxActions'
import ReportDialog from './ReportDialog';
import { grey900 } from 'material-ui/styles/colors';

class LightboxToolbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openSnackbar: false,
		};
	}

	handleSubmitReport = (msg) => {
		console.log('implement report ' , msg);
		this.setState({openSnackbar: true});
	}

	render() {
		return (
			<div className="lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
				<ReportDialog handleReport={this.handleSubmitReport} />
				<CloseIcon
					size={26}
					closeLightbox={this.props.closeLightbox}
				/>

  			<Snackbar
          open={this.state.openSnackbar}
          message="Your Report has been sent."
          autoHideDuration={4000}
					contentStyle={{background: 'white', color: grey900}}
					bodyStyle={{background: 'white'}}
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

