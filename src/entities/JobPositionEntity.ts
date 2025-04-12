import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './EmployeeEntity';
import { SalaryRange } from './SalaryRangeEntity';

@Entity('job_Position')
export class JobPosition {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column('simple-array', { nullable: true })
    responsibilities: string[];

    @OneToMany(() => Employee, (employee) => employee.jobPosition)
    employees: Employee[];

    @ManyToOne(() => SalaryRange, (salaryRange) => salaryRange.jobPosition)
    salaryRange: SalaryRange;
}
