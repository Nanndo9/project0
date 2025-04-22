import { type Request, type Response, type NextFunction } from 'express';
import { HttpStatus } from '../interfaces/HttpStatus';



export const ErrorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Internal Server Error',
        error: err.message,
    });
}