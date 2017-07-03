import React from 'react';
import { connect } from 'react-redux';
import { Overlay } from '../../components/List';
import { Cover } from '../Layout';

class E extends React.Component {

	render() {
		return (
			<div className="item-content">
				<Cover name={this.props.event.id} className="thumbnail" />
				<Overlay>
					<span className="name">{this.props.event.name}</span>
					<span className="date">{this.props.event.date}</span>
				</Overlay>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		covers: state.covers,
	}
}

export default connect(mapStateToProps, null)(E);
