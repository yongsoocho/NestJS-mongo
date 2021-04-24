import { Module } from '@nestjs/common';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({
	imports: [
		MongooseModule.forFeature(
			[
				{ name: 'User', schema: UserSchema }  // step three
			]
		)
	],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
