import { Module } from '@nestjs/common';
import { PopulateController } from './populate.controller';
import { PopulateService } from './populate.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { BlogSchema } from './schema/blog.schema';
import { CommentSchema } from './schema/comment.schema';

@Module({
	imports: [
		MongooseModule.forFeature(
			[
				{ name: 'User', schema: UserSchema },  // step three
			]
		),
		MongooseModule.forFeature(
			[
				{ name: 'Blog', schema: BlogSchema }  // step three
			]
		),
		MongooseModule.forFeature(
			[
				{ name: 'Comment', schema: CommentSchema },  // step three
			]
		)
	],
  controllers: [PopulateController],
  providers: [PopulateService]
})
export class PopulateModule {}
