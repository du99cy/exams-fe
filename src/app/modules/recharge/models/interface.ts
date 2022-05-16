export interface IPayment {
  order_id: string;
  amount: Number;
  bank_code: string;
}
export interface IPaymentInfo {
  vnp_Amount?: string;
  vnp_BankCode?: string;
  vnp_BankTranNo?: string;
  vnp_CardType?: string;
  vnp_OrderInfo?: string;
  vnp_ResponseCode?: string;
  vnp_SecureHash?: string;
  vnp_TmnCode?: string;
  vnp_TransactionNo?: string;
  vnp_TransactionStatus?: string;
  vnp_TxnRef?: string;
}
