import { ApiErrorType } from './errors';

export interface AppRequest {
  ok: boolean;
}

export interface ErrorRequest {
  ok: false;
  error: ApiErrorType;
}
