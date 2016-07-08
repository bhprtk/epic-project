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
			<div className="navbar navbar-default" style={styles.container}>
			  <div className="container">
			    <div className="navbar-header">
			      <Link to="/" className="navbar-brand">
							<strong>
								StartMeUp
							</strong>
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
							<Link to="/feed/profile" activeStyle={{color:'red'}}>
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

const styles = {
	container: {
		background: '#fff',
	}
}
