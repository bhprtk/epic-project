import React from 'react';
import API from '../../API';
import CompaniesStore from '../../stores/CompaniesStore';

export default class CompanyList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			companies: null
		}

		this.getAllCompanies = this.getAllCompanies.bind(this);
	}

	componentDidMount() {
		API.getAllCompanies();
		CompaniesStore.on("getAllCompanies", this.getAllCompanies);
	}

	getAllCompanies() {
		this.setState({
			companies: CompaniesStore.getAllCompanies()
		})
		console.log('this.state', this.state);

	}

	render() {
		return(
			<div>
				<h1>hello</h1>
				<If condition={this.state.companies}>
					<ul>
						{this.state.companies.map(company => {
							return <li>{company.website}</li>
						})}
					</ul>

				</If>

			</div>

		)
	}
}
