import React from 'react';
import Chip from 'material-ui/Chip';
import { grey300 } from 'material-ui/styles/colors';

class TagsList extends React.Component {

	render() {
		const styleChip = {
			margin: 2,
			background: grey300,
		};

		return (
			<div className="tags-list">
				{this.props.tags.map(tag => <Chip key={tag} style={styleChip}>{tag}</Chip>)}
			</div>
		);
	}

}

export default TagsList;
