import { Module } from '@nestjs/common';
import { NestController } from './nest.controller';
import { NestService } from './nest.service';

<<<<<<< HEAD
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
=======
@Module({
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5
  controllers: [NestController],
  providers: [NestService]
})
export class NestModule {}
