import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let _allCompanies, _newCompany;

class CompaniesStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch(action.actionType) {

				case ActionTypes.ALL_COMPANIES:
				_allCompanies = action.companies;
				this.emit('getAllCompanies');
				break;

				case ActionTypes.NEW_COMPANY:
				_newCompany = action.company;
				this.emit('newCompany');
				break;

				default:
			}
		})
	}

	getAllCompanies() {
		return _allCompanies;
	}

	getNewCompany() {
		return _newCompany;
	}

}

export default new CompaniesStore();
