import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let _newUser;
class UserStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch(action.actionType) {
				case ActionTypes.NEW_USER:
					_newUser = action.newUser;
					this.emit('newUser');
					break;
				default:
			}
		})
	}

	getNewUser() {
		return _newUser;
	}




}

export default new UserStore();
