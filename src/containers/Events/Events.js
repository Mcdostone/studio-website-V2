import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StudioList from '../../components/List/StudioList';
import E from './E';

class Events extends React.Component {

	render() {
		return (
			<StudioList gutter={16} className="studio-list-space">
				{Object.keys(this.props.dataSource).map(id =>
					<Link key={id} to={`events/${id}`}>
						<E square id={id} event={this.props.dataSource[id]}/>
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
