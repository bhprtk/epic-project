import React from 'react';
import Navbar2 from '../MainComponent/Navbar2';
import API from '../../API';
import UserStore from '../../stores/UserStore';

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
