import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {MongooseModule} from "@nestjs/mongoose";
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';


@Module({
  imports: [
      UsersModule,
      MongooseModule.forRoot('mongodb+srv://vladyslavchupovskiy:22082000Vlad@chatapp.gg67zrk.mongodb.net/?retryWrites=true&w=majority'),
      ChatsModule,
      MessagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
