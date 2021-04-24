import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestModule } from './nest/nest.module';
import { PopulateModule } from './populate/populate.module';
import { CrudModule } from './crud/crud.module';

const URL = 'mongodb+srv://root:0302@cluster0.z41sh.mongodb.net/nestjs?retryWrites=true&w=majority'


@Module({
  imports: [
		NestModule, 
		PopulateModule, 
		CrudModule, 
		MongooseModule.forRoot(URL, { useFindAndModify:false }) // first step
	],
  controllers: [],
  providers: [],
})
export class AppModule {}
