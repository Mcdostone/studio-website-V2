import React from 'react';


class M extends React.Component {

	render() {
		return (
			<div>
				<pre>{JSON.stringify(this.props.medium)}</pre>
				<img src={this.props.medium.getThumbnail()} alt="" />
			</div>
		);
	}

}

export default M;
