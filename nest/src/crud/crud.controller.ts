import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CrudService } from './crud.service'
import { IUser } from './schema/user.schema';

@Controller('crud')
export class CrudController {
	constructor(private crudService:CrudService){}
	
	@Get('/')
	async getUser():Promise<IUser[]> {
		const result = await this.crudService.getUser();
		return result;
	}
	
	@Get('/:id')
	async findUser(@Param() params:object) {
		const result = await this.crudService.findUser(params);
		return result;
	}
	
	@Post('/')
	postUser(@Body() body) {
		return this.crudService.postUser(body);
	}

	@Delete('/:id')
	removeUser(@Param() params:object) {
		return this.crudService.removeUser(params);
	}

	@Put('/:id')
	putUser(
		@Param() params, 
		@Body() body
	) {
		return this.crudService.putUser(params, body);
	}
}
