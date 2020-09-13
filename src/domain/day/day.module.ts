import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DayController } from 'src/application/day/day.controller';
import { DayService } from './day.service';
import { Day } from './definitions/day.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Day])],
    controllers: [DayController],
    providers: [DayService],
    exports: [DayService]
})
export class DayModule {}
