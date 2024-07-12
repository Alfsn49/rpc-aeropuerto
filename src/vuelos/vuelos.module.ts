import { Module } from '@nestjs/common';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VuelosController],
  providers: [VuelosService],
  imports: [PrismaModule],
})
export class VuelosModule {}
