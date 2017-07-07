import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Layout } from '../Layout';
import StudioList from '../../components/List/StudioList';
import { fetchAll } from '../../actions/fetchActions';
import { setCover, setTitle } from '../../actions/coverActions';
import E from './E';

class Events extends React.Component {

	componentDidMount() {
		this.props.setCover('events');
		this.props.setTitle('events');
		this.props.fetchAll('events');
	}

	getContainer() {
		return (
			<StudioList gutter={16} className="studio-list-space">
				{Object.keys(this.props.dataSource).map(key =>
					<Link key={key} to={`events/${key}`}>
						<E square event={this.props.dataSource[key]}/>
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
		media: state.media,
		dataSource: state.events,
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

export default connect(mapStateToProps, mapDispatchToProps)(Events);
