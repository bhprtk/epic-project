import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let _newUser, _loginResponse, _currentUser, _allUsers, _oneUser, _logoutMsg;
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

				case ActionTypes.CURRENT_USER:
					_currentUser = action.user;
					this.emit('getCurrentUser');
					break;

				case ActionTypes.ALL_USERS:
					_allUsers = action.users;
					this.emit('getAllUsers');
					break;

				case ActionTypes.ONE_USER:
					_oneUser = action.user;
					this.emit('getOneUser');
					break;

				case ActionTypes.LOGOUT_USER:
					_logoutMsg = action.msg;
					this.emit('logout');
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

	getCurrentUser() {
		return _currentUser;
	}

	getAllUsers() {
		return _allUsers;
	}

	getOneUser() {
		return _oneUser;
	}

	getLogoutMsg() {
		return _logoutMsg;
	}



}

export default new UserStore();
