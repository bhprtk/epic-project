import React from 'react';
import LoginComponent from './LoginComponent';
import NavbarComponent from './NavbarComponent';
import SplashComponent from './SplashComponent';
import { Route, IndexRoute } from 'react-router';




export default class MainComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<SplashComponent />

			</div>
		)
	}
}
