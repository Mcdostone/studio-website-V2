import React from 'react';
import StackGrid from 'react-stack-grid';
import './StudioList.css';

class StudioList extends React.Component {

	render() {
		return (
			<StackGrid
				className={this.props.className}
				columnWidth={'25%'}
				gutterHeight={this.props.gutter}
				monitorImagesLoaded={true}
				gutterWidth={this.props.gutter}
			>
				{this.props.children}
      </StackGrid>
		);
	}
}

export default StudioList;
