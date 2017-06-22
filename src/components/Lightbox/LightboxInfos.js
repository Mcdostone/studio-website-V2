import React from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { Scrollbars } from 'react-custom-scrollbars';
import { grey500, grey900 } from 'material-ui/styles/colors';
import DashboardIconMenu from '../shared/DashboardIconMenu';
import TagsList from './TagsList';
import LikeButton from './LikeButton';
import Paper from 'material-ui/Paper';
import ExifInfos from './ExifInfos';

class LightboxInfos extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputTag: '',
			tags: ['prout', 'lol', 'cette beubar'],
			width: 0,
		};
		this.onKeyPress = this.onKeyPress.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
	}

	updateDimensions() {
		this.setState({width: document.body.offsetWidth});
	}

	componentWillMount() {
		this.updateDimensions();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
  }

	onKeyPress(event) {
		if (event.charCode === 13 && event.target.value.length > 0) {
    	event.preventDefault();
			this.setState({tags: [...new Set([...this.state.tags, event.target.value.trim()])]})
  		this.setState({inputTag: ''})
			event.target.blur();
		}
	}

	handleOnChange(event) {
		this.setState({inputTag: event.target.value});
	}

	render() {
		const margin = 32;
		const styleDivider = {
			width: '100%',
			marginTop: margin,
			height: 0,
		};

		const adminButton = (
			<div className="lightbox-infos-top">
				<DashboardIconMenu color={grey500} hoverColor={grey900} />
			</div>
		);

		const container = (
			<div className="lightbox-infos-container">
				{adminButton}
				<LikeButton likes={this.props.medium.likes} />
				<Divider style={styleDivider} />
				<ExifInfos />
				<Divider style={styleDivider} />
				<TextField
					ref="textField"
					onKeyPress={this.onKeyPress}
					onChange={this.handleOnChange}
					hintText="Add a tag: loul sass"
					maxLength="14"
					fullWidth
					value={this.state.inputTag}
				/>
				<TagsList tags={this.state.tags} />
			</div>
		);

		return (
			<Paper className="lightbox-infos">
				{ this.state.width > 1400 ?	<Scrollbars>{container}</Scrollbars> : container }
			</Paper>
		)
	}
}

export default LightboxInfos;
