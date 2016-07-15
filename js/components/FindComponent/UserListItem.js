import React from 'react';

export default class UserListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let user = this.props.user;
		return (
			<div className="thumbnail">
				<img src={user.picture} />
				<div className="caption">
					{user.displayName}
				</div>
			</div>
		)
	}
}
