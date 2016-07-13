import React from 'react';
import {Link} from 'react-router';
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
							src={_currentUser.picture || `http://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg`}
							style={styles.profilePic}
							className="img-circle"
							/>
						<p style={styles.displayName}>{_currentUser.displayName}</p>
						<p className="col-md-6 col-md-offset-3" style={styles.paragraphs}>{_currentUser.miniResume}</p>

						<p className="col-md-6 col-md-offset-3" style={styles.paragraphs}>
							<i className="fa fa-map-marker"></i> {_currentUser.location}
							</p>

						<p className="col-md-6 col-md-offset-3" style={styles.paragraphs}>
							<If condition={_currentUser.angelListLink}>
								<a style={styles.socialLink} href={_currentUser.angelListLink} target="_blank">
									<i className="fa fa-angellist fa-2x" style={styles.socialButtons}> </i>

								</a>

							</If>

							<If condition={_currentUser.linkedInLink}>
								<i className="fa fa-linkedin-square fa-2x" style={styles.socialButtons}> </i>

							</If>

							<i className="fa fa-twitter-square fa-2x" style={styles.socialButtons}> </i>
							<i className="fa fa-facebook-square fa-2x" style={styles.socialButtons}> </i>
							<i className="fa fa-github-square fa-2x" style={styles.socialButtons}> </i>
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
	},
	paragraphs: {
		paddingTop: 10
	},
	socialLink: {
		color: 'white'
	}
}
