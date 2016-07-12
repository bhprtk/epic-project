import React from 'react';

import CoverComponent from './CoverComponent';
import EditCoverButtonsComponent from './EditCoverButtonsComponent';
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

	componentDidMount() {
		API.getCurrentUser();
		UserStore.on("getCurrentUser", () => {
			this.setState({
				currentUser: UserStore.getCurrentUser()
			});
		});
	}



	render() {
		let _editCoverButtons;
		if(this.state.currentUser) {
			_editCoverButtons = <EditCoverButtonsComponent currentUser={this.state.currentUser}/>
		}
		return (
			<div>
				{_editCoverButtons}
			</div>
		)
	}
}
