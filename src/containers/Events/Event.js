import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOne } from '../../actions/fetchActions';
import Studio from '../Studio'


class Event extends React.Component {

	componentDidMount() {
		const eventId = this.props.match.params.eventId;
		this.props.fetchOne('events', eventId);
	}

	getEvent(id) {
		return this.props.events[id] !== undefined ? this.props.events[id] : this.props.events.DEFAULT;
	}

	componentWillReceiveProps(nextProps) {
		const oldId = this.props.match.params.eventId;
		const newId = nextProps.match.params.eventId;
		if(oldId !== newId) {
			this.props.fetchOne('events', newId);
			return true;
		}
		return false;
	}

	render() {
		const eventId = this.props.match.params.eventId;
		const event = this.getEvent(eventId);
		return (
			<Studio title={event.name} id={eventId} media={this.props.media} />
		);
	}

}


function mapStateToProps(state) {
	return {
		events: state.events,
		media: state.media.processedMedia,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchOne,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
