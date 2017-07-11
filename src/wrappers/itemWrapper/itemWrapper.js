import React from 'react';
import './itemWrapper.css';


export default function itemWrapper(WrappedComponent) {

	return class extends React.Component {
		render() {
			const classNames = this.props.square ? 'item square' : 'item';
			return (
				<div className={classNames}>
					<WrappedComponent style={{background: 'red'}} {...this.props} />
				</div>
			);
		}
	};

};
