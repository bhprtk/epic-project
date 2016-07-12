import {get, post, ajax, put} from 'jquery';
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
		post('/users/signin', user)
			.then(res => {
				UserActions.newLogin(res);
			})
			.catch(err => {
				UserActions.newLogin(err);
			})
	},

	getCurrentUser() {
		get('/users/currentUser')
			.then(res => {
				UserActions.getCurrentUser(res);
			})
			.catch(err => {
				console.log('err getCurrentUser', err);
			})
	},

	updateUser(user) {
		console.log('user', user);
		console.log('JSON.stringify(user)', JSON.stringify(user));
		ajax({
			url: '/users/updateUser',
			type: 'PUT',
			data: user
		})
			.then(res => {
				API.getCurrentUser();
				// UserActions.updatedUser(res);
			})
			.catch(err => {
				console.log('err', err);
			})
	}
}

export default API;
