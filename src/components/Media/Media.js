import React from 'react';
import Cover from '../Cover';
import Layout from '../Layout';
import MediaToolbar from './MediaToolbar';
import SquareList from '../List/SquareList';

class Media extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quilt: false,
		};
		this.handleQuiltMode = this.handleQuiltMode.bind(this);
	}

	handleQuiltMode(quiltMode) {
		this.setState({ quilt: quiltMode });
	}

	render() {
		const images = [];
		for (let index = 1; index <= 9; index++) {
			images.push(`http://lorempicsum.com/futurama/400/400/${index}`);
		}

		const cover = <Cover title="Media" />;
		const container = (
			<div>
				<pre>
					quilt mode: {this.state.quilt ? 'yes' : 'no'}
				</pre>
				<MediaToolbar quilt={this.state.quilt} handleQuilt={this.handleQuiltMode} />
				<SquareList media={images}/>
			</div>
		);
		return (<Layout cover={cover} container={container} />);
	}
}

export default Media;
