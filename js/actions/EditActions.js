import AppDispatcher from  "../AppDispatcher";
import {ActionTypes} from "../Constants";

let EditActions = {
	saveEdit() {
		console.log('2. EditActions');
		AppDispatcher.dispatch({
			actionType: ActionTypes.SAVE_EDIT
		});
		console.log('aigth');
	}
};

export default EditActions;
