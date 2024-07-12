import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { vuelos } from '@prisma/client';


@Injectable()
export class VuelosService {
    constructor(private prisma: PrismaService) {}

    async vuelos():Promise<vuelos[]>{
        return this.prisma.vuelos.findMany();
    }

    async create(data: any){
        return this.prisma.vuelos.create({
            data
        });
    }

    async update(id: string , data: any){
        return this.prisma.vuelos.update({
            where: {
                numero_vuelo: id
            },
            data: {
                destino: data.destino,
                hora_salida: new Date(data.hora_salida),  // Asegura que data.hora_salida sea un Date válido
                estado: data.estado
            }
        });
    }

    async cancelar(numero_vuelo: string){
        return this.prisma.vuelos.update({
            where: {
                numero_vuelo: numero_vuelo
            },
            data: {
                estado: 'Cancelado'
            }
        });
    }
}
