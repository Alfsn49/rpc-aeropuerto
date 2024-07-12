import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VuelosModule } from './vuelos/vuelos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [VuelosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
