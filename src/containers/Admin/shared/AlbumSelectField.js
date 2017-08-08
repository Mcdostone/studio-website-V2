import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const AlbumSelectField = (props) => {
	const albums = props.albums;
	return (
		<SelectField
		floatingLabelFixed
			underlineStyle={props.underlineStyle}
			floatingLabelText={props.disableLabel ? null : 'Choose an album'}
			labelStyle={props.labelStyle}
			fullWidth
			value={props.value}
			onChange={props.onChange}>
				<MenuItem value={null} primaryText="" />
			{
				Object.keys(albums).map(idAlbum =>
				<MenuItem key={idAlbum} value={idAlbum} primaryText={albums[idAlbum].title} />)
			}
		</SelectField>
	);

}

AlbumSelectField.propTypes = {
	value: PropTypes.string,
	albums: PropTypes.object.isRequired,
	onChange: PropTypes.func,
};

AlbumSelectField.defaultProps = {
	onChange: (e, k, payload) => console.log(payload)
};

export default AlbumSelectField;
