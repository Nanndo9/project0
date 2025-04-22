import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './EmployeeEntity';
import { JobPosition } from './JobPositionEntity';

@Entity('departments')
export class Departments {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Employee, (employee) => employee.departments)
    employees: Employee[];

    @OneToMany(() => JobPosition, (jobPosition) => jobPosition.department)
    jobPositions: JobPosition[];
}
