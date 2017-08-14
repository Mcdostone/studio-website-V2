import React from 'react';
import { build } from '../factories';
import PropTypes from 'prop-types';
import crudWrapper from './crudWrapper';

export default function adminWrapper(WrappedComponent, resource, fetchOne) {

	const adminContainer = class extends React.Component {

		constructor(props) {
			super(props);
			this.save = this.save.bind(this);
		}

		componentDidMount() {
			if(this.props.creation === false)
				this.props.fetchOne(resource, this.props.match.params.id);
		}

		save(data) {
			data.id === undefined ? this.props.create(resource, data) : this.props.update(resource, data);
		}

		render() {
			const data = this.props.creation === true ? build(resource) : this.props.state[resource][this.props.match.params.id];
			return <WrappedComponent {...this.props} save={this.save} data={data} />
		}

	}

	adminContainer.propTypes = {
		creation: PropTypes.bool
	}

	adminContainer.defaultProps = {
		creation: false
	}

	return crudWrapper(adminContainer, {fetchOne});

}
