import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { BenefitType } from '../interfaces/BenefitInterface';
import { Employee } from './EmployeeEntity';

@Entity('benefits')
export class Benefit {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'enum',
        enum: BenefitType,
        default: BenefitType.MEAL_VOUCHER,
    })
    type: BenefitType;

    @Column({ nullable: true })
    description: string;

    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    value: number;
    @ManyToOne(() => Employee, (employee) => employee.benefits)
    employee: Employee;
}
