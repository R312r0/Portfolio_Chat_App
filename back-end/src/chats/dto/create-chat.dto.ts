import {IsArray, IsNotEmpty, IsString} from "class-validator";

export class CreateChatDto {
    @IsNotEmpty()
    @IsArray()
    owners: string[]
}
