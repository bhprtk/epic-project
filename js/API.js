import {get, post, ajax, put} from 'jquery';
import UserActions from './actions/UserActions';
import EditActions from './actions/EditActions';
import CompanyActions from './actions/CompanyActions';

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
				API.getCurrentUser();
				// UserActions.updatedUser(res);
			})
			.catch(err => {
				// console.log('err', err);
			})
	},

	addCompany(company) {
		post('/companies/addNewCompany', company)
			.then(res => {
				CompanyActions.newCompany(res);
			})
			.catch(err => {
				console.log('err', err);
			})
	},

	getAllCompanies() {
		get('/companies/getAll')
			.then(res => {
				CompanyActions.getAllCompanies(res);
			})
			.catch(err => {
				console.log('err', err);
			})
	},

	getAllUsers() {
		get('/users/getAllUsers')
			.then(res => {
				UserActions.getAllUsers(res);
			})
			.catch(err => {
				console.log('err', err);
			})
	},

	getOneUser(userId) {
		get(`/users/getOneUser/${userId}`)
			.then(res => {
				UserActions.getOneUser(res);
			})
			.catch(err => {
				console.log('err', err);
			})
	},

	logout() {
		ajax({
			url: '/users/logout',
			type: 'DELETE',
		})
			.then(res => {
				UserActions.logout(res);
			})
			.catch(err => {
				console.log('err', err);
			})
	}

}

export default API;
