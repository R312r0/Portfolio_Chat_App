import {Body, Controller, Get, Param, Post, Query, Req} from '@nestjs/common';
import { MessagesService } from './messages.service';
import {CreateMessageDto} from "./dto/create-message.dto";

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findChatMessages(@Query() {chatId} : {chatId: string}) {
    return this.messagesService.getChatMessages(chatId)
  }

  @Post()
  sendMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.writeMessage(createMessageDto)
  }
}
