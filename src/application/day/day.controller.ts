import { Controller, Get } from '@nestjs/common';
import { DayService } from 'src/domain/day/day.service';
import { Day } from 'src/domain/day/definitions/day.entity';

@Controller('day')
export class DayController {
    constructor(private readonly dayService: DayService) {}

    @Get()
    findAll(): Promise<Day[]> {
        return this.dayService.findAll()
    }
}
