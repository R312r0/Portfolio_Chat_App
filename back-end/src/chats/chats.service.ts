import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Chat} from "./chats.schema";
import {UsersService} from "../users/users.service";

@Injectable()
export class ChatsService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>, private userService: UsersService ) {}
  async create(createChatDto: CreateChatDto) {
    const createdChat = new this.chatModel(createChatDto);
    await createdChat.save();

    await this.userService.updateUserChats(createChatDto.owners, createdChat.id);
    return "OK"
  }


  // TODO: in future make this user auth related just because we don't want user to see chats of other people
  findAll() {
    return this.chatModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
