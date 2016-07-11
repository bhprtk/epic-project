import React from 'react';

export default class EditCoverComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container">
				<hr/>
				<div className="col-md-6">
					<form className="form-horizontal">
						<div className="form-group">
							<label className="col-sm-2 control-label">Display name</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" />
							</div>
						</div>
						
						<div className="form-group">
							<label className="col-sm-2 control-label">Display name</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" />
							</div>
						</div>
					</form>

				</div>

			</div>
		)
	}
}
