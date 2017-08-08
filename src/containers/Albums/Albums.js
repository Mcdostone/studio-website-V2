import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StudioList from '../../components/List/StudioList';
import A from './A';

const Albums = (props) => {
	return (
		<StudioList gutter={16} className="studio-list-space">
			{Object.keys(props.dataSource).map(id =>
				<Link key={id} to={`albums/${id}`}>
					<A square id={id} album={props.dataSource[id]}/>
				</Link>
			)}
		</StudioList>
	);
}

Albums.propTypes = {
	dataSource: PropTypes.object,
}

Albums.defaultProps = {
	dataSource: {},
}

export default Albums;
