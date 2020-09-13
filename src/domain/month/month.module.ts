import { Module } from '@nestjs/common';
import { MonthController } from 'src/application/month/month.controller';
import { MonthService } from './month.service';

@Module({
    imports: [],
    controllers: [MonthController],
    providers: [MonthService],
})
export class MonthModule {}
