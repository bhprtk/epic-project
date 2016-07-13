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
		// src='http://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg'

		return (
				<div
					style={styles.container}>
					<div className="container text-center">
						<img
							src={_currentUser.picture}
							style={styles.profilePic}
							className="img-circle"
							/>
						<p style={styles.displayName}>{_currentUser.displayName}</p>
						<p className="col-md-6 col-md-offset-3">{_currentUser.miniResume}</p>
						<p className="col-md-6 col-md-offset-3">
							<i className="fa fa-map-marker"></i> {_currentUser.location}
							</p>
						<p className="col-md-6 col-md-offset-3">
							<i className="fa fa-angellist fa-2x" style={styles.socialButtons}> </i>
							<i className="fa fa-linkedin fa-2x" style={styles.socialButtons}> </i>
							<i className="fa fa-twitter fa-2x" style={styles.socialButtons}> </i>
							<i className="fa fa-facebook fa-2x" style={styles.socialButtons}> </i>
							<i className="fa fa-github fa-2x" style={styles.socialButtons}> </i>
							</p>
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
	},
	displayName: {
		fontSize: 64
	},
	socialButtons: {
		paddingLeft: 10
	}
}
