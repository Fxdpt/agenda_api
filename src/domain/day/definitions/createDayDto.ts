import { IsDate, IsNotEmpty, IsNumber } from "class-validator"

export class CreateDayDto {
    @IsNotEmpty()
    @IsDate()
    startTime: Date

    @IsNotEmpty()
    @IsDate()
    endTime: Date

    @IsNotEmpty()
    @IsNumber()
    lunchTime: number
}