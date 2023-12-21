import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatsDocument = HydratedDocument<Chat>;
@Schema()
export class Chat {
    @Prop()
    ownersId: string[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);