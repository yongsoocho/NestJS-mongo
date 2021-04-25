import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { BlogDocument, IBlog } from './schema/blog.schema';
import { UserDocument, IUser } from './schema/user.schema';
<<<<<<< HEAD
import { CommentDocument, IComment } from './schema/comment.schema';
=======
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5

@Injectable()
export class PopulateService {
	constructor(
		@InjectModel('User') private readonly userModel:Model<UserDocument>,
<<<<<<< HEAD
		@InjectModel('Blog') private readonly blogModel:Model<BlogDocument>,
		@InjectModel('Comment') private readonly commentModel:Model<CommentDocument>
=======
		@InjectModel('Blog') private readonly blogModel:Model<BlogDocument>
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5
	) {}

	async getUser():Promise<IUser[]> {
		const result = await this.userModel.find();
		return result;
	}

	async findUser(params) {
		const { id } = params;
		// const result = await this.userModel.findById(id);
		if(!isValidObjectId(id)) {
			throw new NotFoundException('404 NOT FOUND')
		}
		const result = await this.userModel.findOne({ _id:id });
		return result;
	}

	async getBlog():Promise<IBlog[]> {
<<<<<<< HEAD
		const result = await this.blogModel
															.find()
															.populate([
																{ path:'user' },
																{ path:'comments', populate:{ path:'user' } }
															]);
=======
		const result = await this.blogModel.find();
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5
		return result;
	}

	async findBlog(params) {
		const { id } = params;
		if(!isValidObjectId(id)) {
			throw new NotFoundException('404 NOT FOUND')
		}
<<<<<<< HEAD
		const result = await this.blogModel
															.findOne({ _id:id })
															.populate([
																{ path:'user' },
																{ path:'comments', populate:{ path:'user' } }
															]);
															// .populate('user')
															// .populate({ path:'comments' });
=======
		const result = await this.blogModel.findOne({ user:id }).populate('user');
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5
		return result;
	}

	async postUser(body:IUser) {
		const { name, age } = body;
		const newUser = new this.userModel({ name, age });
		const result = await newUser.save();
		return result;
	}

	async postBlog(body:IBlog) {
		const { title, content, user } = body;
		const newBlog = new this.blogModel({ title, content, user });
		const result = await newBlog.save();
		return result;
	}
<<<<<<< HEAD

	async updateBlog(body:IBlog, params) {
		const { id } = params;
		const { title, content, user } = body;
		const updateBody = {} as IBlog;
		if(title) { updateBody.title = title };
		if(content) { updateBody.content = content };
		if(user) { updateBody.user = user };
		const result = await this.blogModel.findByIdAndUpdate(id, updateBody, { new:true });
		return result;
	}

	async getComment(params) {
		const { id } = params;
		const result = await this.commentModel
		.findOne({ blog:id })
		.populate({ path:'user' })
		.populate({ path:'blog' });
		return result;
		
		// const [blog, user] = await Promise.all([
		// 	this.blogModel.findById(blogId),
		// 	this.blogModel.findById(userId)
		// ]);
		// const blog = await this.blogModel.findById(blogId);
		// const user = await this.blogModel.findById(userId);
	}

	async postComment(body, params) {
		const { id } = params;
		const { content, user } = body;
		const newComment = new this.commentModel({ blog:id, content, user });
		const result = await newComment.save();
		return result;
	}
=======
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5
}
