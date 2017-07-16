import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { OverlayedThumbnail } from '../../components/Thumbnail';
import { fetchCover } from '../../actions/coverActions';
import { itemWrapper } from '../../wrappers';

class A extends React.Component {

	componentDidMount() {
		this.props.fetchCover(this.props.id);
	}

	render() {
		const src = this.props.covers[this.props.id];
		return (
			<OverlayedThumbnail activeOverlay src={src}>
				<span className="title">{this.props.album.title}</span>
				<span className="subtitle">{this.props.album.getDate()}</span>
			</OverlayedThumbnail>
		);
	}

}

A.propTypes = {
	id: PropTypes.string.isRequired,
	album: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(itemWrapper(A));
