import React from 'react';
import { build } from '../factories';
import crudWrapper from './crudWrapper';

export default function adminWrapper(WrappedComponent, resource, fetchOne) {

	const adminContainer = class extends React.Component {

		constructor(props) {
			super(props);
			this.save = this.save.bind(this);
		}

		componentDidMount() {
			if(!this.props.creation) {
				this.fetchData(this.props.match.params.id);
			}
		}

		fetchData(id) {
			this.props.fetchOne(resource, id);
		}

		save(data) {
			data.id === undefined ? this.props.create(resource, data) : this.props.update(resource, data);
		}

		render() {
			const data = this.props.creation === true ? build(resource) : this.props.state[resource][this.props.match.params.id];
			return <WrappedComponent {...this.props} save={this.save} data={data} />
		}

	}

	return crudWrapper(adminContainer, fetchOne);

}
