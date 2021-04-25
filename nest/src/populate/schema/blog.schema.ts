import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	content:{
		type:String,
		required:true
	},
	user: {
		type: mongoose.Types.ObjectId,
		required:true,
		ref:'User'
	}
}, { 
	timestamps:true,
	toJSON:{ virtuals:true },
	toObject:{ virtuals:true }
});

BlogSchema.virtual("comments", {
	ref:'Comment',
	localField:'_id',
	foreignField:'blog'
});

export interface IBlog {
	title:string;
	content:string;
	user:string;
}

export type BlogDocument = mongoose.Document & IBlog;