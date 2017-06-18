import React from 'react';
import Chip from 'material-ui/Chip';

class TagsList extends React.Component {

	render() {
		return (
			<div className="tags-list">
				{this.props.tags.map(tag => <Chip key={tag} style={{margin: 2}}>{tag}</Chip>)}
			</div>
		);
	}

}

export default TagsList;
