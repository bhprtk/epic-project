import React from 'react';

import CoverComponent from './CoverComponent';
import EditCoverComponent from './EditCoverComponent';
import EditActions from '../../actions/EditActions'

export default class EditCoverButtonsComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editProfile: false
		}

		this.saveEdit = this.saveEdit.bind(this);
	}

	saveEdit() {
		EditActions.saveEdit();
		this.setState({
			editCover: false
		})
	}

	render() {
		let _display = <CoverComponent currentUser={this.props.currentUser}/>;
		let _buttons = <div
										className="container">
										<button
											className="btn btn-default"
											style={styles.editCover}
											onClick={() => {this.setState({editCover: true})}}>
											Edit Profile
										</button>

									</div>;
		if(this.state.editCover) {
			_display = <EditCoverComponent currentUser={this.props.currentUser}/>;
			_buttons = <div
									className="container">
									<button
										className="btn btn-default"
										style={styles.editBtn}
										onClick={() => {
											this.setState({editCover: false});
										}}>
										Cancel
									</button>
									<button
										className="btn btn-default"
										style={styles.editBtn}
										onClick={this.saveEdit}>
										Save
									</button>

								</div>
		}

		return (
			<div>

				{_buttons}
				{_display}
			</div>
		)
	}
}

const styles = {
	editCover: {
		marginBottom: 10,
		marginTop: -10
	},
	editBtn: {
		marginRight: 10,
		width: 75
	}
}
