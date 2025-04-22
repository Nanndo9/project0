import { EmployeeRepository } from "../repositories/EmployeeRepository";

export class EmployeeService {
    constructor(private readonly employeeRepository: EmployeeRepository) { }

    public async list(): Promise<any[]> {
        return await this.employeeRepository.list();
    }

    public async save(model: any): Promise<any> {
        return await this.employeeRepository.save(model);
    }
    public async softDelete(model: any): Promise<any> {
        return await this.employeeRepository.softDelete(model);
    }
    public async findById(id: string): Promise<any | null> {
        return await this.employeeRepository.findById(id);
    }
    public async findByEmail(email: string): Promise<any | null> {
        return await this.employeeRepository.findByEmail(email);
    }
}