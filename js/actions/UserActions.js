import AppDispatcher from  "../AppDispatcher";
import {ActionTypes} from "../Constants";

let UserActions = {

	newUser(newUser) {
		// if(newUser.responseText) {
		// 	console.log('newUser.responseText', newUser.responseText);
		// }
		AppDispatcher.dispatch({
			actionType: ActionTypes.NEW_USER,
			newUser
		})
	},

	newLogin(res) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.NEW_LOGIN,
			res
		})
	},

	getCurrentUser(user) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.CURRENT_USER,
			user
		})
	}
};

export default UserActions;
