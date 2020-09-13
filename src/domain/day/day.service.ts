import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Day } from './definitions/day.entity';

@Injectable()
export class DayService {
    constructor(
        @InjectRepository(Day)
        private dayRepository: Repository<Day>
    ) {}

    findAll(): Promise<Day[]> {
        return this.dayRepository.find()
    }
}
