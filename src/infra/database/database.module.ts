import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],

  // Informando qual provider deve ser compartilhado para os módulos que o importarem
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
