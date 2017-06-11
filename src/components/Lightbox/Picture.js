import React from 'react';

class Picture extends React.Component {

	render() {
		if(this.props.src !== null)
			return <img src={this.props.src} alt=""/>;

		return null;
	}
}

export default Picture;
