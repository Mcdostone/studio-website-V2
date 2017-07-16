import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Thumbnail from '../../components/Thumbnail';
import { fetchCover } from '../../actions/coverActions';
import { itemWrapper } from '../../wrappers';

class E extends React.Component {

	componentDidMount() {
		this.props.fetchCover(this.props.id);
	}

	render() {
		const src = this.props.covers[this.props.id];
		return (
			<Thumbnail square src={src}>
				<span className="title">{this.props.event.name}</span>
				<span className="subtitle">{this.props.event.getDate()}</span>
			</Thumbnail>
		);
	}

}

E.propTypes = {
	id: PropTypes.string.isRequired,
	event: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
	return {
		covers: state.covers,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchCover,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(itemWrapper(E));
