import React from 'react';
import {hashHistory} from 'react-router';

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
				<div style={styles.container}>
					{this.props.children}

				</div>

			</div>
		)
	}
}

const styles = {
	container: {
		paddingTop: 70
	}
}
