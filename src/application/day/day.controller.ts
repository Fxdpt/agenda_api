import { Body, Controller, Get, Param, Patch, Delete, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DayService } from 'src/domain/day/day.service';
import { CreateDayDto } from 'src/domain/day/definitions/createDayDto';
import { UpdateDayDto } from 'src/domain/day/definitions/updateDayDto';
import { Day } from 'src/domain/day/definitions/day.entity';

@Controller('day')
export class DayController {
    constructor(private readonly dayService: DayService) {}

    @Get()
    findAll(): Promise<Day[]> {
        return this.dayService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Day> {
        return this.dayService.findOne(id)
    }

    @Get('by_date/:date')
    findOneByDate(@Param('date') date: string): Promise<Day> {
        return this.dayService.findOneByDate(date)
    }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() dayToCreate: CreateDayDto) {
        return this.dayService.create(dayToCreate)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    update(
        @Param('id') id: string,
        @Body() updateInfo: UpdateDayDto
    ) {
        return this.dayService.update(id, updateInfo)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.dayService.delete(id)
    }
}
