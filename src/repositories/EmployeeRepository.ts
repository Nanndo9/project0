import { BaseRepository } from "./BaseRepository";
import { Employee} from "../entities/EmployeeEntity";
import { Repository } from "typeorm";


export class EmployeeRepository extends BaseRepository<Employee> {
    public constructor(protected readonly repository: Repository<Employee>) {
        super(repository);
    }

    public async findById(id: string): Promise<Employee | null> {
        return await this.repository.findOne({ where: { id } });
    }

    public async findByEmail(email: string): Promise<Employee | null> {
        return await this.repository.findOne({ where: { email } });
    }

} 