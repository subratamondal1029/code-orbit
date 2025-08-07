interface IApiBase<T = any> {
  status: number;
  success: boolean;
  message: string;
  data: T | null;
}

interface IApiError<T = any> extends IApiBase<T> {
  errors?: Array<string>;
}

export { IApiBase, IApiError };
