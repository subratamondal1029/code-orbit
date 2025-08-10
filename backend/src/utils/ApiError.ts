import type { IApiError } from "../types/ApiBase.js";

class ApiError extends Error implements IApiError {
  success: boolean;
  status: number;
  message: string;
  data: null;
  errors?: Array<string>;
  stack?: string;

  constructor(
    status: number = 500,
    message: string = "Something Went Wrong",
    errors = [],
    stack = ""
  ) {
    super(message);

    if (status < 400 || status > 599) {
      throw new Error(
        `Invalid status code: ${status}. Must be between 400 and 599.`
      );
    }

    this.success = false;
    this.status = status;
    this.message = message;
    this.data = null;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      success: this.success,
      status: this.status,
      message: this.message,
      data: this.data,
      error: this.errors,
    };
  }
}

export default ApiError;
