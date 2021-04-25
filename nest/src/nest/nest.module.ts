import { Module } from '@nestjs/common';
import { NestController } from './nest.controller';
import { NestService } from './nest.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { BlogSchema } from './schema/blog.schema';
import { CommentSchema } from './schema/comment.schema';

@Module({
	imports: [
		MongooseModule.forFeature(
			[
				{ name: 'NestUser', schema: UserSchema },  // step three
			]
		),
		MongooseModule.forFeature(
			[
				{ name: 'NestBlog', schema: BlogSchema }  // step three
			]
		),
		MongooseModule.forFeature(
			[
				{ name: 'NestComment', schema: CommentSchema },  // step three
			]
		),
	],
})

export class NestModule {}
