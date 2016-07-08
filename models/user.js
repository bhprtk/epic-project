
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import qs from 'querystring';
import dotenv from 'dotenv';
dotenv.load();
const JWT_SECRET = process.env.JWT_SECRET;

// if(!JWT_SECRET) {
//   throw new Error('Missing JWT_SECRET');
// }

let userSchema = new mongoose.Schema({
	email: { type: String, unique: true, required: true },
	password: String,
	displayName: String
})

userSchema.statics.signin = (userObj, cb) => {

	User.findOne({email: userObj.email}, (err, dbUser) => {
		console.log('dbUser found for signin', dbUser);
		if(err || !dbUser) return cb(err || {error: 'Login failed. Email or password incorrect.'});
		bcrypt.compare(userObj.password, dbUser.password, (err, isGood) => {
			console.log('isGood', isGood);
			if(err || !isGood) return cb(err || { error: 'Login failed. Email or password incorrect.'});
			console.log('dbUser found', dbUser);
		})
	})
}

userSchema.statics.register = (newUser, cb) => {
	User.findOne({email: newUser.email }, (err, dbUser) => {
		if(err || dbUser) return cb(err || { error: 'Email is already in use.' });

		bcrypt.hash(newUser.password, 12, (err, hash) => {
			if(err) return cb(err);

			var user = new User({
				email: newUser.email,
				password: hash,
				displayName: newUser.displayName
			});
			user.save((err, savedUser) => {
				if(err) console.log('err');
				User.signin(savedUser, (err, user) => {
					console.log('loggedin user', user);
				});
			});
		})


	})
}

let User = mongoose.model('User', userSchema);
export default User;
