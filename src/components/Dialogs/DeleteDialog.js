import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { red900 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import { crudWrapper } from '../../wrappers';

class DeleteDialog extends React.Component {

	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete() {
		this.props.remove(this.props.resource, this.props.data);
		this.props.handleClose();
		this.props.history.goBack();
	}

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
        onTouchTap={this.delete}
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
					<p style={{color: red900}}>{`Are you sure to delete ${this.props.resource}#${this.props.data.id}?`} </p>
				</span>
			</Dialog>
		);
	}

}

DeleteDialog.propTypes = {
	resource: PropTypes.string.isRequired,
	data: PropTypes.object,
	handleClose: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

export default crudWrapper(DeleteDialog);
