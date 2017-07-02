import React from 'react';
import './Layout.css';

class Layout extends React.Component {

	render() {
		return (
			<div className="layout-studio">
				{this.props.cover}
				<div className="container">
					{this.props.container}
				</div>
			</div>
		);
	}
}

export default Layout;
