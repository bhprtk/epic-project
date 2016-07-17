import React from 'react';
import LoginComponent from './LoginComponent';
import SplashComponent from './SplashComponent';
import Navbar2 from './Navbar2';
import { Route, IndexRoute } from 'react-router';




export default class MainComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar2 />
				<SplashComponent />

			</div>
		)
	}
}
