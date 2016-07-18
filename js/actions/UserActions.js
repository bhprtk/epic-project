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
	},

	updatedUser(user) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.UPDATED_USER,
			user
		})
	},

	getAllUsers(users) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.ALL_USERS,
			users
		})
	},

	getOneUser(user) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.ONE_USER,
			user
		})
	},

	logout(msg) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.LOGOUT_USER,
			msg
		})
	}
};

export default UserActions;
