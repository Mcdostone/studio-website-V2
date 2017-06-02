import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { grey500, grey900 } from 'material-ui/styles/colors';
import IconViewModule from './icons/IconViewModule';
import IconViewQuilt from './icons/IconViewQuilt';

class ToolbarStudio extends React.Component {

	render() {
		return (
			<Toolbar style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}>

				<ToolbarGroup>
					<DropDownMenu
						value={1}
						labelStyle={{ color: grey500,  paddingLeft: 0 }}
					>
						<MenuItem value={1} primaryText="Last added" />
						<MenuItem value={2} primaryText="Most popular" />
						<MenuItem value={3} primaryText="Most liked" />
					</DropDownMenu>

					<DropDownMenu
						value={1}
						labelStyle={{ color: grey500 }}
					>
						<MenuItem value={1} primaryText="Photo" />
						<MenuItem value={2} primaryText="Video" />
						<MenuItem value={3} primaryText="Poster" />
					</DropDownMenu>
				</ToolbarGroup>

				<ToolbarGroup>
					<IconViewModule />
					<IconViewQuilt />
				</ToolbarGroup>

			</Toolbar>
		);
	}
}

export default ToolbarStudio;
