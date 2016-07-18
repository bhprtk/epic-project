import React from 'react';

export default class FooterComponent extends React.Component {
	render() {
		return(
			<div style={styles.container}>
				<div className="container">
					<h1>FooterComponent</h1>

				</div>

			</div>
		)
	}
}

const styles = {
	container: {
		height: '40vh'
	}
}
