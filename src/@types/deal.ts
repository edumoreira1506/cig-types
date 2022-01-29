export interface IDeal {
  id: string;
  sellerId: string;
  buyerId: string;
  createdAt: Date;
  cancelled: boolean;
  finished: boolean;
  advertisingId: string;
}

export interface IDealEvent {
  id: string;
  dealId: string;
  value: string;
  createdAt: Date;
  metadata: Record<string, any>;
}
