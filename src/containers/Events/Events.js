import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StudioList from '../../components/List/StudioList';
import E from './E';

class Events extends React.Component {

	render() {
		return (
			<StudioList gutter={16} className="studio-list-space">
				{Object.keys(this.props.dataSource).map(key =>
					<Link key={key} to={`events/${key}`}>
						<E square event={this.props.dataSource[key]}/>
					</Link>
				)}
			</StudioList>
		);
	}
}

Events.propTypes = {
	dataSource: PropTypes.object,
}

Events.defaultProps = {
	dataSource: {},
}

export default Events;
