import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
    @Prop()
    phoneNumber: number;

    @Prop()
    name: string;

    @Prop()
    nickName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);