import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessagesDocument = HydratedDocument<Messages>;
@Schema()
export class Messages {
    @Prop()
    authorId: string;

    @Prop()
    chatId: string;

    @Prop()
    content: string;
}

export const MessagesSchema = SchemaFactory.createForClass(Messages);