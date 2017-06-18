import React from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { Scrollbars } from 'react-custom-scrollbars';
import DashboardIconMenu from '../shared/DashboardIconMenu';
import TagsList from './TagsList';
import LikeButton from './LikeButton';
import Paper from 'material-ui/Paper';
import ExifInfos from './ExifInfos';

class LightboxInfos extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tags: ['prout', 'lol', 'cette beubar',
			'gro PD', 'fdfs','fs,ddfsd', 'ffds'],
			/*'fdsfd', 'sfdgfdgdfgh', 'gdf', 'fgd',
			'fsdfsddfsd', 'grols','fssfsdf', 'sdflksdklfs', 'fsdjksjkf',
			'fdsfsfsd', 'fshjsjh', 'zaa', 'caca', 'fshjssfhjsd',
			'weee', 'weash', 'fskdfjs', 'presqei', 'fi,o', 'note', 'a', 'cul',
			'last', 'ligne', 'piur ', 'fjksfjksfjks', 'fhshdjfshjdfhjs', 'fjksdk'],*/
		};
		this.onKeyPress = this.onKeyPress.bind(this);
	}

	onKeyPress(event) {
		if (event.charCode === 13) {
    	event.preventDefault();
			this.setState({tags: [...this.state.tags, event.target.value]})
  		event.target.value = null;
		}
	}

	render() {
		const margin = 24;
		const styleDivider = {
			width: '100%',
			marginTop: margin,
			marginBottom: margin,
		};

		const adminButton = (
			<div className="lightbox-infos-top">
				<DashboardIconMenu />
			</div>
		);

		return (
			<Paper className="lightbox-infos">
				<Scrollbars >
					<div className="lightbox-infos-container">
						{adminButton}
						<LikeButton  />
						<div style={{marginTop: 24}}></div>
						<ExifInfos />
						<Divider style={styleDivider} />
						<TextField
							onKeyPress={this.onKeyPress}
							hintText="Add a tag: loul sass"
							maxLength="14"
						/>
						<TagsList tags={this.state.tags} />
					</div>
				</Scrollbars>
			</Paper>
		)
	}
}

export default LightboxInfos;
