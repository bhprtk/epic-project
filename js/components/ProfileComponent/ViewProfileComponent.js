import React from 'react';

import API from '../../API';
import UserStore from '../../stores/UserStore';
import CoverComponent from './CoverComponent';

export default class ViewProfileComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			oneUser: null
		}

		this.getOneUser = this.getOneUser.bind(this);
	}

	componentDidMount() {
		API.getOneUser(this.props.params.userId);
		UserStore.on("getOneUser", this.getOneUser);
	}

	getOneUser() {
		this.setState({
			oneUser: UserStore.getOneUser()
		});
	}

	componentWillUnmount() {
		UserStore.removeListener("getOneUser", this.getOneUser);
	}

	render() {
		return(
			<div>
				<If condition={this.state.oneUser}>
					<CoverComponent currentUser={this.state.oneUser}/>
				</If>
			</div>
		)
	}
}
