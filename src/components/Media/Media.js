import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cover from '../Cover';
import Layout from '../Layout';
import MediaToolbar from './MediaToolbar';
import StudioList from '../List/StudioList';
import Item from '../List/Item';
import M from './M';
import { showMedium } from '../../actions/lightboxActions'

import Lightbox from '../Lightbox';

class Media extends React.Component {
	constructor(props) {
		super(props);

		const media = [];
		for (let index = 1; index <= 9; index++) {
			media.push(`http://lorempicsum.com/simpsons/600/${index * 100}/${index}`);
			media.push(`http://lorempicsum.com/futurama/1000/600/${index}`);
		}
		media.push('http://lorempicsum.com/simpsons/600/1000/4');

		this.state = { media, };
		this.showMedium = this.showMedium.bind(this);
	}

	showMedium() {
		const medium = {
			type: 'picture',
			src: 'http://lorempicsum.com/futurama/627/200/3'
		}
		this.props.showMedium(medium);
	}

	render() {
		const cover = <Cover title="Media" />;

		const container = (
			<div>
				<Lightbox />
				<RaisedButton label="Open lightbox" onTouchTap={this.showMedium} />
				<MediaToolbar />
				<StudioList gutter={5}>
					{this.state.media.map(medium => <Item square={this.props.squareView} key={medium}><M medium={medium} /></Item>)}
				</StudioList>
			</div>
		);
		return (<Layout cover={cover} container={container} />);
	}
}

function mapStateToProps(state) {
	return {
		lightbox: state.lightbox,
		squareView: state.ui.squareView
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    showMedium,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
