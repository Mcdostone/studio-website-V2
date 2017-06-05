import React from 'react';
import Avatar from 'material-ui/Avatar';
import Layout from '../Layout';
import Cover from '../Cover';

class Profile extends React.Component {

	render() {
		const cover = (
			<Cover>
				<Avatar
					size={150}
					src="http://lorempicsum.com/futurama/255/200/2"
        />
				<p className="cover-name">Yann Prono</p>

			</Cover>
		);
		return (
			<Layout cover={cover}>
			pro!
			</Layout>
		)
	}
}

export default Profile;
