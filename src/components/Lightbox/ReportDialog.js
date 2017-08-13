import React from 'react';
import PropTypes from 'prop-types';
import { ReportButton } from './icons';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import crudWrapper from '../../wrappers/crudWrapper';
import authWrapper from '../../wrappers/authWrapper';
import { Report } from '../../core';

class ReportDialog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			messageReport: '',
			textError: undefined,
		};
	}

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

	handleSubmit = () => {
		const lengthMessage = this.state.messageReport.length;
		if(lengthMessage >= 20 && lengthMessage <= 140) {
			const report = new Report(null, this.props.auth.user.id, this.state.messageReport, this.props.medium.id);
			this.props.create('reports', report);
			this.setState({
				open: false,
				textError: null,
				messageReport: '',
			});
		}
		else {
			this.setState({textError: 'The content must have a length between 20 and 140 characters.'});
		}
	}

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <ReportButton size={26} onTouchTap={this.handleOpen} />
        <Dialog
          title="Report a medium"
          actions={actions}
          modal={false}
          open={this.state.open}
					autoScrollBodyContent={true}
          onRequestClose={this.handleClose}
        >
          Why do you want to report this medium ?
					<TextField
	      		hintText="sexual content..."
  	    		fullWidth={true}
						maxLength={140}
						multiLine={true}
						onChange={(e) => this.setState({messageReport: e.target.value})}
						errorText={this.state.textError}
						value={this.state.messageReport}
    			/>
        </Dialog>
      </div>
    );
  }

}

ReportDialog.propTypes = {
	medium: PropTypes.object.isRequired
};

export default crudWrapper(authWrapper(ReportDialog));
