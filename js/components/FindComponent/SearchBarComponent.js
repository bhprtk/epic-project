import React from 'react';
import SearchInput, {createFilter} from 'react-search-input'

export default class SearchBarComponent extends React.Component {
	constructor(props) {
		super(props);

		this.searchUpdated = this.searchUpdated.bind(this);
	}

	searchUpdated() {
		console.log('searchUpdated');
	}

	render() {
		return (
			<SearchInput
				className="search-input"
				onChange={this.searchUpdated} />
		)
	}
}
