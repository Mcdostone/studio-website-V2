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
import { showMedium, addMedia } from '../../actions/lightboxActions';
import img from '../../assets/img.jpg';
import Lightbox from '../Lightbox';
import mock from './mock-media';

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
		this.props.addMedia(mock);
	}

	showMedium() {
		const m = 	{
			type: 'picture',
			src: 'https://images.pexels.com/photos/126282/pexels-photo-126282.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
		}
		console.log(this.props);
		this.props.tt(m);
	}

	render() {
		const cover = <Cover title="Media" />;
		const media = this.props.media;
		const container = (
			<div>
				<Lightbox />
				<RaisedButton label="Open lightbox" onTouchTap={this.showMedium} />
				<MediaToolbar />
				<StudioList gutter={5}>
					{this.props.media.map(medium => <Item square={this.props.squareView} data={medium} key={medium.src}><M medium={medium} /></Item>)}
				</StudioList>
			</div>
		);
		return (<Layout cover={cover} container={container} />);
	}
}

function mapStateToProps(state) {
	return {
		lightbox: state.lightbox,
		squareView: state.ui.squareView,
		media: state.lightbox.media,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    tt: showMedium,
		addMedia,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
