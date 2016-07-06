
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import qs from 'querystring';

// const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SECRET = 'asdfasdfjogkads';

// if(!JWT_SECRET) {
//   throw new Error('Missing JWT_SECRET');
// }

let userSchema = new mongoose.Schema({
	email: { type: String, unique: true, required: true },
	password: String,
	displayName: String
})

userSchema.statics.register = (newUser, cb) => {
	console.log('newUser', newUser);
	User.findOne({email: newUser.email }, (err, dbUser) => {
		if(err || dbUser) return cb(err || { error: 'Username not available.' });

		bcrypt.hash(newUser.password, 12, (err, hash) => {
			if(err) return cb(err);

			var user = new User({
				email: newUser.email,
				password: hash
			});

			console.log('new user', user);

			user.save(cb);
		})


	})
}

let User = mongoose.model('User', userSchema);
export default User;
