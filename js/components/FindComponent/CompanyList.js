import React from 'react';
import API from '../../API';
import CompaniesStore from '../../stores/CompaniesStore';
import CompanyListItem from './CompanyListItem';

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
	}

	componentWillUnmount() {
		UserStore.removeListener("getAllCompanies", this.getAllCompanies);
	}

	render() {
		return(
			<div>
				<If condition={this.state.companies}>
					<div className="list-group">
						{this.state.companies.map(company => {
							return <CompanyListItem company={company}/>
						})}
					</div>

				</If>

			</div>

		)
	}
}
