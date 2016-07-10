import React from 'react';

import CoverComponent from './CoverComponent';
import UserStore from '../../stores/UserStore';

export default class ProfileComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: UserStore.getCurrentUser()
		}
	}

	componentDidMount() {
		console.log('this.state', this.state);
	}

	render() {
		console.log('this.props', this.props);
		return (
			<CoverComponent />
		)
	}
}
