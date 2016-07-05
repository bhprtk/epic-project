import AppDispatcher from  "../AppDispatcher";
import {ActionTypes} from "../Constants";

let UserActions = {
	userRegister(user) {
		console.log('user', user);
		AppDispatcher.dispatch({
			actionType: ActionTypes.REGISTER_USER,
			user
		})
	}
};

export default UserActions;
