import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { VuelosService } from './vuelos.service';

@Controller('vuelos')
export class VuelosController {
    constructor(private readonly vuelosService: VuelosService) {}   

    @Get('')
    async findAll(){
        return this.vuelosService.vuelos();
    }

    @Post('create')
    create(@Body() body: any){
        return this.vuelosService.create(body);
    }

    @Put('update/:numerovuelo')
    update(@Body() body: any, @Param('numerovuelo') params: any){
        console.log(params, body)
        return this.vuelosService.update(params, body);
    }

    @Put('cancel/:numerovuelo')
    cancel(@Param('numerovuelo') params: any){
        return this.vuelosService.cancelar(params);
    }
}
