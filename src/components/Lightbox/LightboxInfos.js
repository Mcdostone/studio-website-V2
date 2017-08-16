import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import { Scrollbars } from 'react-custom-scrollbars';
import { grey500, grey900 } from 'material-ui/styles/colors';
import DashboardIconMenu from '../shared/DashboardIconMenu';
import TagsList from './TagsList';
import { build } from 'factories';
import LikeButton from './LikeButton';
import { createTag } from 'actions/tagActions';
import { tagMedium } from 'actions/mediaActions';
import Paper from 'material-ui/Paper';
import ExifInfos from './ExifInfos';

class LightboxInfos extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputTag: '',
			tagsList: '',
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
			const medium = this.props.medium;
			let tag = null;
			if(this.state.tagsList.includes(this.state.inputTag)) {
				const id = Object.keys(this.props.tags).filter(tagId => this.props.tags[tagId].tag === this.state.inputTag);
				tag = this.props.tags[id];
			}
			else {
				tag = build('tags');
				tag.tag = this.state.inputTag.trim();
			}
			this.props.tagMedium(medium, tag);
			this.setState({inputTag: ''});
  		event.target.blur();
		}
	}

	handleOnChange(event) {
		this.setState({inputTag: event.target.value});
	}

	render() {
		const tags = Object.keys(this.props.tags)
			.filter(tagId => this.props.medium.tags[tagId])
			.map(tagId => this.props.tags[tagId].tag);
		const margin = 32;

		const tagsOfMedium = Object.values(this.props.tags)
			.filter(tag => this.props.medium.tags[tag.id]);

		//console.log(this.props.medium, Object.values(this.props.tags));

		const styleDivider = {
			width: '100%',
			marginTop: margin,
			height: 0,
		};

		const adminButton = (
			<div className="lightbox-infos-top">
				<DashboardIconMenu
				color={grey500}
				resource="media"
				data={this.props.medium}
				hoverColor={grey900} />
			</div>
		);

		const container = (
			<div className="lightbox-infos-container">
				{adminButton}
				<LikeButton medium={this.props.medium} />
				<Divider style={styleDivider} />
				<ExifInfos exif={this.props.medium.exif} />
				<Divider style={styleDivider} />
				<AutoComplete
				ref="textField"
				onKeyPress={this.onKeyPress}
				onChange={this.handleOnChange}
				hintText="Add a tag: loul sass"
				filter={AutoComplete.fuzzyFilter}
				maxLength="14"
				onUpdateInput={(inputTag, tagsList) => this.setState({inputTag, tagsList})}
				maxSearchResults={5}
				onNewRequest={() => this.refs.textField.focus()}
				searchText={this.state.inputTag}
				dataSource={tags} />

				<TagsList tags={tagsOfMedium} />
			</div>
		);

		return (
			<Paper className="lightbox-infos">
				{ this.state.width > 1400 ?	<Scrollbars>{container}</Scrollbars> : container }
			</Paper>
		)
	}
}

LightboxInfos.propTypes = {
	medium: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		tags: state.tags,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		createTag,
		tagMedium,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LightboxInfos);
