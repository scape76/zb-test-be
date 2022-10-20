import { IsString } from 'class-validator';

export class MailDto {
  @IsString()
  email: string;
  @IsString()
  name: string;
  @IsString()
  message: string;
}
