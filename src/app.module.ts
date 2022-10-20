import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { MailController } from './mail/mail.controller';
import { MailService } from './mail/mail.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class AppModule {}
