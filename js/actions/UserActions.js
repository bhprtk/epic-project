import AppDispatcher from  "../AppDispatcher";
import {ActionTypes} from "../Constants";

let UserActions = {

	newUser(newUser) {
		console.log('newUser.email in UserActions', newUser.email);
		console.log('AppDispatcher', AppDispatcher);
		// if(newUser.responseText) {
		// 	console.log('newUser.responseText', newUser.responseText);
		// }
		AppDispatcher.dispatch({
			actionType: ActionTypes.NEW_USER,
			newUser
		})
	}
};

export default UserActions;
