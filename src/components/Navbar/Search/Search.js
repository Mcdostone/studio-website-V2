import React from 'react';
import EventListener from 'react-event-listener';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import { closeSearch } from '../../../actions/uiActions'
import './Search.css';

const styles = {
	position: 'absolute',
	top: '60px',
	bottom: '0',
	backgroundColor: 'rgba(255, 255, 255, 0.95)',
	width: '100%',
	paddingTop: 30,
	zIndex: 300,
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
};

const FONT_SIZE = 64;
const stylesInput = {
	fontSize: `${FONT_SIZE}px`,
	fontWeight: 100,
	width: '80%',
	fontStyle: 'italic',
	lineHeight: `${FONT_SIZE}px`,
	height: `${FONT_SIZE * 2}px`,
};

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	handleKeyUp(e) {
		if (e.keyCode === 27) {
			this.props.closeSearch();
		}
	}

	render() {
		return (
			<Paper style={styles}>
				<EventListener
					target="window"
					onKeyUp={this.handleKeyUp}
				/>
				<TextField
					autoFocus
					style={stylesInput}
					hintStyle={{ bottom: `${FONT_SIZE / 2}px`, color: 'gray' }}
					hintText="Search a tag, event..."
					onKeyPress={this.keyPressed}
				/>
			</Paper>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		closeSearch,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
