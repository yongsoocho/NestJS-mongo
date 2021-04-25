import * as mongoose from 'mongoose'; // step two

export const UserSchema = new mongoose.Schema({
	name: {
		firstName:{
			type: String,
			required: true
		},
		lastName:{
			type: String,
			required: true
		}
	},
	age: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

// export interface IUser extends mongoose.Document {
// 	name:string;
// 	age:number;
// };

export interface IUser {
	name:string;
	age:number;
};

export type UserDocument = mongoose.Document & IUser;