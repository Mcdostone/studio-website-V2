import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StudioList from '../../components/List/StudioList';
import T from './T';

class Types extends React.Component {

	render() {
		return (
			<StudioList gutter={16} className="studio-list-space">
				{Object.keys(this.props.dataSource).map(key =>
					<Link key={key} to={`types/${key}`}>
						<T square type={this.props.dataSource[key]}/>
					</Link>
				)}
			</StudioList>
		);
	}
}

Types.propTypes = {
	dataSource: PropTypes.object,
}

Types.defaultProps = {
	dataSource: {},
}

export default Types;
