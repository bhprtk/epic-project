import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import qs from 'querystring';

let companySchema = new mongoose.Schema({
	companyName: String,
	logo: String,
	website: String,
	location: String,
	teamSize: String,
	whyUs: String,
	product: String
})
