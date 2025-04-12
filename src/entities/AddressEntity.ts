import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./EmployeeEntity";

@Entity("employee_addresses")
export class EmployeeAddress{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    street:string
    @Column()
    city:string
    @Column()
    state:string

    @Column()
    zip_code:string;

    @ManyToOne(()=> Employee,employee=> employee.employeeAddress)
    employee:Employee
}