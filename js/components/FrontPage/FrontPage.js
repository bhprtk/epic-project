import React from 'react';
import LoginComponent from './LoginComponent';
import NavbarComponent from './NavbarComponent';
import SplashComponent from './SplashComponent';





export default class FrontPage extends React.Component {
	render() {
		return (
			<div>
				{/*<NavbarComponent />*/}
				<SplashComponent />
			</div>

		)
	}
}
