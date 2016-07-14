import React from 'react';

import CompanyList from './CompanyList';

export default class FindComponent extends React.Component {
	render() {
		return(
			<div>
				<div style={styles.titleDiv}>
					<div className="container text-center">
						<h1>Find Companies</h1>

					</div>

				</div>

				<div className="col-md-8">
					<CompanyList />
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
	}
}
