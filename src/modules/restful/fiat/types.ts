export interface CommonRet_FiatFee extends CommonRet {
  data?: FiatFee[];
}

export interface FiatFee {
  currency: string;
  channel: string;
  depositFeeRate: number;
  depositFixedFee: number;
  depositStatus: string;
  withdrawFeeRate: number | null;
  withdrawFixedFee: number | null;
  withdrawStatus: string | null;
}

export interface CommonRet {
  code?: string;
  data?: any;
  message?: string;
  messageDetail?: string;
  success?: boolean;
}
