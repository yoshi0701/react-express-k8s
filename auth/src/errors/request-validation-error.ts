import { ValidationError } from 'express-validator';


export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // due to extends build in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
