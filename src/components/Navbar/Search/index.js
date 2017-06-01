import React from 'react';
import EventListener from 'react-event-listener';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import './Search.css';

const styles = {
	position: 'absolute',
	top: '60px',
	bottom: '0',
	backgroundColor: 'rgba(255, 255, 255, 0.5)',
	width: '100%',
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
			this.props.toggleSearch();
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
					hintStyle={{ bottom: `${FONT_SIZE / 2}px` }}
					hintText="Search a tag, event..."
					onKeyPress={this.keyPressed}
				/>
			</Paper>
		);
	}
}

Search.propTypes = {
	toggleSearch: PropTypes.func.isRequired,
};

export default Search;
