import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class CompanyListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showMore: false
		}

		this.showMore = this.showMore.bind(this);
	}

	showMore() {
		if(this.state.showMore) {
			this.setState({showMore: false});
		} else {
			this.setState({showMore: true});
		}
	}

	render() {
		let company = this.props.company;
		return (
			<MuiThemeProvider>
				<Paper zDepth={2}>
				<div className="list-group">
					<button className="list-group-item" onClick={this.showMore}>

							<div className="media">
								<div className="media-left">
									<img className="media-object" src={company.logo} style={styles.logo}/>
								</div>


								<div className="media-body">
									<h4 className="media-heading">{company.companyName} </h4>

									<p>
										<i className="fa fa-map-marker"></i>  {company.location}
											<If condition={company.teamSize}>
												<span style={styles.teamSize}>
													<i className="fa fa-users"></i> {company.teamSize}

												</span>

											</If>
									</p>

									<p>{company.product}</p>

									<If condition={this.state.showMore}>
										<p>{company.whyUs}</p>
									</If>

								</div>
							</div>
					</button>
				</div>
			</Paper>

			</MuiThemeProvider>

		)
	}
}

const styles = {
	logo: {
		height: 75,
		width: 75,
	},
	teamSize: {
		paddingLeft: 10
	}
}
