import { Day } from 'src/domain/day/definitions/day.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Day)
export class DayRepositoryRDB extends Repository<Day> {
  findOnyByDate(date: string): Promise<Day> {
    return this.createQueryBuilder()
      .select('d')
      .from(Day, 'd')
      .where('d.startTime like :date', { date: '%' + date + '%' })
      .getOne();
  }
}
