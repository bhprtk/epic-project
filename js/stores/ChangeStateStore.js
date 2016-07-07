import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from "../Constants";
import {EventEmitter} from 'events';

export default class ChangeStateStore {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch(action.actionType) {
				case ActionTypes.GOTO_REGISTER:
					this.emit('goto_register');
					break;
				default:

			}
		})
	}
}
