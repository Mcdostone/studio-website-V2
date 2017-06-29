import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { addMedia, addDriveMedium } from '../../actions/mediaListActions';
import { connect } from 'react-redux';
import StudioList from '../List/StudioList';
import Item from '../List/Item';
import M from '../Media/M';
import Layout from '../Layout';
import Cover from '../Cover';


/*
	'0B_Bg4jpKgs_temU5elRuZjYzQzA',
	'0B_HWmUT9j81YN2FwWFlpY3BLU0U',
	'0B_HWmUT9j81YZGl5Ul9fdjJlYnc'
*/

class Sandbox extends React.Component {

	constructor(props) {
		super(props);
		this.getFile = this.getFile.bind(this);
		this.tmp = this.tmp.bind(this);
	}

	componentDidMount() {
		// setTimeout(() => window.gapi.client.load('drive', 'v2', this.getFile), 10000);
	}

	tmp() {
		this.props.addDriveMedium('0B_HWmUT9j81YZGl5Ul9fdjJlYnc');
	}

	getFile() {
		window.gapi.auth.setToken({access_token: this.props.auth.user.accessToken});
		window.gapi.client.drive.files.get({
			fileId: '0B_HWmUT9j81YZGl5Ul9fdjJlYnc'
		})
		.then(success => console.log(success), fail => console.log(fail));
	}

	render() {
		const cover = (
			<Cover title="Sandbox" />
		);

		const container = (
			<div>
				<RaisedButton
				label="hit google drive API"
				onTouchTap={this.tmp} />
				<StudioList
						gutter={16}
						monitorImagesLoaded={true}
						appear={{border: '2px solid red'}}
						loading={this.props.loading}
						fetchMoreData={this.loadMoreMedia}
					>
						{this.props.mediaList.map((medium, index) =>
							<Item
								square={this.props.squareView}
								data={{medium, index}}
								key={medium.src}
								onClick={this.showMedium}
							>
								<M medium={medium} />
							</Item>
						)}
					</StudioList>
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
		mediaList: state.mediaList.processedMedia,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addMedia,
		addDriveMedium,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sandbox);

