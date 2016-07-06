import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import qs from 'querystring';

const JWT_SECRET = process.env.JWT_SECRET;

if(!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET');
}

let userSchema = new mongoose.Schema({
	email: { type: String, unique: true, required: true },
	password: String,
	displayName: String
})

userSchema.statics.register = (newUser, cb) => {
	console.log('newUser', newUser);
}
