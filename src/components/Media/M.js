import React from 'react';
import FavoriteAction from 'material-ui/svg-icons/action/favorite';
import Overlay from '../List/Overlay';

class M extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="item-content">
				<img src={this.props.medium} alt="" />
				<Overlay>
					<span>
						<FavoriteAction style={{ marginRight: 5 }} color="white" />
						<p>24</p>
					</span>
				</Overlay>
			</div>
		);
	}
}

export default M;
