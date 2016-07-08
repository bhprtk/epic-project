import React from 'react';
import NavbarComponent from '../MainComponent/NavbarComponent';
import Navbar2 from '../MainComponent/Navbar2';

export default class FeedComponent extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar2 />
				{this.props.children}

			</div>
		)
	}
}
