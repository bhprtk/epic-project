import React from 'react';

import API from '../../API';
import UserStore from '../../stores/UserStore';
import EditCoverComponent from './EditCoverComponent';


let _currentUser;

export default class CoverComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			editProfile: false
		}

		this.editProfile = this.editProfile.bind(this);
	}

	editProfile() {
		this.setState({
			editProfile: true
		})
	}

	render() {
		_currentUser = this.props.currentUser;

		return (
				<div
					style={styles.container}>
					<div className="container text-center">
						<img
							src='http://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg'
							style={styles.profilePic}
							className="img-circle"
							/>
						<h2>{_currentUser.displayName}</h2>
					</div>
				</div>

		)
	}
}

const styles = {
	container: {
		// height: "30vh",
		background: '#222',
		color: '#fff'
	},
	profilePic: {
		marginTop: 20,
		height: 150,
		width: 150,
	},
	editBtn: {
		marginBottom: 10,
		marginTop: -10
	}
}
