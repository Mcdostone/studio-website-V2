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
		};
		this.onKeyPress = this.onKeyPress.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	onKeyPress(event) {
		if (event.charCode === 13) {
    	event.preventDefault();
			this.setState({tags: [...this.state.tags, event.target.value.trim()]})
  		this.setState({inputTag: ''})
			event.target.blur();
		}
	}

	handleOnChange(event) {
		this.setState({inputTag: event.target.value});
	}

	render() {
		const margin = 24;
		const styleDivider = {
			width: '100%',
			marginTop: margin,
			marginBottom: margin,
		};

		const adminButton = (
			<div className="lightbox-infos-top">
				<DashboardIconMenu color={grey500} hoverColor={grey900} />
			</div>
		);

		return (
			<Paper className="lightbox-infos">
				<Scrollbars >
					<div className="lightbox-infos-container">
						{adminButton}
						<LikeButton likes={this.props.medium.likes} />
						<div style={{marginTop: 24}}></div>
						<ExifInfos />
						<Divider style={styleDivider} />
						<TextField
							ref="textField"
							onKeyPress={this.onKeyPress}
							onChange={this.handleOnChange}
							hintText="Add a tag: loul sass"
							maxLength="14"
							value={this.state.inputTag}
						/>
						<TagsList tags={this.state.tags} />
					</div>
				</Scrollbars>
			</Paper>
		)
	}
}

export default LightboxInfos;
