import React from 'react';
import { Link } from 'react-router';
export default class Navbar2 extends React.Component {
	constructor(props) {
		super(props);
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
							<Link to="/feed/find" activeStyle={{color:'red'}}>
								<strong>
								Find startups
							</strong>
						</Link>
						</li>
						<li>
							<Link to="/feed/startup" activeStyle={{color:'red'}}>
								<strong>
									Create startups
								</strong>
							</Link>
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
