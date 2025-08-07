import type { IApiBase } from "../types/ApiBase.js";

class ApiResponse implements IApiBase {
  success: boolean;
  status: number;
  message: string;
  data: object | Array<string>;

  constructor(
    status: number = 200,
    message: string = "Success",
    data: object | Array<string> = {}
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = true;

    if (status < 100 || status > 399) {
      throw new Error(
        `Invalid status code: ${status}. Must be between 100 and 399.`
      );
    }
  }
}

export default ApiResponse;
