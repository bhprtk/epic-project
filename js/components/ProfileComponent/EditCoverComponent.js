import React from 'react';
import SaveEditStore from '../../stores/SaveEditStore';
import EditActions from '../../actions/EditActions';
import API from '../../API';

export default class EditCoverComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: this.props.currentUser,
		};

		this.saveEdit = this.saveEdit.bind(this);
	}

	componentDidMount() {
		SaveEditStore.on("saveEdit", this.saveEdit);
	}

	componentWillUnmount() {
		SaveEditStore.removeListener("saveEdit", this.saveEdit);
		this.state = this.props;
	}

	saveEdit() {
		let _updatedUser = this.state;
		delete _updatedUser.currentUser;
		console.log('_updatedUser', _updatedUser);
		API.updateUser(_updatedUser);
	}

	render() {
		console.log('this.state', this.state);
		return(
			<div className="container">
				<hr/>
				<div className="col-md-6">
					<form className="form-horizontal">

						<div className="form-group">
							<p className="col-sm-4 control-label">Display name</p>
							<div className="col-sm-8">
								<input
									type="text"
									className="form-control"
									placeholder={this.state.currentUser.displayName}
									onChange={e => this.setState({displayName: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Profile picture</p>
							<div className="col-sm-8">
								<input
									type="text"
									className="form-control"
									placeholder={this.state.currentUser.picture}
									onChange={e => this.setState({picture: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Mini resume</p>
							<div className="col-sm-8">
								<textarea type="text" className="form-control" placeholder={this.state.currentUser.miniResume} onChange={e => this.setState({miniResume: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Location</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" placeholder={this.state.currentUser.location} onChange={e => this.setState({location: e.target.value})} />
							</div>
						</div>



					</form>

				</div>
				<div className="col-md-6">
					<form className="form-horizontal">

						<div className="form-group">
							<p className="col-sm-4 control-label">AngelList</p>
							<div className="col-sm-8">
								<input
									type="text"
									className="form-control"
									placeholder={this.state.currentUser.angelListLink}
									onChange={e => this.setState({angelListLink: e.target.value})} />
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">LinkedIn</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" placeholder={this.state.currentUser.linkedInLink} onChange={e => this.setState({linkedInLink: e.target.value})} />
							</div>
						</div>


						<div className="form-group">
							<p className="col-sm-4 control-label">Twitter</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" placeholder={this.state.currentUser.twitterLink} onChange={e => this.setState({twitterLink: e.target.value})} />
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Facebook</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" placeholder={this.state.currentUser.facebookLink} onChange={e => this.setState({facebookLink: e.target.value})} />
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Github</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" placeholder={this.state.currentUser.githubLink} onChange={e => this.setState({githubLink: e.target.value})} />
							</div>
						</div>



					</form>

				</div>

			</div>
		)
	}
}

const styles = {
	title: {
		paddingLeft: 50
	}
}
