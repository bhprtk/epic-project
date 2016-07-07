import React from 'react';

import {
	Navbar,
	Nav,
	NavItem
} from 'react-bootstrap';

export default class NavbarComponent extends React.Component {
	render() {
		return(
			<Navbar inverse style={styles.navbar} className="navbar-fixed-top">
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">startmeup.xyz</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav className="navbar-right">
		      <NavItem eventKey={1} href="#">Sign up</NavItem>
		      <NavItem eventKey={2} href="#">Log in</NavItem>

		    </Nav>
		  </Navbar>
		)
	}
}

const styles = {
	navbar: {
		height: 75,
		paddingTop: 10,
		color: '#fff',
		background: '#222',
	}
}
