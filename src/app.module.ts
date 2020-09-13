import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DayController } from './application/day/day.controller';
import { DayModule } from './domain/day/day.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { Day as DayEntity } from './domain/day/definitions/day.entity'
import { ConfigModule } from '@nestjs/config';

@Module(
  {
  imports: [
    DayModule,
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
  controllers: [AppController, DayController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}

}
