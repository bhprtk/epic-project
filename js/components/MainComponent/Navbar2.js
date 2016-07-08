import React from 'react';
import { Link } from 'react-router';
export default class Navbar2 extends React.Component {
	constructor(props) {
		super(props);
	}

	clickThis() {
		console.log('huheuheuhue');
	}

	render() {
		return (
			<div className="navbar">
			  <div className="container">
			    <div className="navbar-header">
			      <Link to="/" className="navbar-brand">
							{/*<a className="navbar-brand">*/}

								StartMeUp.xyz
							{/*</a>*/}
			      </Link>
			    </div>

					<ul className="nav navbar-nav navbar-right">
						<li>
							<a
								role="button"
								onClick={this.clickThis}>
								<strong>
								Find startups
							</strong>
							</a>
						</li>
						<li>
							<a role="button">
								<strong>
								Create startups
							</strong>
							</a>
						</li>
						<li>
							<Link to="/profile">
								<strong>
								Profile
							</strong>
						</Link>
						</li>
					</ul>

			  </div>
			</div>
		)
	}
}
