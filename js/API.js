import {get, post, ajax} from 'jquery';
import UserActions from './actions/UserActions';

let API = {
	registerUser(user) {
		post('/users/register', user)
			.then(res => {
				UserActions.newUser(res);
			})
			.catch(err => {
				UserActions.newUser(err);
			})
	},

	loginUser(user) {
		console.log('log this user', user);
		post('/users/signin', user)
			.then(res => {
				console.log('res after signin', res);
				// UserActions.newLogin(res);
			})
			.catch(err => {
				console.log('err', err);
			})
	}
}

export default API;
