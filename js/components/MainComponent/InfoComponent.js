import React from 'react';


export default class InfoComponent extends React.Component {
	render() {
		return(
			<div style={styles.container}>

				<div className="text-center" style={styles.banner}>
					<div className="container">

						<div className="col-md-4 col-sm-4">
							<img src="./employee.png" />
						</div>

						<div className="col-md-8 col-sm-8" style={styles.info}>
							<h3>Find people to join your team and grow</h3>
						</div>

					</div>

				</div>

				<div className="text-center" style={styles.banner}>
					<div className="container">

						<div className="col-md-8 col-sm-8" style={styles.info}>
							<h3>Find startups to join and apply your skills</h3>
						</div>

						<div className="col-md-4 col-sm-4">
							<img src="./briefcase.png"/>
						</div>

					</div>

				</div>

				<div className="text-center" style={styles.banner}>
					<div className="container">

						<div className="col-md-4 col-sm-4">
							<img src="./rocket.png"/>
						</div>

						<div className="col-md-8 col-sm-8" style={styles.info}>
							<h3>Create your startup to showcase and hire talented team members</h3>
						</div>


					</div>

				</div>

			</div>
		)
	}
}

const styles = {
	container: {
		height: '100vh',
	},
	banner: {
		// height: '30vh',
		background: '#222',
		color: '#fff',
		marginTop: 100,
		paddingTop: 50,
		paddingBottom: 50,
	},
	info: {
		paddingTop: 80

	}
}
