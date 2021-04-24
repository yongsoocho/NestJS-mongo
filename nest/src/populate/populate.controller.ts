import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PopulateService } from './populate.service'
import { IUser } from './schema/user.schema';
import { BlogDocument, IBlog } from './schema/blog.schema';

@Controller('populate')
export class PopulateController {
	constructor(private populateService:PopulateService) {}
	
	@Get('/user')
	async getUser():Promise<IUser[]> {
		const result = await this.populateService.getUser();
		return result;
	}
	
	@Get('/user/:id')
	async findUser(@Param() params:object) {
		const result = await this.populateService.findUser(params);
		return result;
	}
	
	@Get('/blog')
	async getBlog():Promise<IBlog[]> {
		const result = await this.populateService.getBlog();
		return result;
	}
	
	@Get('/blog/:id')
	async findBlog(@Param() params:object):Promise<BlogDocument> {
		const result = await this.populateService.findBlog(params);
		return result;
	}
	
	@Post('/user')
	postUser(@Body() body) {
		return this.populateService.postUser(body);
	}

	@Post('/blog')
	postBlog(@Body() body) {
		return this.populateService.postBlog(body);
	}
}
