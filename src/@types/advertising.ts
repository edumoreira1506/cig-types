export interface IAdvertising {
  id: string;
  externalId: string;
  price: number;
  merchantId?: string;
  finished: boolean;
}

export interface IAdvertisingQuestion {
  id: string;
  externalId: string;
  content: string;
  advertisingId: string;
  createdAt: Date;
}

export interface IAdvertisingQuestionAnswer {
  id: string;
  externalId: string;
  content: string;
  questionId: string;
  createdAt: Date;
}
