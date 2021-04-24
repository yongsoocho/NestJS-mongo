import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { BlogDocument, IBlog } from './schema/blog.schema';
import { UserDocument, IUser } from './schema/user.schema';

@Injectable()
export class PopulateService {
	constructor(
		@InjectModel('User') private readonly userModel:Model<UserDocument>,
		@InjectModel('Blog') private readonly blogModel:Model<BlogDocument>
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
		const result = await this.blogModel.find();
		return result;
	}

	async findBlog(params) {
		const { id } = params;
		if(!isValidObjectId(id)) {
			throw new NotFoundException('404 NOT FOUND')
		}
		const result = await this.blogModel.findOne({ user:id }).populate('user');
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
}
