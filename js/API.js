import {get, post, ajax} from 'jquery';
import UserActions from './actions/UserActions';

let API = {
	registerUser(user) {
		console.log('typeof user', typeof(user));
		console.log('user in API.js', user.email);
		post('/users/register', user)
		.then(res => {
			UserActions.newUser(res);
		})
		.catch(err => {
			UserActions.newUser(err);
		})
	}
}

export default API;
