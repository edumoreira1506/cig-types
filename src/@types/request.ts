import { Request } from 'express';

import { IMerchant } from '.';
import { ApiErrorType } from './errors';
import { IUser } from './user';

export interface AppRequest {
  ok: boolean;
}

export interface ErrorRequest {
  ok: false;
  error: ApiErrorType;
}


export interface AuthenticatedRequest extends Request {
  user?: IUser;
  merchant?: IMerchant;
}
