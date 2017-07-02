import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Cover, Layout } from '../Layout';
import { fetchCover } from '../../actions/coverActions';

class Sandbox extends React.Component {

	componentDidMount() {
		this.props.fetchCover('media');
	}

	render() {
		const cover = (
			<Cover title="Sandbox" url={this.props.cover} />
		);

		const container = (
			<div>
  			<RaisedButton label="save Event" onTouchTap={() => this.props.fetchCover('media')} />
				<pre>
					{this.props.cover}
				</pre>
			</div>
		);

		return (
			<Layout cover={cover} container={container} />
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
		cover: state.cover.media,
		mediaList: state.media.processedMedia,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchCover,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sandbox);

