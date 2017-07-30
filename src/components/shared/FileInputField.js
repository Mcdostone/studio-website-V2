import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class FileInputField extends React.Component {

	constructor(props) {
		super(props);
		this.state = {filename: ''};
		this.onChange = this.onChange.bind(this);
	}

	getStylesContainer() {
		return {
			display: 'flex',
			marginTop: 14,
			flexDirection: 'row',
		};
	}

	getStyles() {
		return {
  		cursor: 'pointer',
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			width: '100%',
			opacity: 0,
  	};
	}

	onChange(e) {
		e.preventDefault();
		if(e.target.files.length === 1) {
			const file = e.target.files[0];
			this.setState({filename: file.name});
		}
		this.props.onChange(e);
	}

	render() {
		return (
			<div style={this.getStylesContainer()}>
				<RaisedButton style={{marginTop: 12}} label={this.props.label || 'Upload a file'} labelPosition="before" containerElement="label">
					<input type="file" accept="image/*" style={this.getStyles()} onChange={this.onChange} />
				</RaisedButton>
				  <TextField
					disabled
					id="input-file-name"
					style={{marginLeft: 12, flexGrow: 1, cursor: 'default'}}
      		value={this.state.filename} />
			</div>
		);
	}

}

FileInputField.propTypes = {
	onChange: PropTypes.func.isRequired,
}

export default FileInputField;

