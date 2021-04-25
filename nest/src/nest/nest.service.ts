<<<<<<< HEAD
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { BlogDocument, IBlog } from './schema/blog.schema';
import { UserDocument, IUser } from './schema/user.schema';
import { CommentDocument, IComment } from './schema/comment.schema';

@Injectable()
export class NestService {
	constructor(
		@InjectModel('NestUser') private readonly userModel:Model<UserDocument>,
		@InjectModel('NestBlog') private readonly blogModel:Model<BlogDocument>,
		@InjectModel('NestComment') private readonly commentModel:Model<CommentDocument>
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
		const result = await this.blogModel.find().populate('user');
		return result;
	}

	async findBlog(params) {
		const { id } = params;
		if(!isValidObjectId(id)) {
			throw new NotFoundException('404 NOT FOUND')
		}
		const result = await this.blogModel.findOne({ _id:id });
		return result;
	}

	async postUser(body:IUser) {
		const newUser = new this.userModel({ ...body });
		const result = await newUser.save();
		return result;
	}

	async postBlog(body:IBlog) {
		const newBlog = new this.blogModel({ ...body });
		const result = await newBlog.save();
		return result;
	}

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
		const result = await this.commentModel.findOne({ blog:id });
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
		const result = await Promise.all([
			this.blogModel.updateOne({ _id:id }, { $push: { comments: newComment} }),
			newComment.save()
		]);
		return result;
	}
}
=======
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestService {}
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5
