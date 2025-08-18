export interface AppStoreReceiptInfo {
  productId: string;
  transactionId: string;
  transactionDate: number;
  transactionReceipt: string;
  quantityIOS?: number;
  originalTransactionDateIOS?: number;
  originalTransactionIdentifierIOS?: string;
  verificationResultIOS?: string;
  appAccountToken?: string;
  autoRenewingAndroid: boolean;
}
