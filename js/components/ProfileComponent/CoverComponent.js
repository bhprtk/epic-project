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
			<div>

				<div style={styles.banner}>

				</div>
				<div
					style={styles.container} className="text-center">
					<div className="container">
						<img
							src={_currentUser.picture}
							style={styles.profilePic}
							className="img-circle"
							/>
						<p style={styles.displayName}>{_currentUser.displayName}</p>

						<If condition={_currentUser.miniResume}>
							<p className="col-md-6 col-md-offset-3" style={styles.paragraphs}>{_currentUser.miniResume}</p>
						</If>

						<If condition={_currentUser.location}>
							<p className="col-md-6 col-md-offset-3" style={styles.paragraphs}>
								<i className="fa fa-map-marker"></i> {_currentUser.location}
								</p>
							</If>


							<p className="col-md-6 col-md-offset-3" style={styles.paragraphs}>

								<If condition={_currentUser.angelListLink}>
									<a style={styles.socialLink} href={_currentUser.angelListLink} target="_blank">
										<i className="fa fa-angellist fa-2x" style={styles.socialButtons}> </i>
									</a>
								</If>

								<If condition={_currentUser.linkedInLink}>
									<a href={_currentUser.linkedInLink} style={styles.socialLink} target="_blank">
										<i className="fa fa-linkedin-square fa-2x" style={styles.socialButtons}> </i>
									</a>
								</If>

								<If condition={_currentUser.twitterLink}>
									<a href={_currentUser.twitterLink} style={styles.socialLink} target="_blank">
										<i className="fa fa-twitter-square fa-2x" style={styles.socialButtons}> </i>
									</a>
								</If>

								<If condition={_currentUser.facebookLink}>
									<a href={_currentUser.facebookLink} style={styles.socialLink} target="_blank">
										<i className="fa fa-facebook-square fa-2x" style={styles.socialButtons}> </i>
									</a>
								</If>

								<If condition={_currentUser.githubLink}>
									<a href={_currentUser.githubLink} style={styles.socialLink} target="_blank">
										<i className="fa fa-github-square fa-2x" style={styles.socialButtons}> </i>
									</a>
								</If>

							</p>

						</div>
					</div>
			</div>

		)
	}
}

const styles = {
	container: {
		// height: "30vh",
		// background: '#222',
		color: '#696969'
		// position: 'absolute'
	},
	profilePic: {
		marginTop: 100,
		height: 200,
		width: 200,
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
	},
	banner: {
		position: 'absolute',
		width: '100%',
		height: 200,
		background: '#222',
		zIndex: '-1'
	}
}
