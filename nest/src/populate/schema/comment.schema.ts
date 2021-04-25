import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
	content:{
		type:String,
		required:true
	},
	blog:{
		type:mongoose.Types.ObjectId,
		required:true,
		ref:'Blog'
	},
	user:{
		type:mongoose.Types.ObjectId,
		required:true,
		ref:'User'
	}
}, { timestamps:true });

export interface IComment {
	content:string;
	blog:string;
	user:string;
}

export type CommentDocument = mongoose.Document & IComment;