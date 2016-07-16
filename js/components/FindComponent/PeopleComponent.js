import React from 'react';

import API from '../../API';
import UserStore from '../../stores/UserStore';
import UserListItem from './UserListItem';

export default class PeopleComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			users: null
		}

		this.getAllUsers = this.getAllUsers.bind(this);
	}

	componentDidMount() {
		API.getAllUsers();
		UserStore.on("getAllUsers", this.getAllUsers);
	}

	getAllUsers() {
		this.setState({
			users: UserStore.getAllUsers()
		})
	}

	componentWillUnmount() {
		UserStore.removeListener("getAllUsers", this.getAllUsers);
	}

	render() {
		return (
			<div>
				<div style={styles.titleDiv}>
					<div className="container text-center">
						<h1>Find People</h1>
					</div>
				</div>

				<If condition={this.state.users}>
					<div className="container">
							{this.state.users.map(user => {
								return <UserListItem key={user._id} user={user} />
							})}
					</div>

				</If>


			</div>
		)
	}
}

const styles = {
	titleDiv: {
		height: 150,
		background: '#222',
		color: '#fff',
		paddingTop: 30,
		marginBottom: 20
	}
}
