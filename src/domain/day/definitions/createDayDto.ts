import { IsDate, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDayDto {
  @IsNotEmpty()
  @IsDateString()
  startTime: string;

  @IsNotEmpty()
  @IsDateString()
  endTime: string;

  @IsNotEmpty()
  @IsNumber()
  lunchTime: number;
}
