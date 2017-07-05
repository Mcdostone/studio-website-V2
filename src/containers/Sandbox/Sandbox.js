import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from '../Layout';
import E from '../Events/E';
import { StudioList, Item } from '../../components/List'
import { setCover, setTitle } from '../../actions/coverActions';


class Sandbox extends React.Component {

	componentDidMount() {
		this.props.setTitle('sandbox');
		this.props.setCover('media');
	}

	render() {
		const container = (
			<StudioList>
				{this.props.events.map(event =>
					<Item square key={event.id}><E event={event} /></Item>
				)}
			</StudioList>
		);

		return (
			<Layout cover={this.props.cover} title={this.props.title}>
				{container}
			</Layout>
		);
	}

}

function mapStateToProps(state) {
	return {
		events: state.events,
		cover: state.covers.current,
		title: state.covers.title,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		setCover,
		setTitle
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sandbox);
