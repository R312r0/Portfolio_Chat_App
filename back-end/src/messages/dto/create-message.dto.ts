import {IsNotEmpty, IsString} from "class-validator";

export class CreateMessageDto {
    @IsNotEmpty()
    @IsString()
    authorId: string;

    @IsNotEmpty()
    @IsString()
    chatId: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
