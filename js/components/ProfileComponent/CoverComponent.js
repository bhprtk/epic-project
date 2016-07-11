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
					<img src='{_currentUser.picture} || http://www.aspirehire.co.uk/aspirehire-co-uk/_img/profile.svg'/>
					<h1>{_currentUser.displayName}</h1>
				</div>
			</div>
		)
	}
}

const styles = {
	container: {
		height: "30vh",
		marginTop: "10vh",
		background: '#222',
		color: '#fff'
	}
}
