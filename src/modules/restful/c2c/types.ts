export interface CommonRet_CommisionRateOverview extends CommonPageRet {
  data?: CommisionRateOverview;
}

export interface CommisionRateOverview {
  assetRetList: CommisionRateOverviewAsset[];
  userDiscountOffRateMaker: number;
  userDiscountOffRateTaker: number;
  userLevel: number;
}

export interface CommisionRateOverviewAsset {
  asset: string;
  assetLogoUrl: string;
  assetName: string;
  items: CommisionRateOverviewItem[];
}

export interface CommisionRateOverviewItem {
  area: string;
  channel: string;
  fiat: string;
  makerBuyBaseCommissionRate: number;
  makerBuyCommissionRate: number;
  makerSellBaseCommissionRate: number;
  makerSellCommissionRate: number;
  takerBuyBaseCommissionRate: number;
  takerBuyCommissionRate: number;
  takerSellBaseCommissionRate: number;
  takerSellCommissionRate: number;
}

export interface CommonPageRet_AdSearchResp extends CommonPageRet {
  data?: AdSearchResp[];
}

export interface CommonRet_AdSearchResp extends CommonPageRet {
  data?: AdSearchResp;
}

export interface AdSearchResp {
  adv: AdDetailResp;
  advertiser: AdvertiserVo;
}

export interface searchOptions {
  additionalKycVerifyFilter?: number;
  countries?: string[];
  filterType?: string;
  order?: string;
  payTypes?: string[];
  publisherType?: string;
  sort?: string;
  transAmount?: number;
}

export interface CommonPageRet_UserOrderHistory extends CommonPageRet {
  data?: UserOrderHistory[];
}

export interface UserOrderHistory {
  additionalKycVerify?: number;
  advNo?: string;
  advertisementRole?: string;
  amount?: string;
  asset?: string;
  commission?: number;
  counterPartNickName?: string;
  createTime?: string; // Date string in ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ)
  fiat?: string;
  fiatSymbol?: string;
  orderNumber?: string;
  orderStatus?: string;
  payMethodName?: string;
  takerAmount?: number;
  takerCommission?: number;
  takerCommissionRate?: number;
  totalPrice?: string;
  tradeType?: string;
  unitPrice?: number;
}

export interface listUserOrderHistoryOptions {
  page?: number;
  rows?: number;
  startTimestamp?: number;
  endTimestamp?: number;
  tradeType?: string;
  orderStatus?: any; // 1 - TRADING (WAIT_FOR_PAYMENT), 2 - WAIT_FOR_RELEASE, 3 - APPEALING 4 - COMPLETED, 6 - CANCELLED, 7 - CANCELLED_BY_SYSTEM
}

export interface AdQueryByPageReq {
  advNo?: string;
  advStatus?: number;
  asset?: string;
  classify?: string;
  endDate?: string; // Date string in ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ)
  fiatUnit?: string;
  inDeal?: number;
  order?: string;
  sort?: string;
  startDate?: string; // Date string in ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ)
  tradeType?: string;
}

export interface CommonRet_AdDetailResp extends CommonPageRet {
  data?: AdDetailResp;
}

export interface CommonPageRet_AdDetailResp extends CommonPageRet {
  data?: AdDetailResp[];
}

export interface CommonPageRet {
  code?: string;
  data?: any;
  message?: string;
  success?: boolean;
  total?: number;
}

export interface AdDetailResp {
  advNo?: string;
  advStatus?: number;
  advUpdateTime?: string;
  advVisibleRet?: AdVisibleRetVo;
  asset?: string;
  assetLogo?: string;
  assetScale?: number;
  assetVo?: AssetDetail;
  autoReplyMsg?: string;
  buyerBtcPositionLimit?: number;
  buyerKycLimit?: number;
  buyerRegDaysLimit?: number;
  classify?: string;
  commissionRate?: number;
  createTime?: string;
  currencyRate?: number;
  dynamicMaxSingleTransAmount?: number;
  dynamicMaxSingleTransQuantity?: number;
  fiatScale?: number;
  fiatSymbol?: string;
  fiatUnit?: string;
  fiatVo?: FiatDetail;
  initAmount?: number;
  isTradable?: boolean;
  maxSingleTransAmount?: number;
  maxSingleTransQuantity?: number;
  minSingleTransAmount?: number;
  minSingleTransQuantity?: number;
  payTimeLimit?: number;
  price?: number;
  priceFloatingRatio?: number;
  priceScale?: number;
  priceType?: number;
  rateFloatingRatio?: number;
  remarks?: string;
  surplusAmount?: number;
  takerAdditionalKycRequired?: number;
  tradableQuantity?: number;
  tradeMethodCommissionRateVoList?: TradeMethodCommissionRateVo[];
  tradeMethods?: AdTradeMethodResp[];
  tradeType?: string;
  userAllTradeCountMax?: number;
  userAllTradeCountMin?: number;
  userBuyTradeCountMax?: number;
  userBuyTradeCountMin?: number;
  userSellTradeCountMax?: number;
  userSellTradeCountMin?: number;
  userTradeCompleteCountMin?: number;
  userTradeCompleteRateFilterTime?: number;
  userTradeCompleteRateMin?: number;
  userTradeCountFilterTime?: number;
  userTradeType?: number;
  userTradeVolumeAsset?: string;
  userTradeVolumeFilterTime?: number;
  userTradeVolumeMax?: number;
  userTradeVolumeMin?: number;
}

export interface AdVisibleRetVo {
  orderFlowVisible?: number;
  surplusAmountVisible?: number;
  userSetVisible?: number;
}

export interface AssetDetail {
  asset?: string;
  decimalScale?: number;
  iconUrl?: string;
  name?: string;
}

export interface FiatDetail {
  countryCode?: string;
  currencyCode?: string;
  currencyScale?: number;
  currencySymbol?: string;
  iconUrl?: string;
  priceScale?: number;
}

export interface AdTradeMethodResp {
  iconUrlColor?: string;
  identifier?: string;
  payAccount?: string;
  payBank?: string;
  payId?: string;
  paySubBank?: string;
  payType?: string;
  tradeMethodName?: string;
};

export interface TradeMethodCommissionRateVo {
  commissionRate?: number;
  tradeMethodIdentifier?: string;
  tradeMethodName?: string;
}

export interface AdvertiserVo {
  advConfirmTime?: number;
  email?: string;
  margin?: number;
  marginUnit?: string;
  mobile?: string;
  monthFinishRate?: number;
  monthOrderCount?: number;
  nickName?: string;
  orderCount?: number;
  realName?: string;
  registrationTime?: string;
  tagIconUrls?: string[];
  userNo?: string;
  userType?: string;
}
