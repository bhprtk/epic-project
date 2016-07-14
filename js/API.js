import {get, post, ajax, put} from 'jquery';
import UserActions from './actions/UserActions';
import EditActions from './actions/EditActions';

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
		ajax({
			url: '/users/updateUser',
			type: 'PUT',
			data: user
		})
			.then(res => {
				console.log('res is back', res);
				API.getCurrentUser();
				// UserActions.updatedUser(res);
			})
			.catch(err => {
				// console.log('err', err);
			})
	},

	addCompany(company) {
		// post('/compan')
		console.log('company', company);
	}
}

export default API;
