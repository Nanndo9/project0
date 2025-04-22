import { type NextFunction, Request, type Response } from "express";
import jwt from "jsonwebtoken";
import { HttpStatus } from "../interfaces/HttpStatus";

interface AuthenticatedRequest extends Request {
    user?: string | object;
}


export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            res.sendStatus(HttpStatus.UNAUTHORIZED); 
            return;
        }

        const secret = process.env.ACCESS_TOKEN_SECRET || 'default_access_secret';
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(HttpStatus.FORBIDDEN); 
            }

            req.user = user;
            next();
        });
    } catch (error) {
        console.error('Middleware Error Authentication:', error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR); 
    }
}