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
				UserActions.newLogin(res);
			})
			.catch(err => {
				UserActions.newLogin(err);
			})
	}
}

export default API;
