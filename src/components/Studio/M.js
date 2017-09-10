import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FavoriteAction from 'material-ui/svg-icons/action/favorite';
import { Thumbnail } from '../Thumbnail';
import { fetchMedium } from 'actions/mediaActions';
import itemWrapper from '../../wrappers/itemWrapper/itemWrapper';


class M extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.medium.src !== this.props.medium.src;
	}

	componentDidMount() {
		if(this.props.medium && this.props.medium.src === null) {
			this.props.fetchMedium('media', this.props.medium.id);
		}
	}

	render() {
		return (
			<Thumbnail src={this.props.medium.getThumbnail ? this.props.medium.getThumbnail() : null}>
				<span>
					<FavoriteAction style={{ marginRight: 5 }} color="white" />
					<p>{this.props.medium.countLikes()}</p>
				</span>
			</Thumbnail>
		);
	}
}

M.propTypes = {
	medium: PropTypes.object
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchMedium
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(itemWrapper(M));
