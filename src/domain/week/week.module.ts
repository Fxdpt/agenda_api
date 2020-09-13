import { Module } from '@nestjs/common';
import { WeekController } from 'src/application/week/week.controller';
import { WeekService } from './week.service';

@Module({
    imports: [],
    controllers: [WeekController],
    providers: [WeekService],
})
export class WeekModule {}
