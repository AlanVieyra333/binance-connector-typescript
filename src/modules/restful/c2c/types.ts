export interface AdQueryByPageReq {
    advNo?: string;
    advStatus?: number;
    asset?: string;
    classify?: string;
    endDate?: string; // ISO 8601 date string (optional)
    fiatUnit?: string;
    inDeal?: number;
    order?: string;
    sort?: string;
    startDate?: string; // ISO 8601 date string (optional)
    tradeType?: string;
}

export interface CommonRet_AdDetailResp extends CommonPageRet {
    data?: AdDetailResp;
}

export interface CommonPageRet_AdDetailResp extends CommonPageRet {
    data?: AdDetailResp[];
}

interface CommonPageRet {
    code?: string;
    data?: any;
    message?: string;
    success?: boolean;
    total?: number;
}

interface AdDetailResp {
    advNo?: string;
    advStatus?: number;
    advUpdateTime?: string; // ISO 8601 date string
    advVisibleRet?: {
        orderFlowVisible: number;
        surplusAmountVisible: number;
        userSetVisible: number;
    };
    asset?: string;
    assetLogo?: string;
    assetScale?: number;
    assetVo?: {
        asset: string;
        decimalScale: number;
        iconUrl: string;
        name: string;
    };
    autoReplyMsg?: string;
    buyerBtcPositionLimit?: number;
    buyerKycLimit?: number;
    buyerRegDaysLimit?: number;
    classify?: string;
    commissionRate?: number;
    createTime?: string; // ISO 8601 date string
    currencyRate?: number;
    dynamicMaxSingleTransAmount?: number;
    dynamicMaxSingleTransQuantity?: number;
    fiatScale?: number;
    fiatSymbol?: string;
    fiatUnit?: string;
    fiatVo?: {
        countryCode: string;
        currencyCode: string;
        currencyScale: number;
        currencySymbol: string;
        iconUrl: string;
        priceScale: number;
    };
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
    tradeMethodCommissionRateVoList?: {
        commissionRate: number;
        tradeMethodIdentifier: string;
        tradeMethodName: string;
    }[];
    tradeMethods?: {
        iconUrlColor: string;
        identifier: string;
        payAccount: string;
        payBank: string;
        payId: number;
        paySubBank: string;
        payType: string;
        tradeMethodName: string;
    }[];
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
