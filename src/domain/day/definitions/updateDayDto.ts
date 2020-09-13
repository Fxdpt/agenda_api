import { IsDateString, IsNumber, IsOptional } from "class-validator"

export class UpdateDayDto {
    @IsOptional()
    @IsDateString()
    startTime?: string

    @IsOptional()
    @IsDateString()
    endTime?: string

    @IsOptional()
    @IsNumber()
    lunchTime?: number
}