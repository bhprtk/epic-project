import React from 'react';

import CoverComponent from './CoverComponent';
import UserStore from '../../stores/UserStore';
import API from '../../API';

let _currentUser;
export default class ProfileComponent extends React.Component {

	constructor(props) {
		super(props);
		// API.getCurrentUser();
		this.state = {
			currentUser: null
		}
		this.getCurrentUser = this.getCurrentUser.bind(this);
	}

	componentWillMount() {
		API.getCurrentUser();
		UserStore.on("getCurrentUser", () => {
			this.setState({
				currentUser: UserStore.getCurrentUser()
			});
		});
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentWillUnmount() {
		// UserStore.removeListener("getCurrentUser", this.getCurrentUser);
	}

	getCurrentUser() {
		// this.setState({
		// 	currentUser: UserStore.getCurrentUser()
		// });
		// console.log('this.state in getCurrentUser', this.state);
	 	_currentUser = UserStore.getCurrentUser();
	}



	render() {
		let _coverComponent;
		if(this.state.currentUser) {
			_coverComponent = <CoverComponent currentUser={this.state.currentUser}/>
		}
		return (
			<div>
				<h3>edit buttons</h3>
				{_coverComponent}
			</div>
		)
	}
}
