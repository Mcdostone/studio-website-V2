import React from 'react';
import './ProgressiveImg.css';


class ProgressiveImg extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			placeholderClassNames: 'progressive-img progressive-img-visible',
			srcClassNames: 'progressive-img'
		}
	}

	componentDidMount() {
		console.log('here');
	}

	handleImageLoaded(e) {
		if(!this.state.visible)
			this.setState({
				visible: true,
				placeholderClassNames: this.state.srcClassNames,
				srcClassNames: this.state.placeholderClassNames
			});
	}

	render() {
		return (
			<div className="progressive-img-container">
				<img style={{position: 'absolute' }}src={this.props.placeholder} className={this.state.placeholderClassNames} alt="" />
				<img src={this.props.src} className={this.state.srcClassNames} onLoad={this.handleImageLoaded.bind(this)} alt="" />
			</div>
		);
	}

}

export default ProgressiveImg;

