import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Layout } from '../Layout';
import StudioList from '../../components/List/StudioList';
import { fetchAll } from '../../actions/fetchActions';
import { setCover, setTitle } from '../../actions/coverActions';
import T from './T';

class Types extends React.Component {

	componentDidMount() {
		this.props.setCover('types');
		this.props.setTitle('types');
		this.props.fetchAll('types');
	}

	getContainer() {
		return (
			<StudioList gutter={16} className="studio-list-space">
				{Object.keys(this.props.dataSource).map(key =>
					<Link key={key} to={`types/${key}`}>
						<T square type={this.props.dataSource[key]}/>
					</Link>
				)}
			</StudioList>
		)
	}

	render() {
		return (
			<Layout cover={this.props.cover} title={this.props.title}>
				{this.getContainer()}
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return {
		media: state.media.processedMedia,
		dataSource: state.types,
		cover: state.covers.current,
		title: state.covers.title
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		setCover,
		setTitle,
		fetchAll,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Types);
