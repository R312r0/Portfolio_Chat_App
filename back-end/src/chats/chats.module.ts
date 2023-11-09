import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Chat, ChatSchema} from "./chats.schema";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [MongooseModule.forFeature([{name: Chat.name, schema: ChatSchema}]), UsersModule],
  controllers: [ChatsController],
  providers: [ChatsService],
})
export class ChatsModule {}
