import AppDispatcher from  "../AppDispatcher";
import {ActionTypes} from "../Constants";

let CompanyActions = {
	getAllCompanies(companies) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.ALL_COMPANIES,
			companies
		})
	},

	newCompany(company) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.NEW_COMPANY,
			company
		})
	}
}

export default CompanyActions;
