import React from 'react';

class Picture extends React.Component {
	constructor(props) {
		super(props);
		this.stopPropagation = this.stopPropagation.bind(this);
	}

	stopPropagation(event) {
		event.stopPropagation();
	}

	render() {
		if(this.props.src !== null)
			return <img className={this.props.className} onClick={this.stopPropagation} src={this.props.src} alt=""/>;
		return null;
	}
}

export default Picture;
