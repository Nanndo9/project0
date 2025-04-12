import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosition } from './JobPositionEntity';

@Entity('salary_ranges')
export class SalaryRange {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    min_salary: number;

    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    max_salary: number;

    @OneToMany(()=>JobPosition,jobPosition=>jobPosition.salaryRange)
    jobPosition:JobPosition[]
}
