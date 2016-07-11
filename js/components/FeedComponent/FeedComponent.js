import React from 'react';
import NavbarComponent from '../MainComponent/NavbarComponent';
import Navbar2 from '../MainComponent/Navbar2';
import API from '../../API';
import UserStore from '../../stores/UserStore';

export default class FeedComponent extends React.Component {
	constructor(props){
		super(props);

		this.getCurrentUser = this.getCurrentUser.bind(this);
	}

	componentWillMount() {
		// API.getCurrentUser();
	}

	componentDidMount() {
		// UserStore.on("getCurrentUser", this.getCurrentUser);
	}

	getCurrentUser() {
		// let _currentUser = UserStore.getCurrentUser();
		// console.log('_currentUser', _currentUser);
	}

	render() {
		return (
			<div>
				<Navbar2 />
				{this.props.children}

			</div>
		)
	}
}
