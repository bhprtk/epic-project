import AppDispatcher from  "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ChangeStateActions = {
	gotoRegister() {
		AppDispatcher.dispatch({
			actionType: ActionTypes.REGISTER_USER
		})
	}
}

export default ChangeStateActions;
