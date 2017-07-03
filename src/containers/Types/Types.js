import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTypes, addTypes } from '../../actions/typesActions';
import { fetchCover } from '../../actions/coverActions';
import { Cover, Layout } from '../Layout';
import { StudioList, Item } from '../../components/List';
import T from './T';
import mocks from './mock-types';

class Types extends React.Component {

	constructor(props) {
		super(props);
		this.props.addTypes(mocks);
	}

	render() {
		const cover = <Cover title="Types" />;
		const container = (
			<StudioList
				className="studio-list-space"
				gutter={5}
			>
				{this.props.types.map(type => <Item square  key={type.name}><T type={type} /></Item>)}
			</StudioList>
		);
		return (<Layout cover={cover} container={container} />);
	}
}

function mapStateToProps(state) {
	return {
		types: state.types,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchCover,
		fetchTypes,
		addTypes,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Types);
