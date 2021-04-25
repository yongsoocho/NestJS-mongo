import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { NestService } from './nest.service';
import { UserDocument, IUser } from './schema/user.schema';
import { BlogDocument, IBlog } from './schema/blog.schema';
import { CommentDocument, IComment } from './schema/comment.schema';

@Controller('nest')
export class NestController {
	constructor(private nestService:NestService){}
	
	@Get('/user')
	async getUser():Promise<IUser[]> {
		const result = await this.nestService.getUser();
		return result;
	}
	
	@Get('/user/:id')
	async findUser(@Param() params:object) {
		const result = await this.nestService.findUser(params);
		return result;
	}
	
	@Get('/blog')
	async getBlog():Promise<IBlog[]> {
		const result = await this.nestService.getBlog();
		return result;
	}
	
	@Get('/blog/:id')
	async findBlog(@Param() params:object):Promise<BlogDocument> {
		const result = await this.nestService.findBlog(params);
		return result;
	}
	
	@Post('/user')
	postUser(@Body() body) {
		return this.nestService.postUser(body);
	}

	@Post('/blog')
	postBlog(@Body() body) {
		return this.nestService.postBlog(body);
	}

	@Put('/blog/:id')
	updateBlog(
		@Body() body,
		@Param() params
	) {
		return this.nestService.updateBlog(body, params);
	}

	@Get('/blog/:id/comment')
	getComment(@Param() params) {
		return this.nestService.getComment(params);
	}

	@Post('/blog/:id/comment')
	postComment(
		@Body() body,
		@Param() params
	) {
		return this.nestService.postComment(body, params);
	}
}
