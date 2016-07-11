import React from 'react';

import API from '../../API';
import UserStore from '../../stores/UserStore';

let _currentUser;

export default class CoverComponent extends React.Component {

	constructor(props) {
		super(props);
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
		top: 0,
		// height: "30vh",
		background: '#222',
		color: '#fff'
	},
	profilePic: {
		marginTop: 20,
		height: 150,
		width: 150,
	}
}
