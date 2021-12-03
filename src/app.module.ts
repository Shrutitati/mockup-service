/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MockupModule } from './mockup/mockup.module';


@Module({
  imports: [MockupModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
