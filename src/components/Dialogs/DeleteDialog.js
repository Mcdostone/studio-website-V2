import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { red900 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';


class DeleteDialog extends React.Component {

	render() {
		const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Trust me, I'm engineer"
        primary={true}
				keyboardFocused={true}
        onTouchTap={this.props.handleConfirm}
      />,
    ];

		return (
			<Dialog
				title="Are you absolutly sure?"
				actions={actions}
				modal={false}
				open={this.props.open}>
				<span>
					This action cannot be undone. This will permanently delete the data.
					If some media are attached to this entity. media will be updated !
					<p style={{color: red900}}>{`Are you sure to delete ${this.props.resource}#${this.props.id}?`} </p>
				</span>
			</Dialog>
		);
	}

}

DeleteDialog.propTypes = {
	resource: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleConfirm: PropTypes.func.isRequired,
};

export default DeleteDialog;
