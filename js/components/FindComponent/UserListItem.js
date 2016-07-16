import React from 'react';

export default class UserListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let user = this.props.user;
		return (
			<div className="list-group col-md-6">
				<button className="list-group-item" onClick={this.showMore}>

					<div className="media">
						<div className="media-left">
							<img className="media-object" src={user.picture} style={styles.picture}/>
						</div>
						<div className="media-body">
							<h4 className="media-heading">{user.displayName}</h4>
							<If condition={user.location}>
								<h6><i className="fa fa-map-marker"></i>  {user.location}</h6>
								<h5>{user.miniResume}</h5>

							</If>
						</div>
					</div>
				</button>
			</div>


		)
	}
}

const styles = {
	picture: {
		height: 100,
		width: 100,
	}
}
