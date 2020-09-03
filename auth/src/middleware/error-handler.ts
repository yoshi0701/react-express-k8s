import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanseof RequestValidationError) {
    console.log('handling this errors as a request validation error');
  }

  if (err instanseof DatabaseConnectionError) {
    console.log('handing this error as a db connection error');
  }

  res.status(400).send({
    message: err.message
  });
};