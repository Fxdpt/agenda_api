import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeekController } from './application/week/week.controller';
import { DayController } from './application/day/day.controller';
import { MonthController } from './application/month/month.controller';
import { WeekModule } from './domain/week/week.module';
import { DayModule } from './domain/day/day.module';
import { MonthModule } from './domain/month/month.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { Day as DayEntity } from './domain/day/definitions/day.entity'
import { ConfigModule } from '@nestjs/config';

@Module(
  {
  imports: [
    WeekModule,
    DayModule,
    MonthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [DayEntity],
      synchronize: true,
    })
  ],
  controllers: [AppController, WeekController, DayController, MonthController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}

}
