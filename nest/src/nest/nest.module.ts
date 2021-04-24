import { Module } from '@nestjs/common';
import { NestController } from './nest.controller';
import { NestService } from './nest.service';

@Module({
  controllers: [NestController],
  providers: [NestService]
})
export class NestModule {}
