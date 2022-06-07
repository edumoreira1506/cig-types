export interface IReview {
  id: string;
  dealId: string;
  advertisingId: string;
  reviewedMerchantId: string;
  reviewerMerchantId: string;
  reviewerExternalId: string;
  active: boolean;
  metadata?: {
    dealFeedback?: string;
    merchantFeedback?: string;
    score?: number;
  };
  createdAt: Date;
}
