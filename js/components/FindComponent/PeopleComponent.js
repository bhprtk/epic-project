import React from 'react';

import API from '../../API';

export default class PeopleComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		API.getAllUsers();
	}

	render() {
		return (
			<h1>PeopleComponent</h1>
		)
	}
}
