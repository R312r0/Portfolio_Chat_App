import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {User} from "../users/users.schema";

export type ChatsDocument = HydratedDocument<Chat>;
@Schema()
export class Chat {
    @Prop()
    owners: User[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);