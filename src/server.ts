import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './config/DataSource';
import { EmployeeRepository } from './repositories/EmployeeRepository';
import { EmployeeService } from './service/EmployeeService';
import { EmployeeRoute } from './routes/EmployeeRoute';
import { ErrorHandlerMiddleware } from './middlewares/ErrorHandlerMiddleware';

dotenv.config();

AppDataSource.initialize()
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(cors());

        // Criar instâncias na ordem correta: Repository -> Service -> Route
        const employeeRepository = new EmployeeRepository(AppDataSource.getRepository('Employee'));
        const employeeService = new EmployeeService(employeeRepository);
        const employeeRoute = new EmployeeRoute(employeeService);

        // Configurar rotas
        app.use('/employees', employeeRoute.getRouter());

        app.get('/', (req, res) => {
            res.json({ message: 'API funcionando!' });
        });
        app.use(ErrorHandlerMiddleware);

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`✅ Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ Error initializing database:', err);
    });
