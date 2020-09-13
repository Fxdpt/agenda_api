import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Day {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    startTime: Date

    @Column()
    endTime: Date

    @Column()
    lunchTime: number
}