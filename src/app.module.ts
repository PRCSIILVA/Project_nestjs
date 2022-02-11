import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://NESTJS:ND5MiTcNjdY6hYWY@cluster0.98dad.mongodb.net/test'),UsersModule],
})
export class AppModule {}
