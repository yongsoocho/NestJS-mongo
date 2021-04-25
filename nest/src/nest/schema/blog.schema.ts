import *  as mongoose from 'mongoose';
import { IUser } from './user.schema';
import { IComment, CommentSchema } from './comment.schema';

export const BlogSchema = new mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	content:{
		type:String,
		required:true
	},
	user:{
		_id:{ type:mongoose.Types.ObjectId, required:true, ref:'NestUser' },
		name:{ firstName:{ type:String, required:true }, lastName:{ type:String, required:true } },
		age:{ type:Number, required:true}
	},
	comments: [CommentSchema]
}, { timestamps:true });

export interface IBlog {
	title:string;
	content:string;
	user:IUser;
	comments:IComment[];
};

export type BlogDocument = mongoose.Document & IBlog;