import React from 'react';
import ReactDOM from 'react-dom';
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

	keyPressed(e) {
		console.log('hell', e);
	}

	render() {
		return (
			<Paper style={styles}>
				<TextField
					style={stylesInput}
					hintStyle={{ bottom: `${FONT_SIZE / 2}px` }}
					hintText="Search..."
					onKeyPress={this.keyPressed}
				/>
			</Paper>
		);
	}
}



export default Search;
