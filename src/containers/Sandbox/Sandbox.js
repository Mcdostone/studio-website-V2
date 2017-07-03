import React from 'react';
import { connect } from 'react-redux';
import Test2 from '../Layout/Test2';
import E from '../Events/E';
import { StudioList, Item } from '../../components/List'


class Sandbox extends React.Component {

	render() {
		const container = (
			<StudioList>
				{this.props.events.map(event =>
					<Item square key={event.id}><E event={event} /></Item>
				)}
			</StudioList>
		);

		return (
			<Test2 name="Events">
				{container}
			</Test2>
		);
	}

}

function mapStateToProps(state) {
	return {
		events: state.events,
	}
}

export default connect(mapStateToProps, null)(Sandbox);
