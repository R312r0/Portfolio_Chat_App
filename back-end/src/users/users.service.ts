import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./users.schema";
import mongoose, {Model, Types} from "mongoose";


@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) : Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll() : Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUsersByIds(userIds: string[]) : Promise<User[]> {
    return this.userModel.find({'_id': {$in: userIds.map(id => new Types.ObjectId(id))}})
  }

  async updateUserChats(userIds: string[], chatId: string) : Promise<void> {
    await this.userModel.updateMany({
      '_id': {$in : userIds.map(id => new Types.ObjectId(id))}
    }, {$push: {ownersId: chatId}})
  }


  findOne(id: string) : Promise<UserDocument> {
    return this.userModel.findById(id);
  }
}
