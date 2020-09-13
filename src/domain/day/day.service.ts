import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDayDto } from './definitions/createDayDto';
import { Day } from './definitions/day.entity';
import { v4 as uuidv4 } from 'uuid';
import { UpdateDayDto } from './definitions/updateDayDto';
import { DayRepositoryRDB } from 'src/infrastructure/day/DayRepositoryRDB';

@Injectable()
export class DayService {
  constructor(
    @InjectRepository(Day)
    private dayRepository: Repository<Day>,
    @InjectRepository(DayRepositoryRDB)
    private customDayRepository: DayRepositoryRDB,
  ) {}

  findAll(): Promise<Day[]> {
    return this.dayRepository.find();
  }

  findOne(id: string): Promise<Day> {
    return this.dayRepository.findOne(id);
  }

  findOneByDate(date: string): Promise<Day> {
    return this.customDayRepository.findOnyByDate(date);
  }

  create(dayToCreate: CreateDayDto) {
    const day: Day = {
      id: uuidv4(),
      startTime: new Date(dayToCreate.startTime),
      endTime: new Date(dayToCreate.endTime),
      lunchTime: dayToCreate.lunchTime,
    };
    return this.dayRepository.save(day);
  }

  async update(id: string, updateInfo: UpdateDayDto) {
    const day: Day = await this.dayRepository.findOne(id);
    if (updateInfo.startTime) {
      day.startTime = new Date(updateInfo.startTime);
    }
    if (updateInfo.endTime) {
      day.endTime = new Date(updateInfo.endTime);
    }
    if (updateInfo.lunchTime) {
      day.lunchTime = updateInfo.lunchTime;
    }
    return this.dayRepository.save(day);
  }

  delete(id: string) {
    return this.dayRepository.delete(id);
  }
}
