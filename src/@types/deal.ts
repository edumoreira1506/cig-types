export interface IDeal {
  id: string;
  sellerId: string;
  buyerId: string;
  createdAt: Date;
  cancelled: boolean;
  finished: boolean;
  advertisingId: string;
}
