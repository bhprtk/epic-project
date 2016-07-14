import React from 'react';
import API from '../../API';
import CompaniesStore from '../../stores/CompaniesStore';

export default class CompanyList extends React.Component {
	constructor(props) {
		super(props);


	}

	componentDidMount() {
		API.getAllCompanies();
		CompaniesStore.on("getAllCompanies", this.getAllCompanies);
	}

	getAllCompanies() {
		console.log('hehhehehe', CompaniesStore.getAllCompanies());
	}

	render() {
		return(
			<div className="list-group">
			  <button type="button" className="list-group-item">Cras justo odio</button>
			  <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
			  <button type="button" className="list-group-item">Morbi leo risus</button>
			  <button type="button" className="list-group-item">Porta ac consectetur ac</button>
			  <button type="button" className="list-group-item">Vestibulum at eros</button>
			</div>


		)
	}
}
