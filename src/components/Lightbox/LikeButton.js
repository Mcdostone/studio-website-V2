import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';
import { grey500 } from 'material-ui/styles/colors';
import { likeMedium } from 'actions/mediaActions';

class LikeButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			liked: false,
		};
	}

	handleLike = () => {
		this.setState({liked: !this.isLiked()});
		this.props.likeMedium(this.props.medium, this.props.auth.user);
	}

	isLiked = () => this.props.medium.likes[this.props.auth.user.id] === true || this.state.liked;

	render() {
		const style = { padding: '0 12px 0 0' };
		const classes = this.isLiked() ? 'button-like liked' : 'button-like'
		const icon = this.isLiked() ?
		<FavoriteIcon color="white" hoverColor="white" /> :
		<FavoriteBorderIcon color={grey500} hoverColor="white" />;

		return <div className={classes} style={style}
		onClick={() => this.handleLike()} >
			<IconButton disableTouchRipple>
				{icon}
			</IconButton>
			{Object.keys(this.props.medium.likes).length}
		</div>
	}

}

LikeButton.propTypes = {
	medium: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
		return {
			auth: state.auth,
			ownProps,
		}
	}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		likeMedium
		}, dispatch);
	}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
