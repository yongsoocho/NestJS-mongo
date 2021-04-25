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
<<<<<<< HEAD
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
=======
}, { timestamps:true });
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5

export interface IBlog {
	title:string;
	content:string;
	user:string;
}

export type BlogDocument = mongoose.Document & IBlog;