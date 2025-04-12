import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salary_ranges')
export class SalaryRange {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    min_salary: number;

    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    max_salary: number;
}
