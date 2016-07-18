import React from 'react';


export default class InfoComponent extends React.Component {
	render() {
		return(
			<div style={styles.container}>

				<div className="text-center" style={styles.banner}>
					<div className="container">

						<div className="col-md-4 col-sm-4">
								<div>
									<img src="./employee.png" className="img-circle"/>

								</div>
								<div className="caption">
									<h3>yup</h3>
								</div>

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
		paddingTop: 70
	},
}
