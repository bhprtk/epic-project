import {get, post, ajax} from 'jquery';

let API = {
	registerUser(user) {
		console.log('typeof user', typeof(user));
		console.log('user in API.js', user.email);
		post('/users/register', user)
		.then(res => {
			console.log('res', res);
		})
		.catch(err => {
			console.log('err', err);
		})
	}
}

export default API;
