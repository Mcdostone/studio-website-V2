import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllMedia } from '../../actions/mediaActions';
import { setCover, setTitle } from '../../actions/coverActions';
import { Layout } from '../Layout';
import Studio from '../../components/Studio';


class Media extends React.Component {

	componentDidMount() {
		this.props.setCover('media');
		this.props.setTitle('media');
		//this.props.fetchAllMedia();
	}

	render() {
		return (
			<Layout cover={this.props.cover} title={'media'}>
				<Studio media={this.props.dataSource} />
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return {
		dataSource: state.media,
		cover: state.covers.media,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		setTitle,
		setCover,
		fetchAllMedia,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
