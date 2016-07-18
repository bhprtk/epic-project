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
						<h4>Pratik Bhandari</h4>

					</div>

					<div className="col-md-4 text-center">
						Connect via social media
						<p>
							<i className="fa fa-github-square fa-3x" style={styles.social}></i>
							<i className="fa fa-angellist fa-3x" style={styles.social}></i>
							<i className="fa fa-linkedin-square fa-3x" style={styles.social}></i>
						</p>
						<a role="button" className="btn btn-primary" href="mailto:lazy.monk.13@gmail.com">
							<span className="fa fa-paper-plane" style={styles.plane}></span>

							Email
						</a>
					</div>

					<div className="col-md-4 text-center">
						<a role="button" className="btn btn-default">
							Project repo
						</a>
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
		background: '#fafafa',
		paddingBottom: 50
	},
	myPic: {
		height: 100,
		width: 100,
	},
	social: {
		marginRight: 10,
		marginTop: 20,
		marginBottom: 20,
	},
	plane: {
		marginRight: 10
	}
}
