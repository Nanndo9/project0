import { Router, Request, Response } from "express";
import { EmployeeService } from "../service/EmployeeService";
import { authMiddleware } from "../middlewares/AuthMiddleware";
import { HttpStatus } from "../interfaces/HttpStatus";

export class EmployeeRoute {
    constructor(private readonly employeeService: EmployeeService) { }
    public getRouter() {
        const router = Router();

        router.get(
            "/list",
            authMiddleware,
            async (req: Request, res: Response): Promise<void> => {
                try {
                    const employees = await this.employeeService.list();
                    res.status(HttpStatus.OK).json(employees);
                } catch {
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        message: 'Internal Server Error',
                        error: 'Error fetching employees',
                    });
                }
            }
        );
        router.post(
            "/create",
            async (req: Request, res: Response): Promise<void> => {
                try {
                    const {
                        name,
                        email,
                        document,
                        phone,
                        birth_date,
                        hire_date,
                        salary,
                        active,
                        departmentId,
                        jobPositionId
                    } = req.body;

                    const userExits = await this.employeeService.findByEmail(email);
                    if (userExits) {
                        res.status(HttpStatus.BAD_REQUEST).json({
                            message: 'User already exists',
                        });
                        return;
                    }

                    const employee = await this.employeeService.save({
                        name,
                        email,
                        document,
                        phone,
                        birth_date,
                        hire_date,
                        salary,
                        active,
                        departments: { id: departmentId },
                        jobPosition: { id: jobPositionId }
                    });
                    res.status(HttpStatus.CREATED).json(employee);
                } catch {
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        message: 'Internal Server Error',
                        error: 'Error creating employee',
                    });
                }
            }
        )

        return router;
    }
}

