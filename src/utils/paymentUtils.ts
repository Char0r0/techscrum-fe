import { createPayment } from '../api/price/price';

export const createSubcription = async (
  id: string,
  planIdentifier: number,
  paymentMode: boolean,
  isFreeTrial: boolean
) => {
  createPayment({ planIdentifier, userId: id, paymentMode, isFreeTrial });
};
