import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // Forçando a conexão com o banco de dados ao iniciar a aplicação
  async onModuleInit() {
    await this.$connect();
  }

  // Derrubando a aplicação quando o banco cair
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
