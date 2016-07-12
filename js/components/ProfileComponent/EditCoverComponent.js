import React from 'react';
import SaveEditStore from '../../stores/SaveEditStore';

export default class EditCoverComponent extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		SaveEditStore.on("saveEdit", () => {
			console.log('this.state in editCover', this.state);
			console.log('this.props in editCover', this.props);
		})
	}

	render() {
		console.log('this.props', this.props);
		return(
			<div className="container">
				<hr/>
				<div className="col-md-6">
					<form className="form-horizontal">

						<div className="form-group">
							<p className="col-sm-4 control-label">Display name</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" value={this.props.currentUser.displayName} onChange={e => this.setState({displayName: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Profile picture</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" value={this.props.currentUser.picture} onChange={e => this.setState({picture: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Mini resume</p>
							<div className="col-sm-8">
								<textarea type="text" className="form-control" value={this.props.currentUser.picture} onChange={e => this.setState({miniResume: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Location</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" value={this.props.currentUser.picture} onChange={e => this.setState({location: e.target.value})} />
							</div>
						</div>



					</form>

				</div>
				<div className="col-md-6">
					<form className="form-horizontal">

						<div className="form-group">
							<p className="col-sm-4 control-label">AngelList</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" value={this.props.currentUser.picture} onChange={e => this.setState({angelList: e.target.value})} />
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">LinkedIn</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" value={this.props.currentUser.picture} onChange={e => this.setState({linkedIn: e.target.value})} />
							</div>
						</div>


						<div className="form-group">
							<p className="col-sm-4 control-label">Twitter</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" value={this.props.currentUser.picture} onChange={e => this.setState({twitter: e.target.value})} />
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Facebook</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" value={this.props.currentUser.picture} onChange={e => this.setState({facebook: e.target.value})} />
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-4 control-label">Github</p>
							<div className="col-sm-8">
								<input type="text" className="form-control" value={this.props.currentUser.picture} onChange={e => this.setState({github: e.target.value})} />
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
