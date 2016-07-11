import React from 'react';

import CoverComponent from './CoverComponent';
import EditCoverComponent from './EditCoverComponent';

export default class EditCoverButtonsComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editProfile: false
		}

		this.editCover = this.editCover.bind(this);
	}

	editCover() {
		this.setState({
			editCover: true
		})
	}

	render() {
		let _display = <CoverComponent currentUser={this.props.currentUser}/>;
		if(this.state.editCover) {
			_display = <EditCoverComponent />;
		}

		return (
			<div
				className="container">
				<button
					className="btn btn-default"
					style={styles.editBtn}
					onClick={this.editCover}>
					Edit Profile
				</button>

				{_display}
			</div>
		)
	}
}

const styles = {
	editBtn: {
		marginBottom: 10,
		marginTop: -10
	}
}
