import React from 'react';

export default class Navbar1 extends React.Component {
	render() {
		return (
			<div className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<strong>
					<a
						role="button"
						className="navbar-brand"
						onClick={() => window.scrollTo(0, 0)}>
							StartMeUp
					</a>
				</strong>
				</div>
			</div>
		)
	}
}
