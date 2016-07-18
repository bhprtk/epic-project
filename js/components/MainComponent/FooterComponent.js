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
						<a href="http://www.pratikbhandari.xyz" target="_blank">
							<span>www.pratikbhandari.xyz</span>
						</a>
					</div>

					<div className="col-md-4 text-center">
						Connect via social media
						<p>
							<a href="https://github.com/lazy-monk" target="_blank">
								<i className="fa fa-github-square fa-3x" style={styles.social}></i>

							</a>
							<a href="https://angel.co/lazy-monk" target="_blank">
								<i className="fa fa-angellist fa-3x" style={styles.social}></i>
							</a>
							<a href="https://www.linkedin.com/in/pratik-bhandari-b00032115" target="_blank">
								<i className="fa fa-linkedin-square fa-3x" style={styles.social}></i>

							</a>
						</p>
						<a role="button" className="btn btn-success" href="mailto:lazy.monk.13@gmail.com" style={styles.emailBtn}>
							<span className="fa fa-paper-plane" style={styles.icon}></span>
							Email
						</a>
					</div>

					<div className="col-md-4 text-center">
						<a role="button" className="btn btn-default btn-lg" href="https://github.com/lazy-monk/epic-project" target="_blank" style={styles.repoBtn}>
							<span className="fa fa-github-alt" style={styles.icon}></span>
							Project repository
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
	icon: {
		marginRight: 10
	},
	emailBtn: {
		background: '#197319'
	},
	repoBtn: {
		marginTop: 40
	}
}
