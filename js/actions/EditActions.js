import AppDispatcher from  "../AppDispatcher";
import {ActionTypes} from "../Constants";

let EditActions = {
	saveEdit() {
		AppDispatcher.dispatch({
			actionType: ActionTypes.SAVE_EDIT
		});
	},

	updateUser(user) {
		console.log('user', user);
	},

};

export default EditActions;
