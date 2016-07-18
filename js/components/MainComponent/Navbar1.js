import React from 'react';
import { Link } from 'react-router';


export default class Navbar1 extends React.Component {
	render() {
		return (
			<div className="navbar navbar-default navbar-fixed-top" style={styles.container}>
				<div className="container">
					<strong>
					<Link
						to="/"
						role="button"
						className="navbar-brand"
						onClick={() => window.scrollTo(0, 0)}>
							StartMeUp
					</Link>
				</strong>

				<ul className="nav navbar-nav navbar-right">
					<li>
						<Link to="/signup" activeStyle={{color:'red'}}>
							<strong>
							Sign Up
						</strong>
					</Link>
					</li>
					<li>
						<Link to="/login" activeStyle={{color:'red'}}>
							<strong>
							Login
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
		marginBottom: '500px'
	}
}
