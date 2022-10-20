import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailDto } from './dto';

@Injectable()
export class MailService {
  constructor(private prisma: PrismaService) {}
  saveMessage(dto: MailDto) {
    return this.prisma.mail.create({
      data: {
        message: dto.message,
        author: {
          connectOrCreate: {
            where: {
              email: dto.email,
            },
            create: {
              email: dto.email,
              name: dto.name,
            },
          },
        },
      },
      include: {
        author: true,
      },
    });
  }
}
