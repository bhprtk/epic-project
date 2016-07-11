import React from 'react';

import CoverComponent from './CoverComponent';
import UserStore from '../../stores/UserStore';
import API from '../../API';

let _currentUser;
export default class ProfileComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		}
	}

	componentWillMount() {
		console.log('this in componentWillMount', this);

	}

	componentDidMount() {
		API.getCurrentUser();
		UserStore.on("getCurrentUser", () => {
			console.log('this', this);
			this.setState({
				currentUser: UserStore.getCurrentUser()
			});
		});
	}



	render() {
		let _coverComponent;
		if(this.state.currentUser) {
			_coverComponent = <CoverComponent currentUser={this.state.currentUser}/>
		}
		return (
			<div>
				{_coverComponent}
			</div>
		)
	}
}
