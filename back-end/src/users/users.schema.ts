import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {Chat} from "../chats/chats.schema";

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
    @Prop()
    phoneNumber: number;

    @Prop()
    name: string;

    @Prop()
    nickName: string;

    @Prop()
    chatsIds: string[]

}

export const UserSchema = SchemaFactory.createForClass(User);