import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let _allCompanies;

class CompaniesStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch(action.actionType) {
				case ActionTypes.ALL_COMPANIES:
				_allCompanies = action.companies;
				this.emit('getAllCompanies');
				break;
				default:
			}
		})
	}

	getAllCompanies() {
		return _allCompanies;
	}

}

export default new CompaniesStore();
