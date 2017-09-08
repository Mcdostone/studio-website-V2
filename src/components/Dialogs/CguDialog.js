import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const CguDialog = props => {
	const actions = [
		<FlatButton
			label="Cancel"
			primary={true}
			onTouchTap={props.handleClose}
		/>,
		<FlatButton
			label="Trust me, I'm engineer"
			primary={true}
			keyboardFocused={true}
		/>,
	];
	return (
		<Dialog
			title="Condition générales d'utilisations"
			actions={actions}
			modal={false}
			open={props.open}>
			<span>
				coucou
			</span>
		</Dialog>
	);

}

CguDialog.propTypes = {
	handleClose: PropTypes.func.isRequired,
	open: PropTypes.bool,
};

export default CguDialog;
