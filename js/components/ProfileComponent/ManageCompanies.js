import React from 'react';

import CompanyListItem from '../FindComponent/CompanyListItem';

export default class ManageCompanies extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="list-group">
				{this.props.currentUser.companiesAdded.map(company => {
					return <CompanyListItem key={company._id} company={company} />
				})}
			</div>

		)
	}
}
