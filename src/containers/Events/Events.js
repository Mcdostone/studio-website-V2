import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from '../Layout';
// import { StudioList, Item } from '../../components/List';
import { setCover, setTitle } from '../../actions/coverActions';
// import E from './E';

class Events extends React.Component {

	componentDidMount() {
		this.props.setCover('events');
		this.props.setTitle('Events');
	}

	render() {
		/*const container = (
			<StudioList
				gutter={5}
				className="studio-list-space"
			>
				{Object.keys(this.props.events).map(id => <Item square key={id}><E event={this.props.events[id]} /></Item>)}
			</StudioList>
		);
*/
		return (
			<Layout cover={this.props.cover} title={this.props.title}/>
		);
	}
}

function mapStateToProps(state) {
	return {
		events: state.events,
		cover: state.covers.current,
		title: state.covers.title
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		setCover,
		setTitle,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);

