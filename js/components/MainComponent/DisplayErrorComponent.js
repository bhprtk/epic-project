import React from 'react';

export default class DisplayErrorComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('this.props in errorComponent', this.props);
		return(
			<div
				className="alert alert-danger col-md-6 col-md-offset-3"
				style={styles.container}
				>
				<p><strong>{this.props.error}</strong></p>
			</div>
		)
	}
}

const styles = {
	container: {
		marginTop: 10
	}
}
