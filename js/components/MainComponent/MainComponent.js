import React from 'react';
import LoginComponent from './LoginComponent';
import NavbarComponent from './NavbarComponent';
import SplashComponent from './SplashComponent';
import { Route, IndexRoute } from 'react-router';




export default class MainComponent extends React.Component {
	render() {
		return (
			<Route path="home">
				<IndexRoute component={SplashComponent} />
				{/*<NavbarComponent />*/}
				{/*<SplashComponent />				*/}
			</Route>

		)
	}
}
