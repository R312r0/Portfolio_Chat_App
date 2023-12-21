import { Injectable } from '@nestjs/common';
import {CreateMessageDto} from "./dto/create-message.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Messages} from "./messages.schema";

@Injectable()
export class MessagesService {


    constructor(@InjectModel(Messages.name) private messagesModel: Model<Messages>) {
    }

    public async getChatMessages(chatId: string) {
        return await this.messagesModel.find().where('chatId').equals(chatId).exec();
    }


    public writeMessage(createMessageDto: CreateMessageDto) : Promise<Messages> {
        const createdMessage = new this.messagesModel(createMessageDto);
        return createdMessage.save()
    }

}
