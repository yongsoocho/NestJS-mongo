import { Module } from '@nestjs/common';
import { PopulateController } from './populate.controller';
import { PopulateService } from './populate.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { BlogSchema } from './schema/blog.schema';
<<<<<<< HEAD
import { CommentSchema } from './schema/comment.schema';
=======
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5

@Module({
	imports: [
		MongooseModule.forFeature(
			[
<<<<<<< HEAD
				{ name: 'User', schema: UserSchema },  // step three
=======
				{ name: 'User', schema: UserSchema }  // step three
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5
			]
		),
		MongooseModule.forFeature(
			[
				{ name: 'Blog', schema: BlogSchema }  // step three
			]
<<<<<<< HEAD
		),
		MongooseModule.forFeature(
			[
				{ name: 'Comment', schema: CommentSchema },  // step three
			]
		),
=======
		)
>>>>>>> a00930f44e8074adfde16337f107f14b0e3a52a5
	],
  controllers: [PopulateController],
  providers: [PopulateService]
})
export class PopulateModule {}
