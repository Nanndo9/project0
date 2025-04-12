import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './EmployeeEntity';

@Entity('performance_reviews')
export class PerformanceReviews {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date' })
    review_date: Date;

    @Column('decimal', { precision: 3, scale: 1 })
    score: number;

    @Column({ nullable: true })
    feedback: string;

    @ManyToOne(()=>Employee,employee=> employee.performanceReviews)
    employee:Employee
}
