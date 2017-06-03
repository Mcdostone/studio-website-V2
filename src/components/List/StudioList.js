import React from 'react';
import StackGrid from 'react-stack-grid';
import M from './M';
import Item from './Item';
import './StudioList.css';

class StudioList extends React.Component {

	render() {
		return (
			<StackGrid
				columnWidth={'25%'}
				gutterHeight={this.props.gutter}
				monitorImagesLoaded={true}
				gutterWidth={this.props.gutter}
			>
				{this.props.media.map(src => <Item square={this.props.square}><M src={src} key={src} /></Item>)}
      </StackGrid>
		);
	}
}

export default StudioList;
