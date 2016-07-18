import React from 'react';

export default class FooterComponent extends React.Component {
	render() {
		return(
			<div style={styles.container}>
				<div className="container">
					<h3 className="text-center">Developer Info</h3>
					<hr/>
					<div className="col-md-4 text-center">
						<img src="2d.png" className="img-circle" style={styles.myPic}/>
						<h3>Pratik Bhandari</h3>

					</div>

					<div className="col-md-4 text-center">
						Social links
						<p>
							<i className="fa fa-github-square fa-3x" style={styles.social}></i>
							<i className="fa fa-angellist fa-3x" style={styles.social}></i>
							<i className="fa fa-linkedin-square fa-3x" style={styles.social}></i>
						</p>
						<button className="btn btn-danger-outline">
							GITHUB REPO
						</button>
					</div>

				</div>

			</div>
		)
	}
}

const styles = {
	container: {
		// height: '40vh',
		color: '#696969',
		background: '#fafafa'
	},
	myPic: {
		height: 150,
		width: 150,
	},
	social: {
		marginRight: 10,
		marginTop: 10,
	}
}
