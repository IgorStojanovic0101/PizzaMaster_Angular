export interface ServiceResponse<T> {
    payload: T;
    validation: boolean;
    errors: string[];
  }