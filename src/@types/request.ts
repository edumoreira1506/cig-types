import { Request } from 'express';

import { IMerchant, IBreeder, ApiErrorType, IUser } from '.';
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
  breeders?: IBreeder[];
}
