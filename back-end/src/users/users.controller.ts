import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/findByIds')
  findByIds(@Query() {userIds} : {userIds: string}) {
    const splitIds = userIds.split(',');
    return this.usersService.getUsersByIds(splitIds)
  }
}
