import React from 'react';

import API from '../../API';
import CompaniesStore from '../../stores/CompaniesStore';

export default class StartupComponent extends React.Component {

	constructor(props) {
		super(props);

		this.submitForm = this.submitForm.bind(this);
		this.newCompany = this.newCompany.bind(this);
	}

	submitForm(e) {
		e.preventDefault();
		API.addCompany(this.state);
	}

	newCompany() {
		console.log('loool', CompaniesStore.getNewCompany());
	}

	componentDidMount() {
		CompaniesStore.on("newCompany", this.newCompany);
	}

	componentWillUnmount() {
		CompaniesStore.removeListener("newCompany", this.newCompany);
	}

	render() {
		return(
			<div style={styles.container}>
				<div style={styles.titleDiv}>
					<div className="container text-center">
						<h1>Create Startup</h1>

					</div>
				</div>

				<div className="col-md-8 col-md-offset-2" style={styles.page}>
					<form className="form-horizontal" onSubmit={this.submitForm}>
					<div>
						<strong className="text-left">Company Details</strong>
						<button
							className="btn btn-default pull-right"
							type="submit">
							Save
						</button>

					</div>
					<hr/>


						<div className="form-group">
							<p className="col-sm-3 control-label">Company</p>
							<div className="col-sm-6">
								<input
									required
									type="text"
									className="form-control"
									onChange={e => this.setState({companyName: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-3 control-label">Logo URL</p>
							<div className="col-sm-6">
								<input
									type="text"
									className="form-control"
									onChange={e => this.setState({logo: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-3 control-label">Company Website</p>
							<div className="col-sm-6">
								<input
									type="text"
									className="form-control"
									onChange={e => this.setState({website: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-3 control-label">Location</p>
							<div className="col-sm-6">
								<input
									type="text"
									className="form-control"
									onChange={e => this.setState({location: e.target.value})}/>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-3 control-label">Team size</p>
							<div className="col-sm-2">
								<select className="form-control" onChange={e => this.setState({teamSize: e.target.value})} defaultValue="1-10">
									<option value="1-10">1-10</option>
									<option value="11-50">11-50</option>
									<option value="51-200">51-200</option>
									<option value="201-500">201-500</option>
									<option value="500+">500+</option>
								</select>
							</div>
						</div>

						<div className="form-group">
							<p className="col-sm-3 control-label">Why Us?</p>
							<div className="col-sm-6">
								<textarea
									type="text"
									className="form-control"
									onChange={e => this.setState({whyUs: e.target.value})} />
							</div>

						</div>

						<div className="form-group">
							<p className="col-sm-3 control-label">Product</p>
							<div className="col-sm-6">
								<textarea
									type="text"
									className="form-control"
									onChange={e => this.setState({product: e.target.value})} />
							</div>

						</div>



					</form>
				</div>

			</div>

		)
	}
}

const styles = {
	titleDiv: {
		height: 150,
		background: '#222',
		color: '#fff',
		paddingTop: 30,
		marginBottom: 20
	},
	title: {
		fontSize: 64,
	},
	container: {
		background: '#fff',
		height: '100vh',

	},
	page: {
		paddingTop: 20,
		background: '#fafafa',
		paddingBottom: 20,
		paddingTop: 20,
	},
}
