import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let _newUser, _loginResponse;
class UserStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch(action.actionType) {
				case ActionTypes.NEW_USER:
					_newUser = action.newUser;
					this.emit('newUser');
					break;
				case ActionTypes.NEW_LOGIN:
					_loginResponse = action.res;
					this.emit('loginResponse');
					break;
				default:
			}
		})
	}

	getNewUser() {
		return _newUser;
	}

	getLoginResponse() {
		return _loginResponse;
	}




}

export default new UserStore();
