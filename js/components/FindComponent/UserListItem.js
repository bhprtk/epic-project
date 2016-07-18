import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {hashHistory} from 'react-router';

import ProfileComponent from '../ProfileComponent/ProfileComponent';

export default class UserListItem extends React.Component {
	constructor(props) {
		super(props);

		this.openProfile = this.openProfile.bind(this);
	}

	openProfile() {
		hashHistory.push(`/feed/viewProfile/${this.props.user._id}`);
	}

	render() {
		let user = this.props.user;
		return (
			<MuiThemeProvider>
				<Paper zDepth={2}>
					<div className="list-group">
						<button className="list-group-item" onClick={this.openProfile}>

							<div className="media">
								<div className="media-left">
									<img className="media-object" src={user.picture} style={styles.picture}/>
								</div>
								<div className="media-body">
									<h4 className="media-heading">{user.displayName}</h4>
									<If condition={user.location}>
										<h6><i className="fa fa-map-marker"></i>  {user.location}</h6>
									</If>
									<If condition={user.miniResume}>
										<p>{user.miniResume}</p>
									</If>
								</div>
							</div>
						</button>
					</div>

				</Paper>

			</MuiThemeProvider>



		)
	}
}

const styles = {
	picture: {
		height: 100,
		width: 100,
	}
}
