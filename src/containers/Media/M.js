import React from 'react';
import FavoriteAction from 'material-ui/svg-icons/action/favorite';
import IconButton from 'material-ui/IconButton';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import { Overlay } from '../../components/List';


class M extends React.Component {

	render() {
		const size = 100;
		const styleIcon =  {
    	width: size * 0.5,
    	height: size * 0.5,
  	};
		const style = {
    	width: size,
    	height: size,
    	padding: 0,
  	};
		let src = this.props.medium.src;
		let contentOverlay = <span>
			<FavoriteAction style={{ marginRight: 5 }} color="white" />
			<p>{this.props.medium.likes}</p>
		</span>

		if(this.props.medium.type === 'video') {
			src = `http://img.youtube.com/vi/${this.props.medium.src}/hqdefault.jpg`
			contentOverlay = <span className="flex-center-row">
				<IconButton
      		iconStyle={styleIcon}
      		style={style}
    		>
					<PlayArrow color="white" />
    		</IconButton>
			</span>;
		}
		return (
			<div className="item-content">
				<img src={src} alt="" />
				<Overlay>
					<span>
						{contentOverlay}
					</span>
				</Overlay>
			</div>
		);
	}
}

export default M;
