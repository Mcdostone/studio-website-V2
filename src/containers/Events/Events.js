import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Cover } from '../Layout';
import { StudioList, Item } from '../../components/List';
import { fetchCover } from '../../actions/coverActions';
import E from './E';

class Events extends React.Component {

	componentDidMount() {
	}

	render() {
		const cover = <Cover title="Events" />;
		const container = (
			<StudioList
				gutter={5}
				className="studio-list-space"
			>
				{this.props.events.map(event => <Item square key={event.id}><E event={event} /></Item>)}
			</StudioList>
		);

		return (
			<Layout cover={cover} container={container} />
		);
	}
}

function mapStateToProps(state) {
	return {
		events: state.events,
		cover: state.covers.current
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchCover,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);

