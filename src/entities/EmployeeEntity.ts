import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Departments } from './DepartmentEntity';
import { JobPosition } from './JobPositionEntity';
import { PerformanceReviews } from './PerformanceReviewEntity';
import { EmployeeAddress } from './AddressEntity';
import { Benefit } from './BenefitEntity';

@Entity('employee')
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    document: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ type: 'date' })
    birth_date: Date;

    @Column({ type: 'date' })
    hire_date: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    salary: number;

    @Column({ default: true })
    active: boolean;


    @ManyToOne(() => Departments, (departments) => departments.employees, {
        eager: true,
    })
    departments: Departments;

    @ManyToOne(() => JobPosition, (jobPosition) => jobPosition.employees, {
        eager: true,
    })
    jobPosition:JobPosition

    @OneToMany(() => PerformanceReviews, (performanceReviews) => performanceReviews.employee)
    performanceReviews:PerformanceReviews

    @OneToMany(() => EmployeeAddress, (employeeAddress) => employeeAddress.employee)
    employeeAddress:EmployeeAddress[]

    @OneToMany(() => Benefit, benefit => benefit.employee)
    benefits: Benefit[];
}
