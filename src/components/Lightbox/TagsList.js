import React from 'react';
import Chip from 'material-ui/Chip';
import { spring, TransitionMotion } from 'react-motion';


class TagsList extends React.Component {

	willEnter() {
		return {
			opacity: 0,
			transform: 'scale(0)',
		};
	}

	render() {
  	const styles= this.props.tags.map(tag => ({
      key: tag,
      style: {
				margin: 2,
				opacity: spring(1),
			},
    }));

		return (
			<TransitionMotion
				styles={styles}
				willEnter={this.willEnter}>
				{interp =>
						<div className="tags-list">
						{interp.map((config, i) => <Chip key={config.key} style={config.style}>{config.key}</Chip>)}
					</div>
				}
			</TransitionMotion>
		);
	}
}

export default TagsList;
