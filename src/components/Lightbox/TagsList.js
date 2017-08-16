import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import Anime from 'react-anime';

class TagsList extends React.Component {

	willEnter() {
		return {
			opacity: 0,
			transform: 'scale(0)',
		};
	}

	render() {
  	return (
			<Anime delay={(e, i) => i  * 500 + 500} duration={3000} opacity={[0, 1]}>
				{this.props.tags.map(tag => <Chip key={tag.id}>{tag.tag}</Chip>)}
			</Anime>
		);
	}
}

TagsList.propTypes = {
	tags: PropTypes.array.isRequired
}

TagsList.defaultProps = {
	tags: []
};

export default TagsList;
