import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, IUser } from './schema/user.schema';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()	// step four
export class CrudService {
	constructor(@InjectModel('User') private readonly userModel:Model<UserDocument>){} // crud.module.imports.forFeature.name
	
	async getUser():Promise<IUser[]> {
		const result = await this.userModel.find();
		return result;
	}
	
	async postUser(body:IUser) {
		const { name, age } = body;
		const newUser = new this.userModel({ name, age });
		const result = await newUser.save();
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

	async removeUser(params) {
		const { id } = params;
		if(!isValidObjectId(id)) {
			throw new NotFoundException('404 NOT FOUND')
		}
		const result = await this.userModel.findOneAndDelete({ _id:id }); // deleteOne doesn't return user just remove
		return result;
	}

	async putUser(params, body) {
		const { id } = params;
		if(!isValidObjectId(id)) {
			throw new NotFoundException('404 NOT FOUND')
		}
		let updateBody = {} as { name?:string; age?:number; };
		const { name, age } = body;
		if(name) { updateBody.name = name };
		if(age) { updateBody.age = age };
		const result = await this.userModel.findByIdAndUpdate(id, updateBody, { new: true }); // findOne doesn't return user just update
		return result;	// findOneAndUpdate({ object })
	}
}
