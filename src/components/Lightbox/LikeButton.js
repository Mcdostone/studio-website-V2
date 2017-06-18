import React from 'react';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';
import { grey500, grey900 } from 'material-ui/styles/colors';

class LikeButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			liked: false,
		}
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick() {
		this.setState({
			liked: !this.state.liked
		});
	}


	render() {
		const style = {
			padding: '0 12px 0 0',
		}
		const classes = this.state.liked ? 'button-like liked' : 'button-like'
		const icon = this.state.liked ?
		<FavoriteIcon color="white" hoverColor="white" /> :
		<FavoriteBorderIcon color={grey500} hoverColor="white" />;

		return <div className={classes} style={style}
		onClick={this.handleOnClick}>
			<IconButton disableTouchRipple>
				{icon}
			</IconButton>
			hello there
		</div>
	}

}

export default LikeButton;
