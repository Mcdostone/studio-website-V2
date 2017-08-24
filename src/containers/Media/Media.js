import React from 'react';
import Studio from '../../components/Studio';

const Media = (props) => <Studio media={Object.values(props.dataSource)} />

export default Media;
