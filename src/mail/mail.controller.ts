import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailDto } from './dto';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post()
  recieveMessage(@Body() dto: MailDto) {
    return this.mailService.saveMessage(dto);
  }
}
