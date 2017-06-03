import React from 'react';
import StackGrid from 'react-stack-grid';
import M from './M';

class MasonryList extends React.Component {

	render() {
		return (
			<StackGrid
				columnWidth={'33%'}
				gutterHeight={10}
				gutterWidth={10}
			>
				{this.props.media.map(src => <M src={src} key={src} />)}
      </StackGrid>
		);
	}
}

export default MasonryList;
