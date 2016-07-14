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
	product: String,
	addedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
})

companySchema.statics.addNewCompany = (company, userId, cb) => {
	company.addedBy = userId;
	let newCompany = new Company();
	for(let k in company) {
		newCompany[k] = company[k];
	}
	newCompany.save(cb);
}


let Company = mongoose.model('Company', companySchema);
export default Company;
