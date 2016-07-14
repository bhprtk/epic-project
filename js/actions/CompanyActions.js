import AppDispatcher from  "../AppDispatcher";
import {ActionTypes} from "../Constants";

let CompanyActions = {
	getAllCompanies(companies) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.ALL_COMPANIES,
			companies
		})
	}
}

export default CompanyActions;
