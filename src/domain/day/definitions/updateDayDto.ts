import { IsDateString, IsNumber } from "class-validator"

export class UpdateDayDto {
    @IsDateString()
    startTime?: string

    @IsDateString()
    endTime?: string

    @IsNumber()
    lunchTime?: number
}