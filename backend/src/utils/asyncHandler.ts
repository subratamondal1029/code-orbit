import { Request, Response, NextFunction } from 'express';
import { IApiError } from '../types/ApiBase.js';
import ApiError from './ApiError.js';

const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch((err: IApiError) => {
      let errorObj: IApiError = err;

      if (err instanceof Error) {
        errorObj = new ApiError(
          500,
          err.message || 'Something went wrong',
          [],
          err.stack
        );
      }
      // Add for multer and other ...

      return res.status(errorObj.status).json(errorObj);
    });

export default asyncHandler;
