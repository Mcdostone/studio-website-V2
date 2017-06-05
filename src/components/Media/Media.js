import React from 'react';
import Cover from '../Cover';
import Layout from '../Layout';
import MediaToolbar from './MediaToolbar';
import StudioList from '../List/StudioList';
import Item from '../List/Item';
import M from './M';

class Media extends React.Component {
	constructor(props) {
		super(props);

		const media = [];
		for (let index = 1; index <= 9; index++) {
			media.push(`http://lorempicsum.com/simpsons/600/${index * 100}/${index}`);
			media.push(`http://lorempicsum.com/futurama/1000/600/${index}`);
		}
		media.push('http://lorempicsum.com/simpsons/600/1000/4');

		this.state = {
			squareView: true,
			media,
		};
		this.handleSquareView = this.handleSquareView.bind(this);
	}

	handleSquareView(isSquareView) {
		this.setState({ squareView: isSquareView });
	}

	render() {
		const cover = <Cover title="Media" />;
		const container = (
			<div>
				<MediaToolbar squareView={this.state.squareView} handleSquareView={this.handleSquareView} />
				<StudioList gutter={5}>
					{this.state.media.map(medium => <Item square={this.state.squareView} key={medium}><M medium={medium} /></Item>)}
				</StudioList>
			</div>
		);
		return (<Layout cover={cover} container={container} />);
	}
}

export default Media;
