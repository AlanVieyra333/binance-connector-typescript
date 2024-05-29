import { AxiosProxyConfig } from 'axios';
import WebSocketClient from 'ws';

interface CommonRet_CommissionRateOverview extends CommonPageRet {
    data?: CommissionRateOverview;
}
interface CommissionRateOverview {
    assetRetList: CommissionRateOverviewAsset[];
    userDiscountOffRateMaker: number;
    userDiscountOffRateTaker: number;
    userLevel: number;
}
interface CommissionRateOverviewAsset {
    asset: string;
    assetLogoUrl: string;
    assetName: string;
    items: CommissionRateOverviewItem[];
}
interface CommissionRateOverviewItem {
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
interface CommonPageRet_AdSearchResp extends CommonPageRet {
    data?: AdSearchResp[];
}
interface CommonRet_AdSearchResp extends CommonPageRet {
    data?: AdSearchResp;
}
interface AdSearchResp {
    adv: AdDetailResp;
    advertiser: AdvertiserVo;
}
interface searchOptions {
    additionalKycVerifyFilter?: number;
    countries?: string[];
    filterType?: string;
    order?: string;
    payTypes?: string[];
    publisherType?: string;
    sort?: string;
    transAmount?: number;
}
interface CommonPageRet_UserOrderHistory extends CommonPageRet {
    data?: UserOrderHistory[];
}
interface UserOrderHistory {
    additionalKycVerify?: number;
    advNo?: string;
    advertisementRole?: string;
    amount?: string;
    asset?: string;
    commission?: number;
    counterPartNickName?: string;
    createTime?: string;
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
interface listUserOrderHistoryOptions {
    page?: number;
    rows?: number;
    startTimestamp?: number;
    endTimestamp?: number;
    tradeType?: string;
    orderStatus?: any;
}
interface AdQueryByPageReq {
    advNo?: string;
    advStatus?: number;
    asset?: string;
    classify?: string;
    endDate?: string;
    fiatUnit?: string;
    inDeal?: number;
    order?: string;
    sort?: string;
    startDate?: string;
    tradeType?: string;
}
interface CommonRet_AdDetailResp extends CommonPageRet {
    data?: AdDetailResp;
}
interface CommonPageRet_AdDetailResp extends CommonPageRet {
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
interface AdVisibleRetVo {
    orderFlowVisible?: number;
    surplusAmountVisible?: number;
    userSetVisible?: number;
}
interface AssetDetail {
    asset?: string;
    decimalScale?: number;
    iconUrl?: string;
    name?: string;
}
interface FiatDetail {
    countryCode?: string;
    currencyCode?: string;
    currencyScale?: number;
    currencySymbol?: string;
    iconUrl?: string;
    priceScale?: number;
}
interface AdTradeMethodResp {
    iconUrlColor?: string;
    identifier?: string;
    payAccount?: string;
    payBank?: string;
    payId?: string;
    paySubBank?: string;
    payType?: string;
    tradeMethodName?: string;
}
interface TradeMethodCommissionRateVo {
    commissionRate?: number;
    tradeMethodIdentifier?: string;
    tradeMethodName?: string;
}
interface AdvertiserVo {
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

type types$a_AdDetailResp = AdDetailResp;
type types$a_AdQueryByPageReq = AdQueryByPageReq;
type types$a_AdSearchResp = AdSearchResp;
type types$a_AdTradeMethodResp = AdTradeMethodResp;
type types$a_AdVisibleRetVo = AdVisibleRetVo;
type types$a_AdvertiserVo = AdvertiserVo;
type types$a_AssetDetail = AssetDetail;
type types$a_CommissionRateOverview = CommissionRateOverview;
type types$a_CommissionRateOverviewAsset = CommissionRateOverviewAsset;
type types$a_CommissionRateOverviewItem = CommissionRateOverviewItem;
type types$a_CommonPageRet = CommonPageRet;
type types$a_CommonPageRet_AdDetailResp = CommonPageRet_AdDetailResp;
type types$a_CommonPageRet_AdSearchResp = CommonPageRet_AdSearchResp;
type types$a_CommonPageRet_UserOrderHistory = CommonPageRet_UserOrderHistory;
type types$a_CommonRet_AdDetailResp = CommonRet_AdDetailResp;
type types$a_CommonRet_AdSearchResp = CommonRet_AdSearchResp;
type types$a_CommonRet_CommissionRateOverview = CommonRet_CommissionRateOverview;
type types$a_FiatDetail = FiatDetail;
type types$a_TradeMethodCommissionRateVo = TradeMethodCommissionRateVo;
type types$a_UserOrderHistory = UserOrderHistory;
type types$a_listUserOrderHistoryOptions = listUserOrderHistoryOptions;
type types$a_searchOptions = searchOptions;
declare namespace types$a {
  export {
    types$a_AdDetailResp as AdDetailResp,
    types$a_AdQueryByPageReq as AdQueryByPageReq,
    types$a_AdSearchResp as AdSearchResp,
    types$a_AdTradeMethodResp as AdTradeMethodResp,
    types$a_AdVisibleRetVo as AdVisibleRetVo,
    types$a_AdvertiserVo as AdvertiserVo,
    types$a_AssetDetail as AssetDetail,
    types$a_CommissionRateOverview as CommissionRateOverview,
    types$a_CommissionRateOverviewAsset as CommissionRateOverviewAsset,
    types$a_CommissionRateOverviewItem as CommissionRateOverviewItem,
    types$a_CommonPageRet as CommonPageRet,
    types$a_CommonPageRet_AdDetailResp as CommonPageRet_AdDetailResp,
    types$a_CommonPageRet_AdSearchResp as CommonPageRet_AdSearchResp,
    types$a_CommonPageRet_UserOrderHistory as CommonPageRet_UserOrderHistory,
    types$a_CommonRet_AdDetailResp as CommonRet_AdDetailResp,
    types$a_CommonRet_AdSearchResp as CommonRet_AdSearchResp,
    types$a_CommonRet_CommissionRateOverview as CommonRet_CommissionRateOverview,
    types$a_FiatDetail as FiatDetail,
    types$a_TradeMethodCommissionRateVo as TradeMethodCommissionRateVo,
    types$a_UserOrderHistory as UserOrderHistory,
    types$a_listUserOrderHistoryOptions as listUserOrderHistoryOptions,
    types$a_searchOptions as searchOptions,
  };
}

declare enum AccountSnapshotType {
    SPOT = "SPOT",
    MARGIN = "MARGIN",
    FUTURES = "FUTURES"
}
declare enum AccountType {
    MAIN = "MAIN",
    CARD = "CARD"
}
declare enum AddLiquidityPreviewType {
    SINGLE = "SINGLE",
    COMBINATION = "COMBINATION"
}
declare enum BusdStableCoinsConversion {
    USDC = "USDC",
    USDP = "USDP",
    TUSD = "TUSD"
}
declare enum CancelReplaceMode {
    ALLOW_FAILURE = "ALLOW_FAILURE",
    STOP_ON_FAILURE = "STOP_ON_FAILURE"
}
declare enum CancelResult {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE"
}
declare enum CancelRestrictions {
    ONLY_NEW = "ONLY_NEW",
    ONLY_PARTIALLY_FILLED = "ONLY_PARTIALLY_FILLED"
}
declare enum CrossMarginAccountTransferType {
    TransferFromMainAccountToMarginAccount = 1,
    TransferFromMarginAccountToMainAccount = 2
}
declare enum CrossMarginAccountType {
    Margin_1 = "Margin_1",
    Margin_2 = "Margin_2"
}
declare enum CrossMarginTrans {
    SPOT = "SPOT",
    FUTURES = "FUTURES",
    FIAT = "FIAT",
    DELIVERY = "DELIVERY",
    MINING = "MINING",
    ISOLATED_MARGIN = "ISOLATED_MARGIN",
    FUNDING = "FUNDING",
    MOTHER_SPOT = "MOTHER_SPOT",
    OPTION = "OPTION",
    SUB_SPOT = "SUB_SPOT",
    SUB_MARGIN = "SUB_MARGIN",
    CROSS_MARGIN = "CROSS_MARGIN"
}
declare enum DepositHistory {
    Pending = 0,
    CreditedButCannotWithdraw = 6,
    Success = 1
}
declare enum Direction {
    ADDITIONAL = "ADDITIONAL",
    REDUCED = "REDUCED"
}
declare enum Featured {
    ALL = "ALL",
    TRUE = "TRUE"
}
declare enum FixedAndActivityProductType {
    ACTIVITY = "ACTIVITY",
    CUSTOMIZED_FIXED = "CUSTOMIZED_FIXED"
}
declare enum FlexibleProductStatus {
    ALL = "ALL",
    SUBSCRIBABLE = "SUBSCRIBABLE",
    UNSUBSCRIBABLE = "UNSUBSCRIBABLE"
}
declare enum FlexibleProductType {
    FAST = "FAST",
    NORMAL = "NORMAL"
}
declare enum FromAccountType {
    SPOT = "SPOT",
    USDT_FUTURE = "USDT_FUTURE",
    COIN_FUTURE = "COIN_FUTURE",
    MARGIN = "MARGIN",
    ISOLATED_MARGIN = "ISOLATED_MARGIN"
}
declare enum FuturesType {
    USDTMarginedFutures = 1,
    COINMarginedFutures = 2
}
declare enum FuturesTransferType {
    TransferFromSubaccountSpotAccountToItsUSDT = 1,
    TransferFromSubaccountUSDT = 2,
    TransferFromSubaccountSpotAccountToItsCOIN = 3,
    TransferFromSubaccountCOIN = 4
}
declare enum DustAccountType {
    SPOT = "SPOT",
    MARGIN = "MARGIN"
}
declare enum GetCrossMargingTransferHistoryType {
    ROLL_IN = "ROLL_IN",
    ROLL_OUT = "ROLL_OUT"
}
declare enum HisrecStatus {
    Pending = 0,
    CreditedButCannotWithdraw = 6,
    Success = 1
}
declare enum HistoryStatus {
    EmailSent = 0,
    Cancelled = 1,
    AwaitingApproval = 2,
    Rejected = 3,
    Processing = 4,
    Failure = 5,
    Completed = 6
}
declare enum IncomeType {
    borrowIn = "borrowIn",
    collateralSpent = "collateralSpent",
    repayAmount = "repayAmount",
    collateralReturn = "collateralReturn",
    addCollateral = "addCollateral",
    removeCollateral = "removeCollateral",
    collateralReturnAfterLiquidation = "collateralReturnAfterLiquidation"
}
declare enum InterestBNBBurn {
    true = "true",
    false = "false"
}
declare enum Interval {
    '1s' = "1s",
    '1m' = "1m",
    '3m' = "3m",
    '5m' = "5m",
    '15m' = "15m",
    '30m' = "30m",
    '1h' = "1h",
    '2h' = "2h",
    '4h' = "4h",
    '6h' = "6h",
    '8h' = "8h",
    '12h' = "12h",
    '1d' = "1d",
    '3d' = "3d",
    '1w' = "1w",
    '1M' = "1M"
}
declare enum IsFreeze {
    true = "true",
    false = "false"
}
declare enum IsIsolatedMargin {
    TRUE = "TRUE",
    FALSE = "FALSE"
}
declare enum LendingType {
    DAILY = "DAILY",
    ACTIVITY = "ACTIVITY",
    CUSTOMIZED_FIXED = "CUSTOMIZED_FIXED"
}
declare enum LiquidityAddType {
    SINGLE = "SINGLE",
    COMBINATION = "COMBINATION"
}
declare enum LiquidityRemoveType {
    SINGLE = "SINGLE",
    COMBINATION = "COMBINATION"
}
declare enum MarginBorrowRepayType {
    BORROW = "BORROW",
    REPAY = "REPAY"
}
declare enum MargintransferType {
    TransferFromMainAccountToMarginAccount = 1,
    TransferFromMarginAccountToMainAccount = 2
}
declare enum MarginTransferType {
    ROLL_IN = "ROLL_IN",
    ROLL_OUT = "ROLL_OUT"
}
declare enum MarginStatus {
    CONFIRMED = "CONFIRMED",
    PENDING = "PENDING",
    FAILED = "FAILED"
}
declare enum MarginInterestHistory {
    PERIODIC = "PERIODIC",
    ON_BORROW = "ON_BORROW",
    PERIODIC_CONVERTED = "PERIODIC_CONVERTED",
    ON_BORROW_CONVERTED = "ON_BORROW_CONVERTED",
    PORTFOLIO = "PORTFOLIO"
}
declare enum MarginArchive {
    true = "true",
    false = "false"
}
declare enum MarginLevelStatus {
    EXCESSIVE = "EXCESSIVE",
    NORMAL = "NORMAL",
    MARGIN_CALL = "MARGIN_CALL",
    PRE_LIQUIDATION = "PRE_LIQUIDATION",
    FORCE_LIQUIDATION = "FORCE_LIQUIDATION"
}
declare enum MarginSubAccountTransferType {
    TransferFromSubaccountSpotAccountToMarginAccount = 1,
    TransferFromSubaccountMarginAccountToItsSpotAccount = 2
}
declare enum NeedBtcValuation {
    true = "true",
    false = "false"
}
declare enum NewOrderRespType {
    ACK = "ACK",
    RESULT = "RESULT",
    FULL = "FULL"
}
declare enum NewOrderResult {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE",
    NOT_ATTEMPTED = "NOT_ATTEMPTED"
}
declare enum OCOOrderStatus {
    EXECUTING = "EXECUTING",
    ALL_DONE = "ALL_DONE",
    REJECT = "REJECT"
}
declare enum OcoNewOrderRespType {
    ACK = "ACK",
    RESULT = "RESULT",
    FULL = "FULL"
}
declare enum OCOStatusType {
    RESPONSE = "RESPONSE",
    EXEC_STARTED = "EXEC_STARTED",
    ALL_DONE = "ALL_DONE"
}
declare enum Operation {
    ADD = "ADD",
    REMOVE = "REMOVE"
}
declare enum OptionalFixedAndActivityProductStatus {
    ALL = "ALL",
    SUBSCRIBABLE = "SUBSCRIBABLE",
    UNSUBSCRIBABLE = "UNSUBSCRIBABLE"
}
declare enum OptionalFlexibleProductStatus {
    ALL = "ALL",
    SUBSCRIBABLE = "SUBSCRIBABLE",
    UNSUBSCRIBABLE = "UNSUBSCRIBABLE"
}
declare enum OptionalSide {
    SELL = "SELL",
    BUY = "BUY"
}
declare enum OptionalTransFrom {
    SPOT = "SPOT",
    ISOLATED_MARGIN = "ISOLATED_MARGIN"
}
declare enum OptionalTransTo {
    SPOT = "SPOT",
    ISOLATED_MARGIN = "ISOLATED_MARGIN"
}
declare enum OrderStatus {
    NEW = "NEW",
    PARTIALLY_FILLED = "PARTIALLY_FILLED",
    FILLED = "FILLED",
    CANCELED = "CANCELED",
    PENDING_CANCEL = "PENDING_CANCEL",
    REJECTED = "REJECTED",
    EXPIRED = "EXPIRED",
    EXPIRED_IN_MATCH = "EXPIRED_IN_MATCH"
}
declare enum OrderType {
    LIMIT = "LIMIT",
    MARKET = "MARKET",
    STOP_LOSS = "STOP_LOSS",
    STOP_LOSS_LIMIT = "STOP_LOSS_LIMIT",
    TAKE_PROFIT = "TAKE_PROFIT",
    TAKE_PROFIT_LIMIT = "TAKE_PROFIT_LIMIT",
    LIMIT_MAKER = "LIMIT_MAKER"
}
declare enum Permissions {
    SPOT = "SPOT",
    MARGIN = "MARGIN",
    LEVERAGED = "LEVERAGED",
    TRD_GRP_002 = "TRD_GRP_002",
    TRD_GRP_003 = "TRD_GRP_003",
    TRD_GRP_004 = "TRD_GRP_004",
    TRD_GRP_005 = "TRD_GRP_005",
    TRD_GRP_006 = "TRD_GRP_006",
    TRD_GRP_007 = "TRD_GRP_007",
    TRD_GRP_008 = "TRD_GRP_008",
    TRD_GRP_009 = "TRD_GRP_009",
    TRD_GRP_010 = "TRD_GRP_010",
    TRD_GRP_011 = "TRD_GRP_011",
    TRD_GRP_012 = "TRD_GRP_012",
    TRD_GRP_013 = "TRD_GRP_013"
}
declare enum PositionSide {
    BOTH = "BOTH",
    LONG = "LONG",
    SHORT = "SHORT"
}
declare enum PositionStatus {
    HOLDING = "HOLDING",
    REDEEMED = "REDEEMED"
}
declare enum QueryConvertTransfer {
    MAIN = "MAIN",
    CARD = "CARD"
}
declare enum QuerySubAccountList {
    true = "true",
    false = "false"
}
declare enum RemoveLiquidityPreviewType {
    SINGLE = "SINGLE",
    COMBINATION = "COMBINATION"
}
declare enum RedeemDestAccount {
    SPOT = "SPOT",
    FUND = "FUND",
    ALL = "ALL"
}
declare enum SelfTradePreventionMode {
    EXPIRE_TAKER = "EXPIRE_TAKER",
    EXPIRE_MAKER = "EXPIRE_MAKER",
    EXPIRE_BOTH = "EXPIRE_BOTH",
    NONE = "NONE"
}
declare enum Side {
    SELL = "SELL",
    BUY = "BUY"
}
declare enum SideEffectType {
    NO_SIDE_EFFECT = "NO_SIDE_EFFECT",
    MARGIN_BUY = "MARGIN_BUY",
    AUTO_REPAY = "AUTO_REPAY",
    AUTO_BORROW_REPAY = "AUTO_BORROW_REPAY"
}
declare enum SimpleEarnDestAccount {
    SPOT = "SPOT",
    FUNDING = "FUNDING"
}
declare enum SimpleEarnFlexibleRewards {
    BONUS = "BONUS",
    REALTIME = "REALTIME",
    REWARDS = "REWARDS"
}
declare enum SimpleEarnLockedRedemption {
    MATURE = "MATURE",
    NEW_TRANSFERRED = "NEW_TRANSFERRED",
    AHEAD = "AHEAD"
}
declare enum SimpleEarnSourceAccount {
    SPOT = "SPOT",
    FUNDING = "FUNDING",
    SPOTANDFUNDING = "SPOTANDFUNDING"
}
declare enum SimpleEarnStatus {
    SUCCESS = "SUCCESS",
    PURCHASING = "PURCHASING",
    FAILED = "FAILED"
}
declare enum SimpleEarnType {
    AUTO = "AUTO",
    NORMAL = "NORMAL",
    CONVERT = "CONVERT",
    LOAN = "LOAN",
    AI = "AI",
    TRANSFER = "TRANSFER"
}
declare enum SortBy {
    START_TIME = "START_TIME",
    LOT_SIZE = "LOT_SIZE",
    INTEREST_RATE = "INTEREST_RATE",
    DURATION = "DURATION"
}
declare enum SpotBNBBurn {
    true = "true",
    false = "false"
}
declare enum StopLimitTimeInForce {
    GTC = "GTC",
    FOK = "FOK",
    IOC = "IOC"
}
declare enum SubAccountStatus {
    SUCCESS = "SUCCESS",
    PROCESS = "PROCESS",
    FAILURE = "FAILURE"
}
declare enum SubAccountTransferLog {
    SPOT = "SPOT",
    USDT_FUTURE = "USDT_FUTURE",
    COIN_FUTURE = "COIN_FUTURE",
    MARGIN = "MARGIN",
    ISOLATED_MARGIN = "ISOLATED_MARGIN"
}
declare enum SubscribeSourceAccount {
    SPOT = "SPOT",
    FUND = "FUND",
    ALL = "ALL"
}
declare enum SubUserHistoryType {
    TransferIn = 1,
    TransferOut = 2
}
declare enum SwapStatus {
    PendingForSwap = 0,
    Success = 1,
    Failed = 2
}
declare enum TimeInForce {
    GTC = "GTC",
    IOC = "IOC",
    FOK = "FOK"
}
declare enum ToAccountType {
    SPOT = "SPOT",
    USDT_FUTURE = "USDT_FUTURE",
    COIN_FUTURE = "COIN_FUTURE",
    MARGIN = "MARGIN",
    ISOLATED_MARGIN = "ISOLATED_MARGIN"
}
declare enum TradeType {
    BUY = "BUY",
    SELL = "SELL"
}
declare enum TransFrom {
    SPOT = "SPOT",
    ISOLATED_MARGIN = "ISOLATED_MARGIN"
}
declare enum TransTo {
    SPOT = "SPOT",
    ISOLATED_MARGIN = "ISOLATED_MARGIN"
}
declare enum TransactionType {
    Deposit = "0",
    Withdraw = "1"
}
declare enum UnivStatus {
    CONFIRMED = "CONFIRMED",
    PENDING = "PENDING",
    FAILED = "FAILED"
}
declare enum UnivTransferType {
    MAIN_MARGIN = "MAIN_MARGIN",
    CMFUTURE_MAIN = "CMFUTURE_MAIN",
    MARGIN_MAIN = "MARGIN_MAIN",
    ISOLATEDMARGIN_MARGIN = "ISOLATEDMARGIN_MARGIN",
    MARGIN_ISOLATEDMARGIN = "MARGIN_ISOLATEDMARGIN",
    ISOLATEDMARGIN_ISOLATEDMARGIN = "ISOLATEDMARGIN_ISOLATEDMARGIN",
    MARGIN_FUNDING = "MARGIN_FUNDING",
    FUNDING_MARGIN = "FUNDING_MARGIN",
    OPTION_MAIN = "OPTION_MAIN",
    MARGIN_OPTION = "MARGIN_OPTION",
    OPTION_MARGIN = "OPTION_MARGIN",
    FUNDING_OPTION = "FUNDING_OPTION",
    OPTION_FUNDING = "OPTION_FUNDING",
    MAIN_PORTFOLIO_MARGIN = "MAIN_PORTFOLIO_MARGIN",
    PORTFOLIO_MARGIN_MAIN = "PORTFOLIO_MARGIN_MAIN",
    MAIN_ISOLATED_MARGIN = "MAIN_ISOLATED_MARGIN",
    ISOLATED_MARGIN_MAIN = "ISOLATED_MARGIN_MAIN",
    MAIN_FUNDING = "MAIN_FUNDING",
    FUNDING_MAIN = "FUNDING_MAIN"
}
declare enum Urgency {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}
declare enum ValidTime {
    '10s' = "10s",
    '30s' = "30s",
    '1m' = "1m",
    '2m' = "2m"
}
declare enum WithdrawHistory {
    EmailSent = 0,
    Cancelled = 1,
    AwaitingApproval = 2,
    Rejected = 3,
    Processing = 4,
    Failure = 5,
    Completed = 6
}
declare enum WorkingFloor {
    EXCHANGE = "EXCHANGE",
    SOR = "SOR"
}

interface getAllMarginAssetsOptions {
    asset?: string;
}
interface getAllMarginAssetsResponse {
    assetFullName: string;
    assetName: string;
    isBorrowable: boolean;
    isMortgageable: boolean;
    userMinBorrow: string;
    userMinRepay: string;
    delistTime: number;
}
interface getAllCrossMarginPairsOptions {
    symbol?: string;
}
interface getAllCrossMarginPairsResponse {
    base: string;
    id: bigint;
    isBuyAllowed: boolean;
    isMarginTrade: boolean;
    isSellAllowed: boolean;
    quote: string;
    symbol: string;
    delistTime?: number;
}
interface getMarginPriceIndexResponse {
    calcTime: number;
    price: string;
    symbol: string;
}
interface marginAccountNewOrderOptions {
    isIsolated?: IsIsolatedMargin;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    stopPrice?: number;
    newClientOrderId?: string;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    sideEffectType?: SideEffectType;
    timeInForce?: TimeInForce;
    selfTradePreventionMode?: SelfTradePreventionMode;
    autoRepayAtCancel?: boolean;
    recvWindow?: number;
}
interface marginAccountNewOrderResponse {
    symbol: string;
    orderId: number;
    clientOrderId: string;
    isIsolated: boolean;
    transactTime: number;
    price?: string;
    origQty?: string;
    executedQty?: string;
    cummulativeQuoteQty?: string;
    status?: OrderStatus;
    timeInForce?: TimeInForce;
    type?: OrderType;
    side?: Side;
    selfTradePreventionMode?: SelfTradePreventionMode;
    fills?: marginAccountNewOrderFills[];
}
interface marginAccountNewOrderFills {
    price: string;
    qty: string;
    commission: string;
    commissionAsset: string;
}
interface marginAccountCancelOrderOptions {
    isIsolated?: IsIsolatedMargin;
    orderId?: number;
    origClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
}
interface marginAccountCancelOrderResponse {
    symbol: string;
    isIsolated: boolean;
    orderId: number;
    origClientOrderId: string;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: Side;
}
interface marginAccountCancelAllOpenOrdersOnASymbolOptions {
    isIsolated?: IsIsolatedMargin;
    recvWindow?: number;
}
interface marginAccountCancelAllOpenOrdersOnASymbolResponse {
    symbol: string;
    isIsolated: boolean;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: Side;
    selfTradePreventionMode: SelfTradePreventionMode;
}
interface adjustCrossMarginMaxLeverageResponse {
    success: boolean;
}
interface getCrossMarginTransferHistoryOptions {
    asset?: string;
    type?: GetCrossMargingTransferHistoryType;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    isolatedSymbol?: string;
    archived?: MarginArchive;
    recvWindow?: number;
}
interface getCrossMarginTransferHistoryResponse {
    rows: getCrossMarginTransferHistoryRows[];
    total: number;
}
interface getCrossMarginTransferHistoryRows {
    amount: string;
    asset: string;
    status: MarginStatus;
    timestamp: number;
    txId: number;
    type: GetCrossMargingTransferHistoryType;
    transFrom?: CrossMarginTrans;
    transTo?: CrossMarginTrans;
    fromSymbol?: string;
    toSymbol?: string;
}
interface getInterestHistoryOptions {
    asset?: string;
    isolatedSymbol?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    archived?: MarginArchive;
    recvWindow?: number;
}
interface getInterestHistoryResponse {
    rows: getInterestHistoryRows[];
    total: number;
}
interface getInterestHistoryRows {
    txId: bigint;
    interestAccuredTime: number;
    asset: string;
    rawAsset: string;
    principal: string;
    interest: string;
    interestRate: string;
    type: MarginInterestHistory;
    isolatedSymbol: string;
}
interface getForceLiquidationRecordOptions {
    startTime?: number;
    endTime?: number;
    isolatedSymbol?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getForceLiquidationRecordResponse {
    rows: getForceLiquidationRecordRows[];
    total: number;
}
interface getForceLiquidationRecordRows {
    avgPrice: string;
    executedQty: string;
    orderId: number;
    price: string;
    qty: string;
    side: Side;
    symbol: string;
    timeInForce: TimeInForce;
    isIsolated: boolean;
    updatedTime: number;
}
interface getCrossMarginAccountDetailsOptions {
    recvWindow?: number;
}
interface getCrossMarginAccountDetailsResponse {
    borrowEnabled: boolean;
    marginLevel: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    tradeEnabled: boolean;
    transferEnabled: boolean;
    accountType: CrossMarginAccountType;
    userAssets: getCrossMarginAccountDetailsUserassets[];
}
interface getCrossMarginAccountDetailsUserassets {
    asset: string;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
}
interface getMarginAccountOrderOptions {
    isIsolated?: IsIsolatedMargin;
    orderId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}
interface getMarginAccountOrderResponse {
    clientOrderId: string;
    cummulativeQuoteQty: string;
    executedQty: string;
    icebergQty: string;
    isWorking: boolean;
    orderId: number;
    origQty: string;
    price: string;
    side: Side;
    status: OrderStatus;
    stopPrice: string;
    symbol: string;
    isIsolated: boolean;
    time: number;
    timeInForce: TimeInForce;
    type: OrderType;
    selfTradePreventionMode: SelfTradePreventionMode;
    updateTime: number;
}
interface getMarginAccountOpenOrdersOptions {
    symbol?: string;
    isIsolated?: IsIsolatedMargin;
    recvWindow?: number;
}
interface getMarginAccountOpenOrdersResponse {
    clientOrderId: string;
    cummulativeQuoteQty: string;
    executedQty: string;
    icebergQty: string;
    isWorking: boolean;
    orderId: number;
    origQty: string;
    price: string;
    side: Side;
    status: OrderStatus;
    stopPrice: string;
    symbol: string;
    isIsolated: boolean;
    time: number;
    timeInForce: TimeInForce;
    type: OrderType;
    selfTradePreventionMode: SelfTradePreventionMode;
    updateTime: number;
}
interface getMarginAccountAllOrdersOptions {
    isIsolated?: IsIsolatedMargin;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface getMarginAccountAllOrdersResponse {
    clientOrderId: string;
    cummulativeQuoteQty: string;
    executedQty: string;
    icebergQty: string;
    isWorking: boolean;
    orderId: number;
    origQty: string;
    price: string;
    side: Side;
    status: OrderStatus;
    stopPrice: string;
    symbol: string;
    isIsolated: boolean;
    time: number;
    timeInForce: TimeInForce;
    type: OrderType;
    selfTradePreventionMode: SelfTradePreventionMode;
    updateTime: number;
}
interface marginAccountNewOcoOptions {
    isIsolated?: IsIsolatedMargin;
    listClientOrderId?: string;
    limitClientOrderId?: string;
    limitIcebergQty?: number;
    stopClientOrderId?: string;
    stopLimitPrice?: number;
    stopIcebergQty?: number;
    stopLimitTimeInForce?: StopLimitTimeInForce;
    newOrderRespType?: NewOrderRespType;
    sideEffectType?: SideEffectType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    autoRepayAtCancel?: boolean;
    recvWindow?: number;
}
interface marginAccountNewOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    marginBuyBorrowAmount: string;
    marginBuyBorrowAsset: string;
    isIsolated: boolean;
    orders: marginAccountNewOcoOrders[];
    orderReports: marginAccountNewOcoOrderreports[];
}
interface marginAccountNewOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface marginAccountNewOcoOrderreports {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: Side;
    stopPrice: string;
    selfTradePreventionMode: SelfTradePreventionMode;
}
interface marginAccountCancelOcoOptions {
    isIsolated?: IsIsolatedMargin;
    orderListId?: number;
    listClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
}
interface marginAccountCancelOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: marginAccountCancelOcoOrders[];
    orderReports: marginAccountCancelOcoOrderReports[];
}
interface marginAccountCancelOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface marginAccountCancelOcoOrderReports {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: Side;
    stopPrice: string;
    selfTradePreventionMode: SelfTradePreventionMode;
}
interface getMarginAccountOcoOptions {
    isIsolated?: IsIsolatedMargin;
    symbol?: string;
    orderListId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}
interface getMarginAccountOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: getMarginAccountOcoOrders[];
}
interface getMarginAccountOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface getMarginAccountAllOcoOptions {
    isIsolated?: IsIsolatedMargin;
    symbol?: string;
    fromId?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface getMarginAccountAllOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: getMarginAccountAllOcoOrders[];
}
interface getMarginAccountAllOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface getMarginAccountOpenOcoOptions {
    isIsolated?: IsIsolatedMargin;
    symbol?: string;
    recvWindow?: number;
}
interface getMarginAccountOpenOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: getMarginAccountOpenOcoOrders[];
}
interface getMarginAccountOpenOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface getMarginAccountTradeListOptions {
    isIsolated?: IsIsolatedMargin;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
}
interface getMarginAccountTradeListResponse {
    commission: string;
    commissionAsset: string;
    id: number;
    isBestMatch: boolean;
    isBuyer: boolean;
    isMaker: boolean;
    orderId: number;
    price: string;
    qty: string;
    symbol: string;
    isIsolated: boolean;
    time: number;
}
interface getMaxBorrowOptions {
    isolatedSymbol?: string;
    recvWindow?: number;
}
interface getMaxBorrowResponse {
    amount: string;
    borrowLimit: string;
}
interface getMaxTransferoutAmountOptions {
    isolatedSymbol?: string;
    recvWindow?: number;
}
interface getMaxTransferoutAmountResponse {
    amount: string;
}
interface getSummaryOfMarginAccountOptions {
    recvWindow?: number;
}
interface getSummaryOfMarginAccountResponse {
    normalBar: string;
    marginCallBar: string;
    forceLiquidationBar: string;
}
interface getIsolatedMarginAccountInfoOptions {
    symbols?: string;
    recvWindow?: number;
}
interface getIsolatedMarginAccountInfoResponse {
    assets: getIsolatedMarginAccountInfoAssets[];
    totalAssetOfBtc?: string;
    totalLiabilityOfBtc?: string;
    totalNetAssetOfBtc?: string;
}
interface getIsolatedMarginAccountInfoBaseasset {
    asset: string;
    borrowEnabled: boolean;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
    netAssetOfBtc: string;
    repayEnabled: boolean;
    totalAsset: string;
}
interface getIsolatedMarginAccountInfoQuoteasset {
    asset: string;
    borrowEnabled: boolean;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
    netAssetOfBtc: string;
    repayEnabled: boolean;
    totalAsset: string;
}
interface getIsolatedMarginAccountInfoAssets {
    baseAsset: getIsolatedMarginAccountInfoBaseasset;
    quoteAsset: getIsolatedMarginAccountInfoQuoteasset;
    symbol: string;
    isolatedCreated: boolean;
    enabled: boolean;
    marginLevel: string;
    marginLevelStatus: MarginLevelStatus;
    marginRatio: string;
    indexPrice: string;
    liquidatePrice: string;
    liquidateRate: string;
    tradeEnabled: boolean;
}
interface disableIsolatedMarginAccountOptions {
    recvWindow?: number;
}
interface disableIsolatedMarginAccountResponse {
    success: boolean;
    symbol: string;
}
interface enableIsolatedMarginAccountOptions {
    recvWindow?: number;
}
interface enableIsolatedMarginAccountResponse {
    success: boolean;
    symbol: string;
}
interface getEnabledIsolatedMarginAccountLimitOptions {
    recvWindow?: number;
}
interface getEnabledIsolatedMarginAccountLimitResponse {
    enabledAccount: number;
    maxAccount: number;
}
interface getAllIsolatedMarginSymbolOptions {
    symbol?: string;
    recvWindow?: number;
}
interface getAllIsolatedMarginSymbolResponse {
    symbol: string;
    base: string;
    quote: string;
    isMarginTrade: boolean;
    isBuyAllowed: boolean;
    isSellAllowed: boolean;
}
interface toggleBnbBurnOnSpotTradeAndMarginInterestOptions {
    spotBNBBurn?: SpotBNBBurn;
    interestBNBBurn?: InterestBNBBurn;
    recvWindow?: number;
}
interface toggleBnbBurnOnSpotTradeAndMarginInterestResponse {
    spotBNBBurn: boolean;
    interestBNBBurn: boolean;
}
interface getBnbBurnStatusOptions {
    recvWindow?: number;
}
interface getBnbBurnStatusResponse {
    spotBNBBurn: boolean;
    interestBNBBurn: boolean;
}
interface marginInterestRateHistoryOptions {
    vipLevel?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}
interface marginInterestRateHistoryResponse {
    asset: string;
    dailyInterestRate: string;
    timestamp: number;
    vipLevel: number;
}
interface getCrossMarginFeeDataOptions {
    vipLevel?: number;
    coin?: string;
    recvWindow?: number;
}
interface getCrossMarginFeeDataResponse {
    vipLevel: number;
    coin: string;
    transferIn: boolean;
    borrowable: boolean;
    dailyInterest: string;
    yearlyInterest: string;
    borrowLimit: string;
    marginablePairs: string[];
}
interface getIsolatedMarginFeeDataOptions {
    vipLevel?: number;
    symbol?: string;
    recvWindow?: number;
}
interface getIsolatedMarginFeeDataResponse {
    vipLevel: number;
    symbol: string;
    leverage: string;
    data: getIsolatedMarginFeeDataData[];
}
interface getIsolatedMarginFeeDataData {
    coin: string;
    dailyInterest: string;
    borrowLimit: string;
}
interface getIsolatedMarginTierDataOptions {
    tier?: number;
    recvWindow?: number;
}
interface getIsolatedMarginTierDataResponse {
    symbol: string;
    tier: number;
    effectiveMultiple: string;
    initialRiskRatio: string;
    liquidationRiskRatio: string;
    baseAssetMaxBorrowable: string;
    quoteAssetMaxBorrowable: string;
}
interface getCurrentMarginOrderCountUsageOptions {
    isIsolated?: IsIsolatedMargin;
    symbol?: string;
    recvWindow?: number;
}
interface getCurrentMarginOrderCountUsageResponse {
    rateLimitType: string;
    interval: string;
    intervalNum: number;
    limit: number;
    count: number;
}
interface crossMarginCollateralRatioResponse {
    collaterals: crossMarginCollateralRatioCollaterals[];
    assetNames: string[];
}
interface crossMarginCollateralRatioCollaterals {
    minUsdValue: string;
    maxUsdValue?: string;
    discountRate: string;
}
interface getSmallLiabilityExchangeCoinListOptions {
    recvWindow?: number;
}
interface getSmallLiabilityExchangeCoinListResponse {
    asset: string;
    interest: string;
    principal: string;
    liabilityAsset: string;
    liabilityQty: string;
}
interface smallLiabilityExchangeOptions {
    assetNames?: string;
}
interface smallLiabilityExchangeResponse {
    asset: string;
    interest: string;
    principal: string;
    liabilityAsset: string;
    liabilityQty: string;
}
interface getSmallLiabilityExchangeHistoryOptions {
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}
interface getSmallLiabilityExchangeHistoryResponse {
    total: number;
    rows: getSmallLiabilityExchangeHistoryRows[];
}
interface getSmallLiabilityExchangeHistoryRows {
    asset: string;
    amount: string;
    targetAsset: string;
    targetAmount: string;
    bizType: string;
    timestamp: number;
}
interface getFutureHoulyInterestRateResponse {
    asset: string;
    nextHourlyInterestRate: string;
}
interface getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions {
    recvWindow?: number;
}
interface getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse {
    delistTime: number;
    crossMarginAssets: string[];
    isolatedMarginSymbols: string[];
}
interface getMarginAvailableInventoryOptions {
    recvWindow?: number;
}
interface getMarginAvailableInventoryResponse {
    assets: {
        [key: string]: string;
    };
    updateTime: number;
}
interface marginManualLiquidationOptions {
    symbol?: string;
    recvWindow?: number;
}
interface marginManualLiquidationResponse {
    asset: string;
    interest: string;
    principal: string;
    liabilityAsset: string;
    liabilityQty: number;
}
interface getLeverageBracketResponse {
    assetNames: string[];
    rank: number;
    brackets: leverageBracket[];
}
interface leverageBracket {
    leverage: number;
    maxDebt: number;
    maintenanceMarginRate: number;
    initialMarginRate: number;
    fastNum: number;
}
interface marginAccountBorrowRepayOptions {
    recvWindow?: number;
}
interface marginAccountBorrowRepayResponse {
    tranId: number;
}
interface getBorrowRepayRecordsOptions {
    asset?: string;
    isolatedSymbol?: string;
    txId?: number;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getBorrowRepayRecordsResponse {
    rows: BorrowRepayRecordsRow[];
    total: number;
}
interface BorrowRepayRecordsRow {
    isolatedSymbol: string;
    amount: string;
    asset: string;
    interest: string;
    principal: string;
    status: MarginStatus;
    timestamp: number;
    txId: number;
}

type types$9_BorrowRepayRecordsRow = BorrowRepayRecordsRow;
type types$9_adjustCrossMarginMaxLeverageResponse = adjustCrossMarginMaxLeverageResponse;
type types$9_crossMarginCollateralRatioResponse = crossMarginCollateralRatioResponse;
type types$9_disableIsolatedMarginAccountOptions = disableIsolatedMarginAccountOptions;
type types$9_disableIsolatedMarginAccountResponse = disableIsolatedMarginAccountResponse;
type types$9_enableIsolatedMarginAccountOptions = enableIsolatedMarginAccountOptions;
type types$9_enableIsolatedMarginAccountResponse = enableIsolatedMarginAccountResponse;
type types$9_getAllCrossMarginPairsOptions = getAllCrossMarginPairsOptions;
type types$9_getAllCrossMarginPairsResponse = getAllCrossMarginPairsResponse;
type types$9_getAllIsolatedMarginSymbolOptions = getAllIsolatedMarginSymbolOptions;
type types$9_getAllIsolatedMarginSymbolResponse = getAllIsolatedMarginSymbolResponse;
type types$9_getAllMarginAssetsOptions = getAllMarginAssetsOptions;
type types$9_getAllMarginAssetsResponse = getAllMarginAssetsResponse;
type types$9_getBnbBurnStatusOptions = getBnbBurnStatusOptions;
type types$9_getBnbBurnStatusResponse = getBnbBurnStatusResponse;
type types$9_getBorrowRepayRecordsOptions = getBorrowRepayRecordsOptions;
type types$9_getBorrowRepayRecordsResponse = getBorrowRepayRecordsResponse;
type types$9_getCrossMarginAccountDetailsOptions = getCrossMarginAccountDetailsOptions;
type types$9_getCrossMarginAccountDetailsResponse = getCrossMarginAccountDetailsResponse;
type types$9_getCrossMarginFeeDataOptions = getCrossMarginFeeDataOptions;
type types$9_getCrossMarginFeeDataResponse = getCrossMarginFeeDataResponse;
type types$9_getCrossMarginTransferHistoryOptions = getCrossMarginTransferHistoryOptions;
type types$9_getCrossMarginTransferHistoryResponse = getCrossMarginTransferHistoryResponse;
type types$9_getCurrentMarginOrderCountUsageOptions = getCurrentMarginOrderCountUsageOptions;
type types$9_getCurrentMarginOrderCountUsageResponse = getCurrentMarginOrderCountUsageResponse;
type types$9_getEnabledIsolatedMarginAccountLimitOptions = getEnabledIsolatedMarginAccountLimitOptions;
type types$9_getEnabledIsolatedMarginAccountLimitResponse = getEnabledIsolatedMarginAccountLimitResponse;
type types$9_getForceLiquidationRecordOptions = getForceLiquidationRecordOptions;
type types$9_getForceLiquidationRecordResponse = getForceLiquidationRecordResponse;
type types$9_getFutureHoulyInterestRateResponse = getFutureHoulyInterestRateResponse;
type types$9_getInterestHistoryOptions = getInterestHistoryOptions;
type types$9_getInterestHistoryResponse = getInterestHistoryResponse;
type types$9_getIsolatedMarginAccountInfoOptions = getIsolatedMarginAccountInfoOptions;
type types$9_getIsolatedMarginAccountInfoResponse = getIsolatedMarginAccountInfoResponse;
type types$9_getIsolatedMarginFeeDataOptions = getIsolatedMarginFeeDataOptions;
type types$9_getIsolatedMarginFeeDataResponse = getIsolatedMarginFeeDataResponse;
type types$9_getIsolatedMarginTierDataOptions = getIsolatedMarginTierDataOptions;
type types$9_getIsolatedMarginTierDataResponse = getIsolatedMarginTierDataResponse;
type types$9_getLeverageBracketResponse = getLeverageBracketResponse;
type types$9_getMarginAccountAllOcoOptions = getMarginAccountAllOcoOptions;
type types$9_getMarginAccountAllOcoResponse = getMarginAccountAllOcoResponse;
type types$9_getMarginAccountAllOrdersOptions = getMarginAccountAllOrdersOptions;
type types$9_getMarginAccountAllOrdersResponse = getMarginAccountAllOrdersResponse;
type types$9_getMarginAccountOcoOptions = getMarginAccountOcoOptions;
type types$9_getMarginAccountOcoResponse = getMarginAccountOcoResponse;
type types$9_getMarginAccountOpenOcoOptions = getMarginAccountOpenOcoOptions;
type types$9_getMarginAccountOpenOcoResponse = getMarginAccountOpenOcoResponse;
type types$9_getMarginAccountOpenOrdersOptions = getMarginAccountOpenOrdersOptions;
type types$9_getMarginAccountOpenOrdersResponse = getMarginAccountOpenOrdersResponse;
type types$9_getMarginAccountOrderOptions = getMarginAccountOrderOptions;
type types$9_getMarginAccountOrderResponse = getMarginAccountOrderResponse;
type types$9_getMarginAccountTradeListOptions = getMarginAccountTradeListOptions;
type types$9_getMarginAccountTradeListResponse = getMarginAccountTradeListResponse;
type types$9_getMarginAvailableInventoryOptions = getMarginAvailableInventoryOptions;
type types$9_getMarginAvailableInventoryResponse = getMarginAvailableInventoryResponse;
type types$9_getMarginPriceIndexResponse = getMarginPriceIndexResponse;
type types$9_getMaxBorrowOptions = getMaxBorrowOptions;
type types$9_getMaxBorrowResponse = getMaxBorrowResponse;
type types$9_getMaxTransferoutAmountOptions = getMaxTransferoutAmountOptions;
type types$9_getMaxTransferoutAmountResponse = getMaxTransferoutAmountResponse;
type types$9_getSmallLiabilityExchangeCoinListOptions = getSmallLiabilityExchangeCoinListOptions;
type types$9_getSmallLiabilityExchangeCoinListResponse = getSmallLiabilityExchangeCoinListResponse;
type types$9_getSmallLiabilityExchangeHistoryOptions = getSmallLiabilityExchangeHistoryOptions;
type types$9_getSmallLiabilityExchangeHistoryResponse = getSmallLiabilityExchangeHistoryResponse;
type types$9_getSummaryOfMarginAccountOptions = getSummaryOfMarginAccountOptions;
type types$9_getSummaryOfMarginAccountResponse = getSummaryOfMarginAccountResponse;
type types$9_getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions = getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions;
type types$9_getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse = getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse;
type types$9_leverageBracket = leverageBracket;
type types$9_marginAccountBorrowRepayOptions = marginAccountBorrowRepayOptions;
type types$9_marginAccountBorrowRepayResponse = marginAccountBorrowRepayResponse;
type types$9_marginAccountCancelAllOpenOrdersOnASymbolOptions = marginAccountCancelAllOpenOrdersOnASymbolOptions;
type types$9_marginAccountCancelAllOpenOrdersOnASymbolResponse = marginAccountCancelAllOpenOrdersOnASymbolResponse;
type types$9_marginAccountCancelOcoOptions = marginAccountCancelOcoOptions;
type types$9_marginAccountCancelOcoResponse = marginAccountCancelOcoResponse;
type types$9_marginAccountCancelOrderOptions = marginAccountCancelOrderOptions;
type types$9_marginAccountCancelOrderResponse = marginAccountCancelOrderResponse;
type types$9_marginAccountNewOcoOptions = marginAccountNewOcoOptions;
type types$9_marginAccountNewOcoResponse = marginAccountNewOcoResponse;
type types$9_marginAccountNewOrderOptions = marginAccountNewOrderOptions;
type types$9_marginAccountNewOrderResponse = marginAccountNewOrderResponse;
type types$9_marginInterestRateHistoryOptions = marginInterestRateHistoryOptions;
type types$9_marginInterestRateHistoryResponse = marginInterestRateHistoryResponse;
type types$9_marginManualLiquidationOptions = marginManualLiquidationOptions;
type types$9_marginManualLiquidationResponse = marginManualLiquidationResponse;
type types$9_smallLiabilityExchangeOptions = smallLiabilityExchangeOptions;
type types$9_smallLiabilityExchangeResponse = smallLiabilityExchangeResponse;
type types$9_toggleBnbBurnOnSpotTradeAndMarginInterestOptions = toggleBnbBurnOnSpotTradeAndMarginInterestOptions;
type types$9_toggleBnbBurnOnSpotTradeAndMarginInterestResponse = toggleBnbBurnOnSpotTradeAndMarginInterestResponse;
declare namespace types$9 {
  export {
    types$9_BorrowRepayRecordsRow as BorrowRepayRecordsRow,
    types$9_adjustCrossMarginMaxLeverageResponse as adjustCrossMarginMaxLeverageResponse,
    types$9_crossMarginCollateralRatioResponse as crossMarginCollateralRatioResponse,
    types$9_disableIsolatedMarginAccountOptions as disableIsolatedMarginAccountOptions,
    types$9_disableIsolatedMarginAccountResponse as disableIsolatedMarginAccountResponse,
    types$9_enableIsolatedMarginAccountOptions as enableIsolatedMarginAccountOptions,
    types$9_enableIsolatedMarginAccountResponse as enableIsolatedMarginAccountResponse,
    types$9_getAllCrossMarginPairsOptions as getAllCrossMarginPairsOptions,
    types$9_getAllCrossMarginPairsResponse as getAllCrossMarginPairsResponse,
    types$9_getAllIsolatedMarginSymbolOptions as getAllIsolatedMarginSymbolOptions,
    types$9_getAllIsolatedMarginSymbolResponse as getAllIsolatedMarginSymbolResponse,
    types$9_getAllMarginAssetsOptions as getAllMarginAssetsOptions,
    types$9_getAllMarginAssetsResponse as getAllMarginAssetsResponse,
    types$9_getBnbBurnStatusOptions as getBnbBurnStatusOptions,
    types$9_getBnbBurnStatusResponse as getBnbBurnStatusResponse,
    types$9_getBorrowRepayRecordsOptions as getBorrowRepayRecordsOptions,
    types$9_getBorrowRepayRecordsResponse as getBorrowRepayRecordsResponse,
    types$9_getCrossMarginAccountDetailsOptions as getCrossMarginAccountDetailsOptions,
    types$9_getCrossMarginAccountDetailsResponse as getCrossMarginAccountDetailsResponse,
    types$9_getCrossMarginFeeDataOptions as getCrossMarginFeeDataOptions,
    types$9_getCrossMarginFeeDataResponse as getCrossMarginFeeDataResponse,
    types$9_getCrossMarginTransferHistoryOptions as getCrossMarginTransferHistoryOptions,
    types$9_getCrossMarginTransferHistoryResponse as getCrossMarginTransferHistoryResponse,
    types$9_getCurrentMarginOrderCountUsageOptions as getCurrentMarginOrderCountUsageOptions,
    types$9_getCurrentMarginOrderCountUsageResponse as getCurrentMarginOrderCountUsageResponse,
    types$9_getEnabledIsolatedMarginAccountLimitOptions as getEnabledIsolatedMarginAccountLimitOptions,
    types$9_getEnabledIsolatedMarginAccountLimitResponse as getEnabledIsolatedMarginAccountLimitResponse,
    types$9_getForceLiquidationRecordOptions as getForceLiquidationRecordOptions,
    types$9_getForceLiquidationRecordResponse as getForceLiquidationRecordResponse,
    types$9_getFutureHoulyInterestRateResponse as getFutureHoulyInterestRateResponse,
    types$9_getInterestHistoryOptions as getInterestHistoryOptions,
    types$9_getInterestHistoryResponse as getInterestHistoryResponse,
    types$9_getIsolatedMarginAccountInfoOptions as getIsolatedMarginAccountInfoOptions,
    types$9_getIsolatedMarginAccountInfoResponse as getIsolatedMarginAccountInfoResponse,
    types$9_getIsolatedMarginFeeDataOptions as getIsolatedMarginFeeDataOptions,
    types$9_getIsolatedMarginFeeDataResponse as getIsolatedMarginFeeDataResponse,
    types$9_getIsolatedMarginTierDataOptions as getIsolatedMarginTierDataOptions,
    types$9_getIsolatedMarginTierDataResponse as getIsolatedMarginTierDataResponse,
    types$9_getLeverageBracketResponse as getLeverageBracketResponse,
    types$9_getMarginAccountAllOcoOptions as getMarginAccountAllOcoOptions,
    types$9_getMarginAccountAllOcoResponse as getMarginAccountAllOcoResponse,
    types$9_getMarginAccountAllOrdersOptions as getMarginAccountAllOrdersOptions,
    types$9_getMarginAccountAllOrdersResponse as getMarginAccountAllOrdersResponse,
    types$9_getMarginAccountOcoOptions as getMarginAccountOcoOptions,
    types$9_getMarginAccountOcoResponse as getMarginAccountOcoResponse,
    types$9_getMarginAccountOpenOcoOptions as getMarginAccountOpenOcoOptions,
    types$9_getMarginAccountOpenOcoResponse as getMarginAccountOpenOcoResponse,
    types$9_getMarginAccountOpenOrdersOptions as getMarginAccountOpenOrdersOptions,
    types$9_getMarginAccountOpenOrdersResponse as getMarginAccountOpenOrdersResponse,
    types$9_getMarginAccountOrderOptions as getMarginAccountOrderOptions,
    types$9_getMarginAccountOrderResponse as getMarginAccountOrderResponse,
    types$9_getMarginAccountTradeListOptions as getMarginAccountTradeListOptions,
    types$9_getMarginAccountTradeListResponse as getMarginAccountTradeListResponse,
    types$9_getMarginAvailableInventoryOptions as getMarginAvailableInventoryOptions,
    types$9_getMarginAvailableInventoryResponse as getMarginAvailableInventoryResponse,
    types$9_getMarginPriceIndexResponse as getMarginPriceIndexResponse,
    types$9_getMaxBorrowOptions as getMaxBorrowOptions,
    types$9_getMaxBorrowResponse as getMaxBorrowResponse,
    types$9_getMaxTransferoutAmountOptions as getMaxTransferoutAmountOptions,
    types$9_getMaxTransferoutAmountResponse as getMaxTransferoutAmountResponse,
    types$9_getSmallLiabilityExchangeCoinListOptions as getSmallLiabilityExchangeCoinListOptions,
    types$9_getSmallLiabilityExchangeCoinListResponse as getSmallLiabilityExchangeCoinListResponse,
    types$9_getSmallLiabilityExchangeHistoryOptions as getSmallLiabilityExchangeHistoryOptions,
    types$9_getSmallLiabilityExchangeHistoryResponse as getSmallLiabilityExchangeHistoryResponse,
    types$9_getSummaryOfMarginAccountOptions as getSummaryOfMarginAccountOptions,
    types$9_getSummaryOfMarginAccountResponse as getSummaryOfMarginAccountResponse,
    types$9_getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions as getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions,
    types$9_getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse as getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse,
    types$9_leverageBracket as leverageBracket,
    types$9_marginAccountBorrowRepayOptions as marginAccountBorrowRepayOptions,
    types$9_marginAccountBorrowRepayResponse as marginAccountBorrowRepayResponse,
    types$9_marginAccountCancelAllOpenOrdersOnASymbolOptions as marginAccountCancelAllOpenOrdersOnASymbolOptions,
    types$9_marginAccountCancelAllOpenOrdersOnASymbolResponse as marginAccountCancelAllOpenOrdersOnASymbolResponse,
    types$9_marginAccountCancelOcoOptions as marginAccountCancelOcoOptions,
    types$9_marginAccountCancelOcoResponse as marginAccountCancelOcoResponse,
    types$9_marginAccountCancelOrderOptions as marginAccountCancelOrderOptions,
    types$9_marginAccountCancelOrderResponse as marginAccountCancelOrderResponse,
    types$9_marginAccountNewOcoOptions as marginAccountNewOcoOptions,
    types$9_marginAccountNewOcoResponse as marginAccountNewOcoResponse,
    types$9_marginAccountNewOrderOptions as marginAccountNewOrderOptions,
    types$9_marginAccountNewOrderResponse as marginAccountNewOrderResponse,
    types$9_marginInterestRateHistoryOptions as marginInterestRateHistoryOptions,
    types$9_marginInterestRateHistoryResponse as marginInterestRateHistoryResponse,
    types$9_marginManualLiquidationOptions as marginManualLiquidationOptions,
    types$9_marginManualLiquidationResponse as marginManualLiquidationResponse,
    types$9_smallLiabilityExchangeOptions as smallLiabilityExchangeOptions,
    types$9_smallLiabilityExchangeResponse as smallLiabilityExchangeResponse,
    types$9_toggleBnbBurnOnSpotTradeAndMarginInterestOptions as toggleBnbBurnOnSpotTradeAndMarginInterestOptions,
    types$9_toggleBnbBurnOnSpotTradeAndMarginInterestResponse as toggleBnbBurnOnSpotTradeAndMarginInterestResponse,
  };
}

interface checkServerTimeResponse {
    serverTime: number;
}
interface exchangeInformationOptions {
    symbol?: string;
    symbols?: string;
    permissions?: string;
}
interface exchangeInformationResponse {
    timezone: string;
    serverTime: number;
    rateLimits: exchangeInformationRatelimits[];
    exchangeFilters: exchangefilters[] | [Record<string, never>];
    symbols: exchangeInformationSymbols[];
}
interface exchangeInformationRatelimits {
    rateLimitType: 'REQUEST_WEIGHT' | 'ORDERS' | 'RAW_REQUESTS';
    interval: 'SECOND' | 'MINUTE' | 'DAY';
    intervalNum: number;
    limit: number;
}
interface exchangefilters {
    filterType: string;
    maxNumOrders: number;
}
interface exchangeInformationSymbols {
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quoteAssetPrecision: number;
    baseCommissionPrecision: number;
    quoteCommissionPrecision: number;
    orderTypes: string[];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    quoteOrderQtyMarketAllowed: boolean;
    allowTrailingStop: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: filters[];
    permissions: string[];
    defaultSelfTradePreventionMode: string;
    allowedSelfTradePreventionModes: string[];
}
interface orderBookOptions {
    limit?: number;
}
interface orderBookResponse {
    lastUpdateId: number;
    bids: string[][];
    asks: string[][];
}
interface recentTradesListOptions {
    limit?: number;
}
interface recentTradesListResponse {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
    isBestMatch: boolean;
}
interface oldTradeLookupOptions {
    limit?: number;
    fromId?: number;
}
interface oldTradeLookupResponse {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
    isBestMatch: boolean;
}
interface compressedAggregateTradesListOptions {
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
interface compressedAggregateTradesListResponse {
    a: number;
    p: string;
    q: string;
    f: number;
    l: number;
    T: number;
    m: boolean;
    M: boolean;
}
interface klineCandlestickDataOptions {
    startTime?: number;
    endTime?: number;
    timeZone?: string;
    limit?: number;
}
type klineCandlestickDataResponse = (string | number)[];
interface uiklinesOptions {
    startTime?: number;
    endTime?: number;
    timeZone?: string;
    limit?: number;
}
type uiklinesResponse = (number | string)[];
interface currentAveragePriceResponse {
    mins: number;
    price: string;
    closeTime: number;
}
interface ticker24hrOptions$1 {
    symbol?: string;
    symbols?: string;
    type?: 'FULL' | 'MINI';
}
interface ticker24hrResponse {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    prevClosePrice: string;
    lastPrice: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}
interface symbolPriceTickerOptions {
    symbol?: string;
    symbols?: string;
}
interface symbolPriceTickerResponse {
    symbol: string;
    price: string;
}
interface symbolOrderBookTickerOptions {
    symbol?: string;
    symbols?: string;
}
interface symbolOrderBookTickerResponse {
    symbol: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
}
interface rollingWindowPriceChangeStatisticsOptions {
    symbol?: string;
    symbols?: string;
    windowSize?: string;
    type?: 'FULL' | 'MINI';
}
interface rollingWindowPriceChangeStatisticsResponse {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvgPrice: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    lastPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}
type filters = priceFilter | percentPrice | percentPriceBySide | lotSize | minNotional | notional | iceBergParts | marketLotSize | maxNumOrders | maxNumAlgoOrders | maxNumIcebergOrders | maxPosition | trailingDelta | exchangeMaxNumOrders | exchangeMaxNumAlgoOrders | exchangeMaxNumIcebergOrders;
interface exchangeMaxNumOrders {
    filterType: 'EXCHANGE_MAX_NUM_ORDERS';
    maxNumOrders: number;
}
interface exchangeMaxNumAlgoOrders {
    filterType: 'EXCHANGE_MAX_NUM_ALGO_ORDERS';
    maxNumAlgoOrders: number;
}
interface exchangeMaxNumIcebergOrders {
    filterType: 'EXCHANGE_MAX_NUM_ICEBERG_ORDERS';
    maxNumIcebergOrders: number;
}
interface lotSize {
    filterType: 'LOT_SIZE';
    minQty: string;
    maxQty: string;
    stepSize: string;
}
interface marketLotSize {
    filterType: 'MARKET_LOT_SIZE';
    minQty: string;
    maxQty: string;
    stepSize: string;
}
interface maxNumAlgoOrders {
    filterType: 'MAX_NUM_ALGO_ORDERS';
    maxNumAlgoOrders: number;
}
interface maxNumOrders {
    filterType: 'MAX_NUM_ORDERS';
    maxNumOrders: number;
}
interface maxNumIcebergOrders {
    filterType: 'MAX_NUM_ICEBERG_ORDERS';
    maxNumIcebergOrders: number;
}
interface maxPosition {
    filterType: 'MAX_POSITION';
    maxPosition: string;
}
interface minNotional {
    filterType: 'MIN_NOTIONAL';
    minNotional: string;
    applyToMarket: boolean;
    avgPriceMins: number;
}
interface notional {
    filterType: 'NOTIONAL';
    minNotional: string;
    applyMinToMarket: boolean;
    maxNotional: string;
    applyMaxToMarket: boolean;
    avgPriceMins: number;
}
interface percentPrice {
    filterType: 'PERCENT_PRICE';
    multiplierUp: string;
    multiplierDown: string;
    avgPriceMins: number;
}
interface percentPriceBySide {
    filterType: 'PERCENT_PRICE_BY_SIDE';
    bidMultiplierUp: string;
    bidMultiplierDown: string;
    askMultiplierUp: string;
    askMultiplierDown: string;
    avgPriceMins: number;
}
interface priceFilter {
    filterType: 'PRICE_FILTER';
    minPrice: string;
    maxPrice: string;
    tickSize: string;
}
interface iceBergParts {
    filterType: 'ICEBERG_PARTS';
    limit: number;
}
interface trailingDelta {
    filterType: 'TRAILING_DELTA';
    minTrailingAboveDelta: number;
    maxTrailingAboveDelta: number;
    minTrailingBelowDelta: number;
    maxTrailingBelowDelta: number;
}
interface tradingDayTickerOptions {
    symbols?: string;
    timeZone?: string;
    type?: 'FULL' | 'MINI';
}
interface tradingDayTickerResponse {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvgPrice: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    lastPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}

type types$8_checkServerTimeResponse = checkServerTimeResponse;
type types$8_compressedAggregateTradesListOptions = compressedAggregateTradesListOptions;
type types$8_compressedAggregateTradesListResponse = compressedAggregateTradesListResponse;
type types$8_currentAveragePriceResponse = currentAveragePriceResponse;
type types$8_exchangeInformationOptions = exchangeInformationOptions;
type types$8_exchangeInformationResponse = exchangeInformationResponse;
type types$8_klineCandlestickDataOptions = klineCandlestickDataOptions;
type types$8_klineCandlestickDataResponse = klineCandlestickDataResponse;
type types$8_oldTradeLookupOptions = oldTradeLookupOptions;
type types$8_oldTradeLookupResponse = oldTradeLookupResponse;
type types$8_orderBookOptions = orderBookOptions;
type types$8_orderBookResponse = orderBookResponse;
type types$8_recentTradesListOptions = recentTradesListOptions;
type types$8_recentTradesListResponse = recentTradesListResponse;
type types$8_rollingWindowPriceChangeStatisticsOptions = rollingWindowPriceChangeStatisticsOptions;
type types$8_rollingWindowPriceChangeStatisticsResponse = rollingWindowPriceChangeStatisticsResponse;
type types$8_symbolOrderBookTickerOptions = symbolOrderBookTickerOptions;
type types$8_symbolOrderBookTickerResponse = symbolOrderBookTickerResponse;
type types$8_symbolPriceTickerOptions = symbolPriceTickerOptions;
type types$8_symbolPriceTickerResponse = symbolPriceTickerResponse;
type types$8_ticker24hrResponse = ticker24hrResponse;
type types$8_tradingDayTickerOptions = tradingDayTickerOptions;
type types$8_tradingDayTickerResponse = tradingDayTickerResponse;
type types$8_uiklinesOptions = uiklinesOptions;
type types$8_uiklinesResponse = uiklinesResponse;
declare namespace types$8 {
  export {
    types$8_checkServerTimeResponse as checkServerTimeResponse,
    types$8_compressedAggregateTradesListOptions as compressedAggregateTradesListOptions,
    types$8_compressedAggregateTradesListResponse as compressedAggregateTradesListResponse,
    types$8_currentAveragePriceResponse as currentAveragePriceResponse,
    types$8_exchangeInformationOptions as exchangeInformationOptions,
    types$8_exchangeInformationResponse as exchangeInformationResponse,
    types$8_klineCandlestickDataOptions as klineCandlestickDataOptions,
    types$8_klineCandlestickDataResponse as klineCandlestickDataResponse,
    types$8_oldTradeLookupOptions as oldTradeLookupOptions,
    types$8_oldTradeLookupResponse as oldTradeLookupResponse,
    types$8_orderBookOptions as orderBookOptions,
    types$8_orderBookResponse as orderBookResponse,
    types$8_recentTradesListOptions as recentTradesListOptions,
    types$8_recentTradesListResponse as recentTradesListResponse,
    types$8_rollingWindowPriceChangeStatisticsOptions as rollingWindowPriceChangeStatisticsOptions,
    types$8_rollingWindowPriceChangeStatisticsResponse as rollingWindowPriceChangeStatisticsResponse,
    types$8_symbolOrderBookTickerOptions as symbolOrderBookTickerOptions,
    types$8_symbolOrderBookTickerResponse as symbolOrderBookTickerResponse,
    types$8_symbolPriceTickerOptions as symbolPriceTickerOptions,
    types$8_symbolPriceTickerResponse as symbolPriceTickerResponse,
    ticker24hrOptions$1 as ticker24hrOptions,
    types$8_ticker24hrResponse as ticker24hrResponse,
    types$8_tradingDayTickerOptions as tradingDayTickerOptions,
    types$8_tradingDayTickerResponse as tradingDayTickerResponse,
    types$8_uiklinesOptions as uiklinesOptions,
    types$8_uiklinesResponse as uiklinesResponse,
  };
}

interface getSimpleEarnFlexibleProductListOptions {
    asset?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getSimpleEarnFlexibleProductListResponse {
    rows: getSimpleEarnFlexibleProductListRows[];
    total: number;
}
interface getSimpleEarnFlexibleProductListRows {
    asset: string;
    latestAnnualPercentageRate: string;
    tierAnnualPercentageRate: tierAnnualPercentageRate;
    airDropPercentageRate: string;
    canPurchase: boolean;
    canRedeem: boolean;
    isSoldOut: boolean;
    hot: boolean;
    minPurchaseAmount: string;
    productId: string;
    subscriptionStartTime: string;
    status: SimpleEarnStatus;
}
interface getSimpleEarnLockedProductListOptions {
    asset?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getSimpleEarnLockedProductListResponse {
    rows: getSimpleEarnLockedProductListRows[];
    total: number;
}
interface getSimpleEarnLockedProductListRows {
    projectId: string;
    detail: lockedProductDetails;
    quota: lockedProductQuota;
}
interface lockedProductDetails {
    asset: string;
    rewardAsset: string;
    duration: number;
    renewable: boolean;
    isSoldOut: boolean;
    apr: string;
    status: string;
    subscriptionStartTime: string;
    extraRewardAsset: string;
    extraRewardAPR: string;
}
interface lockedProductQuota {
    totalPersonalQuota: string;
    minimum: string;
}
interface subscribeFlexibleProductOptions {
    autoSubscribe?: boolean;
    sourceAccount?: SubscribeSourceAccount;
    recvWindow?: number;
}
interface subscribeFlexibleProductResponse {
    purchaseId: number;
    success: boolean;
}
interface subscribeLockedProductOptions {
    autoSubscribe?: boolean;
    sourceAccount?: SubscribeSourceAccount;
    recvWindow?: number;
}
interface subscribeLockedProductResponse {
    purchaseId: number;
    positionId: string;
    success: boolean;
}
interface redeemFlexibleProductOptions {
    redeemAll?: boolean;
    amount?: number;
    destAccount?: RedeemDestAccount;
    recvWindow?: number;
}
interface redeemFlexibleProductResponse {
    redeemId: number;
    success: boolean;
}
interface redeemLockedProductOptions {
    recvWindow?: number;
}
interface redeemLockedProductResponse {
    redeemId: number;
    success: boolean;
}
interface getFlexibleProductPositionOptions {
    asset?: string;
    productId?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getFlexibleProductPositionResponse {
    rows: getFlexibleProductPositionRows[];
    total: number;
}
interface getFlexibleProductPositionRows {
    totalAmount: string;
    tierAnnualPercentageRate: tierAnnualPercentageRate;
    latestAnnualPercentageRate: string;
    yesterdayAirdropPercentageRate: string;
    asset: string;
    airDropAsset: string;
    canRedeem: boolean;
    collateralAmount: string;
    productId: string;
    yesterdayRealTimeRewards: string;
    cumulativeBonusRewards: string;
    cumulativeRealTimeRewards: string;
    cumulativeTotalRewards: string;
    autoSubscribe: boolean;
}
interface tierAnnualPercentageRate {
    '0-5BTC': number;
    '5-10BTC': number;
}
interface getLockedProductPositionOptions {
    asset?: string;
    positionId?: string;
    projectId?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getLockedProductPositionResponse {
    rows: getLockedProductPositionRows[];
    total: number;
}
interface getLockedProductPositionRows {
    positionId: string;
    projectId: string;
    asset: string;
    amount: string;
    purchaseTime: string;
    duration: string;
    accrualDays: string;
    rewardAsset: string;
    APY: string;
    isRenewable: boolean;
    isAutoRenew: boolean;
    redeemDate: string;
}
interface simpleAccountOptions {
    recvWindow?: number;
}
interface simpleAccountResponse {
    totalAmountInBTC: string;
    totalAmountInUSDT: string;
    totalFlexibleAmountInBTC: string;
    totalFlexibleAmountInUSDT: string;
    totalLockedInBTC: string;
    totalLockedInUSDT: string;
}
interface getFlexibleSubscriptionRecordOptions {
    productId?: string;
    purchaseId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getFlexibleSubscriptionRecordResponse {
    rows: getFlexibleSubscriptionRecordRows[];
    total: number;
}
interface getFlexibleSubscriptionRecordRows {
    amount: string;
    asset: string;
    time: number;
    purchaseId: number;
    type: SimpleEarnType;
    sourceAccount: SimpleEarnSourceAccount;
    amtFromSpot: string;
    amtFromFunding: string;
    status: SimpleEarnStatus;
}
interface getLockedSubscriptionRecordOptions {
    purchaseId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getLockedSubscriptionRecordResponse {
    rows: getLockedSubscriptionRecordRows[];
    total: number;
}
interface getLockedSubscriptionRecordRows {
    positionId: string;
    purchaseId: number;
    time: number;
    asset: string;
    amount: string;
    lockPeriod: string;
    type: SimpleEarnType;
    sourceAccount: SimpleEarnSourceAccount;
    amtFromSpot: string;
    amtFromFunding: string;
    status: SimpleEarnStatus;
}
interface getFlexibleRedemptionRecordOptions {
    productId?: string;
    redeemId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
}
interface getFlexibleRedemptionRecordResponse {
    rows: getFlexibleRedemptionRecordRows[];
    total: number;
}
interface getFlexibleRedemptionRecordRows {
    amount: string;
    asset: string;
    time: number;
    projectId: string;
    redeemId: number;
    destAccount: SimpleEarnDestAccount;
    status: string;
}
interface getLockedRedemptionRecordOptions {
    positionId?: string;
    redeemId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getLockedRedemptionRecordResponse {
    rows: getLockedRedemptionRecordRows[];
    total: number;
}
interface getLockedRedemptionRecordRows {
    positionId: string;
    redeemId: number;
    time: number;
    asset: string;
    lockPeriod: string;
    amount: string;
    type: SimpleEarnLockedRedemption;
    deliverDate: string;
    status: string;
}
interface getFlexibleRewardsHistoryOptions {
    productId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
}
interface getFlexibleRewardsHistoryResponse {
    rows: getFlexibleRewardsHistoryRows[];
    total: number;
}
interface getFlexibleRewardsHistoryRows {
    asset: string;
    rewards: string;
    projectId: string;
    type: SimpleEarnFlexibleRewards;
    time: number;
}
interface getLockedRewardsHistoryOptions {
    positionId?: string;
    asset?: string;
    startTime?: number;
    endTime?: number;
    size?: number;
    recvWindow?: number;
}
interface getLockedRewardsHistoryResponse {
    rows: getLockedRewardsHistoryRows[];
    total: number;
}
interface getLockedRewardsHistoryRows {
    positionId: string;
    time: number;
    asset: string;
    lockPeriod: string;
    amount: string;
}
interface setFlexibleAutoSubscribeOptions {
    recvWindow?: number;
}
interface setFlexibleAutoSubscribeResponse {
    success: boolean;
}
interface setLockedAutoSubscribeOptions {
    recvWindow?: number;
}
interface setLockedAutoSubscribeResponse {
    success: boolean;
}
interface getFlexiblePersonalLeftQuotaOptions {
    recvWindow?: number;
}
interface getFlexiblePersonalLeftQuotaResponse {
    leftPersonalQuota: string;
}
interface getLockedPersonalLeftQuotaOptions {
    recvWindow?: number;
}
interface getLockedPersonalLeftQuotaResponse {
    leftPersonalQuota: string;
}
interface getFlexibleSubscriptionPreviewOptions {
    recvWindow?: number;
}
interface getFlexibleSubscriptionPreviewResponse {
    totalAmount: string;
    rewardAsset: string;
    airDropAsset: string;
    estDailyBonusRewards: string;
    estDailyRealTimeRewards: string;
    estDailyAirdropRewards: string;
}
interface getLockedSubscriptionPreviewOptions {
    autoSubscribe?: boolean;
    recvWindow?: number;
}
interface getLockedSubscriptionPreviewResponse {
    rewardAsset: string;
    totalRewardAmt: string;
    extraRewardAsset: string;
    estTotalExtraRewardAmt: string;
    nextPay: string;
    nextPayDate: string;
    valueDate: string;
    rewardsEndDate: string;
    deliverDate: string;
    nextSubscriptionDate: string;
}
interface getRateHistoryOptions {
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getRateHistoryResponse {
    rows: getRateHistoryRows[];
    total: number;
}
interface getRateHistoryRows {
    productId: string;
    asset: string;
    annualPercentageRate: string;
    time: number;
}
interface getCollateralRecordOptions {
    productId?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
}
interface getCollateralRecordResponse {
    rows: getCollateralRecordRows[];
    total: number;
}
interface getCollateralRecordRows {
    amount: string;
    productId: string;
    asset: string;
    createTime: number;
    type: string;
    productName: string;
    orderId: number;
}

type types$7_getCollateralRecordOptions = getCollateralRecordOptions;
type types$7_getCollateralRecordResponse = getCollateralRecordResponse;
type types$7_getFlexiblePersonalLeftQuotaOptions = getFlexiblePersonalLeftQuotaOptions;
type types$7_getFlexiblePersonalLeftQuotaResponse = getFlexiblePersonalLeftQuotaResponse;
type types$7_getFlexibleProductPositionOptions = getFlexibleProductPositionOptions;
type types$7_getFlexibleProductPositionResponse = getFlexibleProductPositionResponse;
type types$7_getFlexibleRedemptionRecordOptions = getFlexibleRedemptionRecordOptions;
type types$7_getFlexibleRedemptionRecordResponse = getFlexibleRedemptionRecordResponse;
type types$7_getFlexibleRewardsHistoryOptions = getFlexibleRewardsHistoryOptions;
type types$7_getFlexibleRewardsHistoryResponse = getFlexibleRewardsHistoryResponse;
type types$7_getFlexibleSubscriptionPreviewOptions = getFlexibleSubscriptionPreviewOptions;
type types$7_getFlexibleSubscriptionPreviewResponse = getFlexibleSubscriptionPreviewResponse;
type types$7_getFlexibleSubscriptionRecordOptions = getFlexibleSubscriptionRecordOptions;
type types$7_getFlexibleSubscriptionRecordResponse = getFlexibleSubscriptionRecordResponse;
type types$7_getLockedPersonalLeftQuotaOptions = getLockedPersonalLeftQuotaOptions;
type types$7_getLockedPersonalLeftQuotaResponse = getLockedPersonalLeftQuotaResponse;
type types$7_getLockedProductPositionOptions = getLockedProductPositionOptions;
type types$7_getLockedProductPositionResponse = getLockedProductPositionResponse;
type types$7_getLockedRedemptionRecordOptions = getLockedRedemptionRecordOptions;
type types$7_getLockedRedemptionRecordResponse = getLockedRedemptionRecordResponse;
type types$7_getLockedRewardsHistoryOptions = getLockedRewardsHistoryOptions;
type types$7_getLockedRewardsHistoryResponse = getLockedRewardsHistoryResponse;
type types$7_getLockedSubscriptionPreviewOptions = getLockedSubscriptionPreviewOptions;
type types$7_getLockedSubscriptionPreviewResponse = getLockedSubscriptionPreviewResponse;
type types$7_getLockedSubscriptionRecordOptions = getLockedSubscriptionRecordOptions;
type types$7_getLockedSubscriptionRecordResponse = getLockedSubscriptionRecordResponse;
type types$7_getRateHistoryOptions = getRateHistoryOptions;
type types$7_getRateHistoryResponse = getRateHistoryResponse;
type types$7_getSimpleEarnFlexibleProductListOptions = getSimpleEarnFlexibleProductListOptions;
type types$7_getSimpleEarnFlexibleProductListResponse = getSimpleEarnFlexibleProductListResponse;
type types$7_getSimpleEarnLockedProductListOptions = getSimpleEarnLockedProductListOptions;
type types$7_getSimpleEarnLockedProductListResponse = getSimpleEarnLockedProductListResponse;
type types$7_redeemFlexibleProductOptions = redeemFlexibleProductOptions;
type types$7_redeemFlexibleProductResponse = redeemFlexibleProductResponse;
type types$7_redeemLockedProductOptions = redeemLockedProductOptions;
type types$7_redeemLockedProductResponse = redeemLockedProductResponse;
type types$7_setFlexibleAutoSubscribeOptions = setFlexibleAutoSubscribeOptions;
type types$7_setFlexibleAutoSubscribeResponse = setFlexibleAutoSubscribeResponse;
type types$7_setLockedAutoSubscribeOptions = setLockedAutoSubscribeOptions;
type types$7_setLockedAutoSubscribeResponse = setLockedAutoSubscribeResponse;
type types$7_simpleAccountOptions = simpleAccountOptions;
type types$7_simpleAccountResponse = simpleAccountResponse;
type types$7_subscribeFlexibleProductOptions = subscribeFlexibleProductOptions;
type types$7_subscribeFlexibleProductResponse = subscribeFlexibleProductResponse;
type types$7_subscribeLockedProductOptions = subscribeLockedProductOptions;
type types$7_subscribeLockedProductResponse = subscribeLockedProductResponse;
declare namespace types$7 {
  export {
    types$7_getCollateralRecordOptions as getCollateralRecordOptions,
    types$7_getCollateralRecordResponse as getCollateralRecordResponse,
    types$7_getFlexiblePersonalLeftQuotaOptions as getFlexiblePersonalLeftQuotaOptions,
    types$7_getFlexiblePersonalLeftQuotaResponse as getFlexiblePersonalLeftQuotaResponse,
    types$7_getFlexibleProductPositionOptions as getFlexibleProductPositionOptions,
    types$7_getFlexibleProductPositionResponse as getFlexibleProductPositionResponse,
    types$7_getFlexibleRedemptionRecordOptions as getFlexibleRedemptionRecordOptions,
    types$7_getFlexibleRedemptionRecordResponse as getFlexibleRedemptionRecordResponse,
    types$7_getFlexibleRewardsHistoryOptions as getFlexibleRewardsHistoryOptions,
    types$7_getFlexibleRewardsHistoryResponse as getFlexibleRewardsHistoryResponse,
    types$7_getFlexibleSubscriptionPreviewOptions as getFlexibleSubscriptionPreviewOptions,
    types$7_getFlexibleSubscriptionPreviewResponse as getFlexibleSubscriptionPreviewResponse,
    types$7_getFlexibleSubscriptionRecordOptions as getFlexibleSubscriptionRecordOptions,
    types$7_getFlexibleSubscriptionRecordResponse as getFlexibleSubscriptionRecordResponse,
    types$7_getLockedPersonalLeftQuotaOptions as getLockedPersonalLeftQuotaOptions,
    types$7_getLockedPersonalLeftQuotaResponse as getLockedPersonalLeftQuotaResponse,
    types$7_getLockedProductPositionOptions as getLockedProductPositionOptions,
    types$7_getLockedProductPositionResponse as getLockedProductPositionResponse,
    types$7_getLockedRedemptionRecordOptions as getLockedRedemptionRecordOptions,
    types$7_getLockedRedemptionRecordResponse as getLockedRedemptionRecordResponse,
    types$7_getLockedRewardsHistoryOptions as getLockedRewardsHistoryOptions,
    types$7_getLockedRewardsHistoryResponse as getLockedRewardsHistoryResponse,
    types$7_getLockedSubscriptionPreviewOptions as getLockedSubscriptionPreviewOptions,
    types$7_getLockedSubscriptionPreviewResponse as getLockedSubscriptionPreviewResponse,
    types$7_getLockedSubscriptionRecordOptions as getLockedSubscriptionRecordOptions,
    types$7_getLockedSubscriptionRecordResponse as getLockedSubscriptionRecordResponse,
    types$7_getRateHistoryOptions as getRateHistoryOptions,
    types$7_getRateHistoryResponse as getRateHistoryResponse,
    types$7_getSimpleEarnFlexibleProductListOptions as getSimpleEarnFlexibleProductListOptions,
    types$7_getSimpleEarnFlexibleProductListResponse as getSimpleEarnFlexibleProductListResponse,
    types$7_getSimpleEarnLockedProductListOptions as getSimpleEarnLockedProductListOptions,
    types$7_getSimpleEarnLockedProductListResponse as getSimpleEarnLockedProductListResponse,
    types$7_redeemFlexibleProductOptions as redeemFlexibleProductOptions,
    types$7_redeemFlexibleProductResponse as redeemFlexibleProductResponse,
    types$7_redeemLockedProductOptions as redeemLockedProductOptions,
    types$7_redeemLockedProductResponse as redeemLockedProductResponse,
    types$7_setFlexibleAutoSubscribeOptions as setFlexibleAutoSubscribeOptions,
    types$7_setFlexibleAutoSubscribeResponse as setFlexibleAutoSubscribeResponse,
    types$7_setLockedAutoSubscribeOptions as setLockedAutoSubscribeOptions,
    types$7_setLockedAutoSubscribeResponse as setLockedAutoSubscribeResponse,
    types$7_simpleAccountOptions as simpleAccountOptions,
    types$7_simpleAccountResponse as simpleAccountResponse,
    types$7_subscribeFlexibleProductOptions as subscribeFlexibleProductOptions,
    types$7_subscribeFlexibleProductResponse as subscribeFlexibleProductResponse,
    types$7_subscribeLockedProductOptions as subscribeLockedProductOptions,
    types$7_subscribeLockedProductResponse as subscribeLockedProductResponse,
  };
}

interface listenkeyResponse {
    listenKey: string;
}

type types$6_listenkeyResponse = listenkeyResponse;
declare namespace types$6 {
  export {
    types$6_listenkeyResponse as listenkeyResponse,
  };
}

interface createAVirtualSubAccountOptions {
    recvWindow?: number;
}
interface createAVirtualSubAccountResponse {
    email: string;
}
interface getSubAccountListOptions {
    email?: string;
    isFreeze?: IsFreeze;
    page?: number;
    limit?: number;
    recvWindow?: number;
}
interface getSubAccountListResponse {
    subAccounts: getSubAccountListSubAccounts[];
}
interface getSubAccountListSubAccounts {
    email: string;
    isFreeze: boolean;
    createTime: number;
    isManagedSubAccount: boolean;
    isAssetManagementSubAccount: boolean;
}
interface getSubAccountSpotAssetTransferHistoryOptions {
    fromEmail?: string;
    toEmail?: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
}
interface getSubAccountSpotAssetTransferHistoryResponse {
    from: string;
    to: string;
    asset: string;
    qty: number;
    status: SubAccountStatus;
    tranId: number;
    time: number;
}
interface getSubAccountFuturesAssetTransferHistoryOptions {
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
}
interface getSubAccountFuturesAssetTransferHistoryResponse {
    success: boolean;
    futuresType: number;
    transfers: getSubAccountFuturesAssetTransferHistoryTransfers[];
}
interface getSubAccountFuturesAssetTransferHistoryTransfers {
    from: string;
    to: string;
    asset: string;
    qty: string;
    tranId: number;
    time: number;
}
interface subAccountFuturesAssetTransferOptions {
    recvWindow?: number;
}
interface subAccountFuturesAssetTransferResponse {
    success: boolean;
    txnId: string;
}
interface getSubAccountAssetsOptions {
    recvWindow?: number;
}
interface getSubAccountAssetsResponse {
    balances: getSubAccountAssetsBalances[];
}
interface getSubAccountAssetsBalances {
    asset: string;
    free: number;
    locked: number;
}
interface getSubAccountSpotAssetsSummaryOptions {
    email?: string;
    page?: number;
    size?: number;
    recvWindow?: number;
}
interface getSubAccountSpotAssetsSummaryResponse {
    totalCount: number;
    masterAccountTotalAsset: string;
    spotSubUserAssetBtcVoList: getSubAccountSpotAssetsSummarySpotSubUserAssetBtcVoList[];
}
interface getSubAccountSpotAssetsSummarySpotSubUserAssetBtcVoList {
    email: string;
    totalAsset: string;
}
interface getSubAccountDepositAddressOptions {
    network?: string;
    amount?: number;
    recvWindow?: number;
}
interface getSubAccountDepositAddressResponse {
    address: string;
    coin: string;
    tag: string;
    url: string;
}
interface subAccountDepositHistoryOptions {
    coin?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    offset?: number;
    recvWindow?: number;
    txId?: string;
}
interface subAccountDepositHistoryResponse {
    id: string;
    amount: string;
    coin: string;
    network: string;
    status: number;
    address: string;
    addressTag: string;
    txId: string;
    insertTime: number;
    transferType: number;
    confirmTimes: string;
    unlockConfirm: number;
    walletType: number;
}
interface subAccountStatusOnMarginFuturesOptions {
    email?: string;
    recvWindow?: number;
}
interface subAccountStatusOnMarginFuturesResponse {
    email: string;
    isSubUserEnabled: boolean;
    isUserActive: boolean;
    insertTime: number;
    isMarginEnabled: boolean;
    isFutureEnabled: boolean;
    mobile: number;
}
interface enableMarginForSubAccountOptions {
    recvWindow?: number;
}
interface enableMarginForSubAccountResponse {
    email: string;
    isMarginEnabled: boolean;
}
interface detailOnSubAccountMarginAccountOptions {
    recvWindow?: number;
}
interface detailOnSubAccountMarginAccountResponse {
    email: string;
    marginLevel: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    marginTradeCoeffVo: marginTradeCoeffVo;
    marginUserAssetVoList: marginUserAssetVoList[];
}
interface marginTradeCoeffVo {
    forceLiquidationBar: string;
    marginCallBar: string;
    normalBar: string;
}
interface marginUserAssetVoList {
    asset: string;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
}
interface summaryOfSubAccountMarginAccountOptions {
    recvWindow?: number;
}
interface summaryOfSubAccountMarginAccountResponse {
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    subAccountList: summaryOfSubAccountMarginAccountSubAccountlist[];
}
interface summaryOfSubAccountMarginAccountSubAccountlist {
    email: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
}
interface enableFuturesForSubAccountOptions {
    recvWindow?: number;
}
interface enableFuturesForSubAccountResponse {
    email: string;
    isFuturesEnabled: boolean;
}
interface detailOnSubAccountFuturesAccountOptions {
    recvWindow?: number;
}
interface detailOnSubAccountFuturesAccountResponse {
    email: string;
    asset: string;
    assets: detailOnSubAccountFuturesAccountAssets[];
    canDeposit: boolean;
    canTrade: boolean;
    canWithdraw: boolean;
    feeTier: number;
    maxWithdrawAmount: string;
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    updateTime: number;
}
interface detailOnSubAccountFuturesAccountAssets {
    asset: string;
    initialMargin: string;
    maintenanceMargin: string;
    marginBalance: string;
    maxWithdrawAmount: string;
    openOrderInitialMargin: string;
    positionInitialMargin: string;
    unrealizedProfit: string;
    walletBalance: string;
}
interface summaryOfSubAccountFuturesAccountOptions {
    recvWindow?: number;
}
interface summaryOfSubAccountFuturesAccountResponse {
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
    subAccountList: summaryOfSubAccountFuturesAccountSubAccountlist[];
}
interface summaryOfSubAccountFuturesAccountSubAccountlist {
    email: string;
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
}
interface futuresPositionriskOfSubAccountOptions {
    recvWindow?: number;
}
interface futuresPositionriskOfSubAccountResponse {
    entryPrice: string;
    leverage: string;
    maxNotional: string;
    liquidationPrice: string;
    markPrice: string;
    positionAmount: string;
    symbol: string;
    unrealizedProfit: string;
}
interface transferForSubAccountOptions {
    recvWindow?: number;
}
interface transferForSubAccountResponse {
    txnId: string;
}
interface marginTransferForSubAccountOptions {
    recvWindow?: number;
}
interface marginTransferForSubAccountResponse {
    txnId: string;
}
interface transferToSubAccountOfSameMasterOptions {
    recvWindow?: number;
}
interface transferToSubAccountOfSameMasterResponse {
    txnId: string;
}
interface transferToMasterOptions {
    recvWindow?: number;
}
interface transferToMasterResponse {
    txnId: string;
}
interface subAccountTransferHistoryOptions {
    asset?: string;
    type?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface subAccountTransferHistoryResponse {
    counterParty: string;
    email: string;
    type: number;
    asset: string;
    qty: string;
    fromAccountType: FromAccountType;
    toAccountType: ToAccountType;
    status: SubAccountStatus;
    tranId: number;
    time: number;
}
interface universalTransferOptions {
    fromEmail?: string;
    toEmail?: string;
    clientTranId?: string;
    symbol?: string;
    recvWindow?: number;
}
interface universalTransferResponse {
    tranId: number;
    clientTranId: string;
}
interface getUniversalTransferHistoryOptions {
    fromEmail?: string;
    toEmail?: string;
    clientTranId?: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
}
interface getUniversalTransferHistoryResponse {
    result: resultUniversalTransferHistoryResult[];
    totalCount: number;
}
interface resultUniversalTransferHistoryResult {
    tranId: number;
    fromEmail: string;
    toEmail: string;
    asset: string;
    amount: string;
    createTimeStamp: number;
    fromAccountType: FromAccountType;
    toAccountType: ToAccountType;
    status: SubAccountStatus;
    clientTranId: string;
}
interface getDetailOnSubAccountFuturesAccountV2Options {
    recvWindow?: number;
}
interface getDetailOnSubAccountFuturesAccountV2Response {
    futureAccountResp: detailOnSubAccountFuturesAccountV2Futureaccountresp;
}
interface detailOnSubAccountFuturesAccountV2Futureaccountresp {
    email: string;
    assets: detailOnSubAccountFuturesAccountV2Assets[];
    canDeposit: boolean;
    canTrade: boolean;
    canWithdraw: boolean;
    feeTier: number;
    maxWithdrawAmount?: string;
    totalInitialMargin?: string;
    totalMaintenanceMargin?: string;
    totalMarginBalance?: string;
    totalOpenOrderInitialMargin?: string;
    totalPositionInitialMargin?: string;
    totalUnrealizedProfit?: string;
    totalWalletBalance?: string;
    updateTime: number;
}
interface detailOnSubAccountFuturesAccountV2Assets {
    asset: string;
    initialMargin: string;
    maintenanceMargin: string;
    marginBalance: string;
    maxWithdrawAmount: string;
    openOrderInitialMargin: string;
    positionInitialMargin: string;
    unrealizedProfit: string;
    walletBalance: string;
}
interface summaryOfSubAccountFuturesAccountV2Options {
    page?: number;
    limit?: number;
    recvWindow?: number;
}
interface summaryOfSubAccountFuturesAccountV2Response {
    futureAccountSummaryResp: summaryOfSubAccountFuturesAccountV2Futureaccountsummaryresp;
}
interface summaryOfSubAccountFuturesAccountV2Futureaccountsummaryresp {
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
    subAccountList: summaryOfSubAccountFuturesAccountV2Subaccountlist[];
}
interface summaryOfSubAccountFuturesAccountV2Subaccountlist {
    email: string;
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
}
interface futuresPositionriskOfSubAccountV2Options {
    recvWindow?: number;
}
interface futuresPositionriskOfSubAccountV2Response {
    futurePositionRiskVos: futurePositionRiskVos[];
}
interface futurePositionRiskVos {
    entryPrice: string;
    leverage: string;
    maxNotional: string;
    liquidationPrice: string;
    markPrice: string;
    positionAmount: string;
    symbol: string;
    unrealizedProfit: string;
}
interface enableLeverageTokenForSubAccountOptions {
    recvWindow?: number;
}
interface enableLeverageTokenForSubAccountResponse {
    email: string;
    enableBlvt: boolean;
}
interface getIpRestrictionForASubAccountApiKeyOptions {
    recvWindow?: number;
}
interface getIpRestrictionForASubAccountApiKeyResponse {
    ipRestrict: string;
    ipList: string[];
    updateTime: number;
    apiKey: string;
}
interface deleteIpListForASubAccountApiKeyOptions {
    ipAddress?: string;
    thirdPartyName?: string;
    recvWindow?: number;
}
interface deleteIpListForASubAccountApiKeyResponse {
    ipRestrict: string;
    ipList: string[];
    updateTime: number;
    apiKey: string;
}
interface updateIpRestrictionForSubAccountApiKeyOptions {
    ipAddress?: string;
    recvWindow?: number;
}
interface updateIpRestrictionForSubAccountApiKeyResponse {
    status: string;
    ipList: string[];
    updateTime: number;
    apiKey: string;
}
interface depositAssetsIntoTheManagedSubAccountOptions {
    recvWindow?: number;
}
interface depositAssetsIntoTheManagedSubAccountResponse {
    tranId: number;
}
interface getManagedSubAccountAssetDetailsOptions {
    recvWindow?: number;
}
interface getManagedSubAccountAssetDetailsResponse {
    coin: string;
    name: string;
    totalBalance: string;
    availableBalance: string;
    inOrder: string;
    btcValue: string;
}
interface withdrawlAssetsFromTheManagedSubAccountOptions {
    transferDate?: number;
    recvWindow?: number;
}
interface withdrawlAssetsFromTheManagedSubAccountResponse {
    tranId: number;
}
interface getManagedSubAccountSnapshotOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface getManagedSubAccountSnapshotResponse {
    code: number;
    msg: string;
    snapshotVos: snapshotVos[];
}
interface snapshotVos {
    data: managedSubAccountSnapshotData;
    type: string;
    updateTime: number;
}
interface managedSubAccountSnapshotData {
    balances: object;
    totalAssetOfBtc: string;
}
interface getManagedSubAccountTransferLogOptions {
    transfers?: string;
    transferFunctionAccountType?: SubAccountTransferLog;
}
interface getManagedSubAccountTransferLogResponse {
    managerSubTransferHistoryVos: managerSubTransferHistoryVos[];
    count: number;
}
interface managerSubTransferHistoryVos {
    fromEmail: string;
    fromAccountType: FromAccountType;
    toEmail: string;
    toAccountType: ToAccountType;
    asset: string;
    amount: string;
    scheduledData: number;
    createTime: number;
    status: SubAccountStatus;
    tranId: number;
}
interface getManagedSubAccountTransferLogForTradeParentOptions {
    transfers?: string;
    transferFunctionAccountType?: SubAccountTransferLog;
}
interface getManagedSubAccountTransferLogForTradeParentResponse {
    managerSubTransferHistoryVos: managerSubTransferHistoryVos[];
    count: number;
}
interface getManagedSubAccountFuturesAssetDetailsResponse {
    code: string;
    message: string;
    snapshotVos: futuresAssetDetailsSnapshotVos[];
}
interface futuresAssetDetailsSnapshotVos {
    data: futuresAssetDetailsSnapshotData;
    type: string;
    updateTime: number;
}
interface futuresAssetDetailsSnapshotData {
    assets: futuresAssetDetailsSnapshotDataAssets[];
    position: futuresAssetDetailsSnapshotDataPosition[];
}
interface futuresAssetDetailsSnapshotDataAssets {
    asset: string;
    marginBalance: number;
    walletBalance: number;
}
interface futuresAssetDetailsSnapshotDataPosition {
    symbol: string;
    entryPrice: number;
    markPrice: number;
    positionAmt: number;
}
interface getManagedSubAccountMarginAssetDetailsResponse {
    margin: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    userAssets: userAssets[];
}
interface userAssets {
    asset: string;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
}
interface getSubAccountAssetsForMasterAccountOptions {
    recvWindow?: number;
}
interface getSubAccountAssetsForMasterAccountResponse {
    balances: getSubAccountAssetsForMasterAccountBalances[];
}
interface getSubAccountAssetsForMasterAccountBalances {
    asset: string;
    free: number;
    locked: number;
}
interface getManagedSubAccountListOptions {
    email?: string;
    page?: number;
    limit?: number;
    recvWindow?: number;
}
interface getManagedSubAccountListResponse {
    total: number;
    managerSubUserInfoVoList: managerSubUserInfoVoList[];
}
interface managerSubUserInfoVoList {
    rootUserId: number;
    managersubUserId: number;
    bindParentUserId: number;
    email: string;
    insertTimeStamp: number;
    bindParentEmail: string;
    isSubUserEnabled: boolean;
    isUserActive: boolean;
    isMarginEnabled: boolean;
    isFutureEnabled: boolean;
    isSignedLVTRiskAgreement: boolean;
}
interface getSubAccountTransactionStatisticsForMasterAccountOptions {
    recvWindow?: number;
}
interface getSubAccountTransactionStatisticsForMasterAccountResponse {
    recent30BtcTotal: string;
    recent30BtcFuturesTotal: string;
    recent30BtcMarginTotal: string;
    recent30BusdTotal: string;
    recent30BusdFuturesTotal: string;
    recent30BusdMarginTotal: string;
    tradeInfoVos: tradeInfoVos[];
}
interface tradeInfoVos {
    userId: number;
    btc: number;
    btcFutures: number;
    btcMargin: number;
    busd: number;
    busdFutures: number;
    busdMargin: number;
    date: number;
}
interface getManagedSubAccountDepositAddressOptions {
    network?: number;
    recvWindow?: number;
}
interface getManagedSubAccountDepositAddressResponse {
    coin: string;
    address: string;
    tag: string;
    url: string;
}
interface enableOptionsForSubAccountOptions {
    recvWindow?: number;
}
interface enableOptionsForSubAccountResponse {
    email: string;
    isEOptionsEnabled: boolean;
}
interface getManagedSubAccountTransferLogForTradeSubOptions {
    transfers?: string;
    transferFunctionAccountType?: SubAccountTransferLog;
    recvWindow?: number;
}
interface getManagedSubAccountTransferLogForTradeSubResponse {
    managerSubTransferHistoryVos: managerSubTransferHistoryVos[];
    count: number;
}

type types$5_createAVirtualSubAccountOptions = createAVirtualSubAccountOptions;
type types$5_createAVirtualSubAccountResponse = createAVirtualSubAccountResponse;
type types$5_deleteIpListForASubAccountApiKeyOptions = deleteIpListForASubAccountApiKeyOptions;
type types$5_deleteIpListForASubAccountApiKeyResponse = deleteIpListForASubAccountApiKeyResponse;
type types$5_depositAssetsIntoTheManagedSubAccountOptions = depositAssetsIntoTheManagedSubAccountOptions;
type types$5_depositAssetsIntoTheManagedSubAccountResponse = depositAssetsIntoTheManagedSubAccountResponse;
type types$5_detailOnSubAccountFuturesAccountOptions = detailOnSubAccountFuturesAccountOptions;
type types$5_detailOnSubAccountFuturesAccountResponse = detailOnSubAccountFuturesAccountResponse;
type types$5_detailOnSubAccountMarginAccountOptions = detailOnSubAccountMarginAccountOptions;
type types$5_detailOnSubAccountMarginAccountResponse = detailOnSubAccountMarginAccountResponse;
type types$5_enableFuturesForSubAccountOptions = enableFuturesForSubAccountOptions;
type types$5_enableFuturesForSubAccountResponse = enableFuturesForSubAccountResponse;
type types$5_enableLeverageTokenForSubAccountOptions = enableLeverageTokenForSubAccountOptions;
type types$5_enableLeverageTokenForSubAccountResponse = enableLeverageTokenForSubAccountResponse;
type types$5_enableMarginForSubAccountOptions = enableMarginForSubAccountOptions;
type types$5_enableMarginForSubAccountResponse = enableMarginForSubAccountResponse;
type types$5_enableOptionsForSubAccountOptions = enableOptionsForSubAccountOptions;
type types$5_enableOptionsForSubAccountResponse = enableOptionsForSubAccountResponse;
type types$5_futuresPositionriskOfSubAccountOptions = futuresPositionriskOfSubAccountOptions;
type types$5_futuresPositionriskOfSubAccountResponse = futuresPositionriskOfSubAccountResponse;
type types$5_futuresPositionriskOfSubAccountV2Options = futuresPositionriskOfSubAccountV2Options;
type types$5_futuresPositionriskOfSubAccountV2Response = futuresPositionriskOfSubAccountV2Response;
type types$5_getDetailOnSubAccountFuturesAccountV2Options = getDetailOnSubAccountFuturesAccountV2Options;
type types$5_getDetailOnSubAccountFuturesAccountV2Response = getDetailOnSubAccountFuturesAccountV2Response;
type types$5_getIpRestrictionForASubAccountApiKeyOptions = getIpRestrictionForASubAccountApiKeyOptions;
type types$5_getIpRestrictionForASubAccountApiKeyResponse = getIpRestrictionForASubAccountApiKeyResponse;
type types$5_getManagedSubAccountAssetDetailsOptions = getManagedSubAccountAssetDetailsOptions;
type types$5_getManagedSubAccountAssetDetailsResponse = getManagedSubAccountAssetDetailsResponse;
type types$5_getManagedSubAccountDepositAddressOptions = getManagedSubAccountDepositAddressOptions;
type types$5_getManagedSubAccountDepositAddressResponse = getManagedSubAccountDepositAddressResponse;
type types$5_getManagedSubAccountFuturesAssetDetailsResponse = getManagedSubAccountFuturesAssetDetailsResponse;
type types$5_getManagedSubAccountListOptions = getManagedSubAccountListOptions;
type types$5_getManagedSubAccountListResponse = getManagedSubAccountListResponse;
type types$5_getManagedSubAccountMarginAssetDetailsResponse = getManagedSubAccountMarginAssetDetailsResponse;
type types$5_getManagedSubAccountSnapshotOptions = getManagedSubAccountSnapshotOptions;
type types$5_getManagedSubAccountSnapshotResponse = getManagedSubAccountSnapshotResponse;
type types$5_getManagedSubAccountTransferLogForTradeParentOptions = getManagedSubAccountTransferLogForTradeParentOptions;
type types$5_getManagedSubAccountTransferLogForTradeParentResponse = getManagedSubAccountTransferLogForTradeParentResponse;
type types$5_getManagedSubAccountTransferLogForTradeSubOptions = getManagedSubAccountTransferLogForTradeSubOptions;
type types$5_getManagedSubAccountTransferLogForTradeSubResponse = getManagedSubAccountTransferLogForTradeSubResponse;
type types$5_getManagedSubAccountTransferLogOptions = getManagedSubAccountTransferLogOptions;
type types$5_getManagedSubAccountTransferLogResponse = getManagedSubAccountTransferLogResponse;
type types$5_getSubAccountAssetsForMasterAccountOptions = getSubAccountAssetsForMasterAccountOptions;
type types$5_getSubAccountAssetsForMasterAccountResponse = getSubAccountAssetsForMasterAccountResponse;
type types$5_getSubAccountAssetsOptions = getSubAccountAssetsOptions;
type types$5_getSubAccountAssetsResponse = getSubAccountAssetsResponse;
type types$5_getSubAccountDepositAddressOptions = getSubAccountDepositAddressOptions;
type types$5_getSubAccountDepositAddressResponse = getSubAccountDepositAddressResponse;
type types$5_getSubAccountFuturesAssetTransferHistoryOptions = getSubAccountFuturesAssetTransferHistoryOptions;
type types$5_getSubAccountFuturesAssetTransferHistoryResponse = getSubAccountFuturesAssetTransferHistoryResponse;
type types$5_getSubAccountListOptions = getSubAccountListOptions;
type types$5_getSubAccountListResponse = getSubAccountListResponse;
type types$5_getSubAccountSpotAssetTransferHistoryOptions = getSubAccountSpotAssetTransferHistoryOptions;
type types$5_getSubAccountSpotAssetTransferHistoryResponse = getSubAccountSpotAssetTransferHistoryResponse;
type types$5_getSubAccountSpotAssetsSummaryOptions = getSubAccountSpotAssetsSummaryOptions;
type types$5_getSubAccountSpotAssetsSummaryResponse = getSubAccountSpotAssetsSummaryResponse;
type types$5_getSubAccountTransactionStatisticsForMasterAccountOptions = getSubAccountTransactionStatisticsForMasterAccountOptions;
type types$5_getSubAccountTransactionStatisticsForMasterAccountResponse = getSubAccountTransactionStatisticsForMasterAccountResponse;
type types$5_getUniversalTransferHistoryOptions = getUniversalTransferHistoryOptions;
type types$5_getUniversalTransferHistoryResponse = getUniversalTransferHistoryResponse;
type types$5_marginTransferForSubAccountOptions = marginTransferForSubAccountOptions;
type types$5_marginTransferForSubAccountResponse = marginTransferForSubAccountResponse;
type types$5_subAccountDepositHistoryOptions = subAccountDepositHistoryOptions;
type types$5_subAccountDepositHistoryResponse = subAccountDepositHistoryResponse;
type types$5_subAccountFuturesAssetTransferOptions = subAccountFuturesAssetTransferOptions;
type types$5_subAccountFuturesAssetTransferResponse = subAccountFuturesAssetTransferResponse;
type types$5_subAccountStatusOnMarginFuturesOptions = subAccountStatusOnMarginFuturesOptions;
type types$5_subAccountStatusOnMarginFuturesResponse = subAccountStatusOnMarginFuturesResponse;
type types$5_subAccountTransferHistoryOptions = subAccountTransferHistoryOptions;
type types$5_subAccountTransferHistoryResponse = subAccountTransferHistoryResponse;
type types$5_summaryOfSubAccountFuturesAccountOptions = summaryOfSubAccountFuturesAccountOptions;
type types$5_summaryOfSubAccountFuturesAccountResponse = summaryOfSubAccountFuturesAccountResponse;
type types$5_summaryOfSubAccountFuturesAccountV2Options = summaryOfSubAccountFuturesAccountV2Options;
type types$5_summaryOfSubAccountFuturesAccountV2Response = summaryOfSubAccountFuturesAccountV2Response;
type types$5_summaryOfSubAccountMarginAccountOptions = summaryOfSubAccountMarginAccountOptions;
type types$5_summaryOfSubAccountMarginAccountResponse = summaryOfSubAccountMarginAccountResponse;
type types$5_transferForSubAccountOptions = transferForSubAccountOptions;
type types$5_transferForSubAccountResponse = transferForSubAccountResponse;
type types$5_transferToMasterOptions = transferToMasterOptions;
type types$5_transferToMasterResponse = transferToMasterResponse;
type types$5_transferToSubAccountOfSameMasterOptions = transferToSubAccountOfSameMasterOptions;
type types$5_transferToSubAccountOfSameMasterResponse = transferToSubAccountOfSameMasterResponse;
type types$5_universalTransferOptions = universalTransferOptions;
type types$5_universalTransferResponse = universalTransferResponse;
type types$5_updateIpRestrictionForSubAccountApiKeyOptions = updateIpRestrictionForSubAccountApiKeyOptions;
type types$5_updateIpRestrictionForSubAccountApiKeyResponse = updateIpRestrictionForSubAccountApiKeyResponse;
type types$5_withdrawlAssetsFromTheManagedSubAccountOptions = withdrawlAssetsFromTheManagedSubAccountOptions;
type types$5_withdrawlAssetsFromTheManagedSubAccountResponse = withdrawlAssetsFromTheManagedSubAccountResponse;
declare namespace types$5 {
  export {
    types$5_createAVirtualSubAccountOptions as createAVirtualSubAccountOptions,
    types$5_createAVirtualSubAccountResponse as createAVirtualSubAccountResponse,
    types$5_deleteIpListForASubAccountApiKeyOptions as deleteIpListForASubAccountApiKeyOptions,
    types$5_deleteIpListForASubAccountApiKeyResponse as deleteIpListForASubAccountApiKeyResponse,
    types$5_depositAssetsIntoTheManagedSubAccountOptions as depositAssetsIntoTheManagedSubAccountOptions,
    types$5_depositAssetsIntoTheManagedSubAccountResponse as depositAssetsIntoTheManagedSubAccountResponse,
    types$5_detailOnSubAccountFuturesAccountOptions as detailOnSubAccountFuturesAccountOptions,
    types$5_detailOnSubAccountFuturesAccountResponse as detailOnSubAccountFuturesAccountResponse,
    types$5_detailOnSubAccountMarginAccountOptions as detailOnSubAccountMarginAccountOptions,
    types$5_detailOnSubAccountMarginAccountResponse as detailOnSubAccountMarginAccountResponse,
    types$5_enableFuturesForSubAccountOptions as enableFuturesForSubAccountOptions,
    types$5_enableFuturesForSubAccountResponse as enableFuturesForSubAccountResponse,
    types$5_enableLeverageTokenForSubAccountOptions as enableLeverageTokenForSubAccountOptions,
    types$5_enableLeverageTokenForSubAccountResponse as enableLeverageTokenForSubAccountResponse,
    types$5_enableMarginForSubAccountOptions as enableMarginForSubAccountOptions,
    types$5_enableMarginForSubAccountResponse as enableMarginForSubAccountResponse,
    types$5_enableOptionsForSubAccountOptions as enableOptionsForSubAccountOptions,
    types$5_enableOptionsForSubAccountResponse as enableOptionsForSubAccountResponse,
    types$5_futuresPositionriskOfSubAccountOptions as futuresPositionriskOfSubAccountOptions,
    types$5_futuresPositionriskOfSubAccountResponse as futuresPositionriskOfSubAccountResponse,
    types$5_futuresPositionriskOfSubAccountV2Options as futuresPositionriskOfSubAccountV2Options,
    types$5_futuresPositionriskOfSubAccountV2Response as futuresPositionriskOfSubAccountV2Response,
    types$5_getDetailOnSubAccountFuturesAccountV2Options as getDetailOnSubAccountFuturesAccountV2Options,
    types$5_getDetailOnSubAccountFuturesAccountV2Response as getDetailOnSubAccountFuturesAccountV2Response,
    types$5_getIpRestrictionForASubAccountApiKeyOptions as getIpRestrictionForASubAccountApiKeyOptions,
    types$5_getIpRestrictionForASubAccountApiKeyResponse as getIpRestrictionForASubAccountApiKeyResponse,
    types$5_getManagedSubAccountAssetDetailsOptions as getManagedSubAccountAssetDetailsOptions,
    types$5_getManagedSubAccountAssetDetailsResponse as getManagedSubAccountAssetDetailsResponse,
    types$5_getManagedSubAccountDepositAddressOptions as getManagedSubAccountDepositAddressOptions,
    types$5_getManagedSubAccountDepositAddressResponse as getManagedSubAccountDepositAddressResponse,
    types$5_getManagedSubAccountFuturesAssetDetailsResponse as getManagedSubAccountFuturesAssetDetailsResponse,
    types$5_getManagedSubAccountListOptions as getManagedSubAccountListOptions,
    types$5_getManagedSubAccountListResponse as getManagedSubAccountListResponse,
    types$5_getManagedSubAccountMarginAssetDetailsResponse as getManagedSubAccountMarginAssetDetailsResponse,
    types$5_getManagedSubAccountSnapshotOptions as getManagedSubAccountSnapshotOptions,
    types$5_getManagedSubAccountSnapshotResponse as getManagedSubAccountSnapshotResponse,
    types$5_getManagedSubAccountTransferLogForTradeParentOptions as getManagedSubAccountTransferLogForTradeParentOptions,
    types$5_getManagedSubAccountTransferLogForTradeParentResponse as getManagedSubAccountTransferLogForTradeParentResponse,
    types$5_getManagedSubAccountTransferLogForTradeSubOptions as getManagedSubAccountTransferLogForTradeSubOptions,
    types$5_getManagedSubAccountTransferLogForTradeSubResponse as getManagedSubAccountTransferLogForTradeSubResponse,
    types$5_getManagedSubAccountTransferLogOptions as getManagedSubAccountTransferLogOptions,
    types$5_getManagedSubAccountTransferLogResponse as getManagedSubAccountTransferLogResponse,
    types$5_getSubAccountAssetsForMasterAccountOptions as getSubAccountAssetsForMasterAccountOptions,
    types$5_getSubAccountAssetsForMasterAccountResponse as getSubAccountAssetsForMasterAccountResponse,
    types$5_getSubAccountAssetsOptions as getSubAccountAssetsOptions,
    types$5_getSubAccountAssetsResponse as getSubAccountAssetsResponse,
    types$5_getSubAccountDepositAddressOptions as getSubAccountDepositAddressOptions,
    types$5_getSubAccountDepositAddressResponse as getSubAccountDepositAddressResponse,
    types$5_getSubAccountFuturesAssetTransferHistoryOptions as getSubAccountFuturesAssetTransferHistoryOptions,
    types$5_getSubAccountFuturesAssetTransferHistoryResponse as getSubAccountFuturesAssetTransferHistoryResponse,
    types$5_getSubAccountListOptions as getSubAccountListOptions,
    types$5_getSubAccountListResponse as getSubAccountListResponse,
    types$5_getSubAccountSpotAssetTransferHistoryOptions as getSubAccountSpotAssetTransferHistoryOptions,
    types$5_getSubAccountSpotAssetTransferHistoryResponse as getSubAccountSpotAssetTransferHistoryResponse,
    types$5_getSubAccountSpotAssetsSummaryOptions as getSubAccountSpotAssetsSummaryOptions,
    types$5_getSubAccountSpotAssetsSummaryResponse as getSubAccountSpotAssetsSummaryResponse,
    types$5_getSubAccountTransactionStatisticsForMasterAccountOptions as getSubAccountTransactionStatisticsForMasterAccountOptions,
    types$5_getSubAccountTransactionStatisticsForMasterAccountResponse as getSubAccountTransactionStatisticsForMasterAccountResponse,
    types$5_getUniversalTransferHistoryOptions as getUniversalTransferHistoryOptions,
    types$5_getUniversalTransferHistoryResponse as getUniversalTransferHistoryResponse,
    types$5_marginTransferForSubAccountOptions as marginTransferForSubAccountOptions,
    types$5_marginTransferForSubAccountResponse as marginTransferForSubAccountResponse,
    types$5_subAccountDepositHistoryOptions as subAccountDepositHistoryOptions,
    types$5_subAccountDepositHistoryResponse as subAccountDepositHistoryResponse,
    types$5_subAccountFuturesAssetTransferOptions as subAccountFuturesAssetTransferOptions,
    types$5_subAccountFuturesAssetTransferResponse as subAccountFuturesAssetTransferResponse,
    types$5_subAccountStatusOnMarginFuturesOptions as subAccountStatusOnMarginFuturesOptions,
    types$5_subAccountStatusOnMarginFuturesResponse as subAccountStatusOnMarginFuturesResponse,
    types$5_subAccountTransferHistoryOptions as subAccountTransferHistoryOptions,
    types$5_subAccountTransferHistoryResponse as subAccountTransferHistoryResponse,
    types$5_summaryOfSubAccountFuturesAccountOptions as summaryOfSubAccountFuturesAccountOptions,
    types$5_summaryOfSubAccountFuturesAccountResponse as summaryOfSubAccountFuturesAccountResponse,
    types$5_summaryOfSubAccountFuturesAccountV2Options as summaryOfSubAccountFuturesAccountV2Options,
    types$5_summaryOfSubAccountFuturesAccountV2Response as summaryOfSubAccountFuturesAccountV2Response,
    types$5_summaryOfSubAccountMarginAccountOptions as summaryOfSubAccountMarginAccountOptions,
    types$5_summaryOfSubAccountMarginAccountResponse as summaryOfSubAccountMarginAccountResponse,
    types$5_transferForSubAccountOptions as transferForSubAccountOptions,
    types$5_transferForSubAccountResponse as transferForSubAccountResponse,
    types$5_transferToMasterOptions as transferToMasterOptions,
    types$5_transferToMasterResponse as transferToMasterResponse,
    types$5_transferToSubAccountOfSameMasterOptions as transferToSubAccountOfSameMasterOptions,
    types$5_transferToSubAccountOfSameMasterResponse as transferToSubAccountOfSameMasterResponse,
    types$5_universalTransferOptions as universalTransferOptions,
    types$5_universalTransferResponse as universalTransferResponse,
    types$5_updateIpRestrictionForSubAccountApiKeyOptions as updateIpRestrictionForSubAccountApiKeyOptions,
    types$5_updateIpRestrictionForSubAccountApiKeyResponse as updateIpRestrictionForSubAccountApiKeyResponse,
    types$5_withdrawlAssetsFromTheManagedSubAccountOptions as withdrawlAssetsFromTheManagedSubAccountOptions,
    types$5_withdrawlAssetsFromTheManagedSubAccountResponse as withdrawlAssetsFromTheManagedSubAccountResponse,
  };
}

interface testNewOrderOptions$1 {
    timeInForce?: TimeInForce;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
    computeCommissionRates?: boolean;
}
interface testNewOrderResponse {
    standardCommissionForOrder: commissionParams;
    taxCommissionForOrder: commissionParams;
    discount: discount;
}
interface commissionParams {
    maker: string;
    taker: string;
}
interface discount {
    enabledForAccount: boolean;
    enabledForSymbol: boolean;
    discountAsset: string;
    discount: string;
}
interface getOrderOptions$1 {
    orderId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}
interface getOrderResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: number;
    isWorking: boolean;
    workingTime: number;
    origQuoteOrderQty: string;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}
interface newOrderOptions$1 {
    timeInForce?: TimeInForce;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}
interface newOrderResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price?: string;
    origQty?: string;
    executedQty?: string;
    cummulativeQuoteQty?: string;
    status?: OrderStatus;
    timeInForce?: TimeInForce;
    type?: OrderType;
    side?: Side;
    workingTime?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    fills?: fill[] | [];
}
interface fill {
    price: string;
    qty: string;
    commission: string;
    commissionAsset: string;
    tradeId: number;
}
interface cancelOrderOptions$1 {
    orderId?: number;
    origClientOrderId?: string;
    newClientOrderId?: string;
    cancelRestrictions?: 'ONLY_NEW' | 'ONLY_PARTIALLY_FILLED';
    recvWindow?: number;
}
interface cancelOrderResponse {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    selfTradePreventionMode: SelfTradePreventionMode | '';
}
interface cancelAnExistingOrderAndSendANewOrderOptions {
    timeInForce?: TimeInForce;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    cancelNewClientOrderId?: string;
    cancelOrigClientOrderId?: string;
    cancelOrderId?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    recvWindow?: number;
}
interface cancelAnExistingOrderAndSendANewOrderResponse {
    cancelResult: CancelResult;
    newOrderResult: NewOrderResult;
    cancelResponse: cancelAnExistingOrderAndSendANewOrderCancelresponse;
    newOrderResponse: newOrderResponse;
}
interface cancelAnExistingOrderAndSendANewOrderCancelresponse {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    selfTradePreventionMode: SelfTradePreventionMode | '';
}
interface currentOpenOrdersOptions {
    symbol?: string;
    recvWindow?: number;
}
interface currentOpenOrdersResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: number;
    isWorking: boolean;
    workingTime: number;
    origQuoteOrderQty: string;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}
interface cancelAllOpenOrdersOnASymbolOptions {
    recvWindow?: number;
}
interface cancelAllOpenOrdersOnASymbolResponse {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    selfTradePreventionMode: SelfTradePreventionMode | '';
}
interface allOrdersOptions {
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface allOrdersResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: number;
    isWorking: boolean;
    workingTime: number;
    origQuoteOrderQty: string;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}
interface newOcoOptions {
    listClientOrderId?: string;
    limitClientOrderId?: string;
    limitStrategyId?: number;
    limitStrategyType?: number;
    limitIcebergQty?: number;
    trailingDelta?: number;
    stopClientOrderId?: string;
    stopStrategyId?: number;
    stopStrategyType?: number;
    stopLimitPrice?: number;
    stopIcebergQty?: number;
    stopLimitTimeInForce?: StopLimitTimeInForce;
    newOrderRespType?: NewOrderRespType;
    recvWindow?: number;
}
interface newOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: newOcoOrders[];
    orderReports: newOcoOrderReports[];
}
interface newOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface newOcoOrderReports {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice: string;
    workingTime: string | number;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}
interface getOcoOptions {
    orderListId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}
interface getOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: getOcoOrders[];
}
interface getOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface cancelOcoOptions {
    orderListId?: number;
    listClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
}
interface cancelOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: cancelOcoOrders[];
    orderReports: cancelOcoOrderReports[];
}
interface cancelOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface cancelOcoOrderReports {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice: string;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}
interface getAllOcoOptions {
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface getAllOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: getAllOcoOrders[];
}
interface getAllOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface getOpenOcoOptions {
    recvWindow?: number;
}
interface getOpenOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: getOpenOcoOrders[];
}
interface getOpenOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}
interface accountInformationOptions {
    recvWindow?: number;
}
interface accountInformationResponse {
    makerCommission: number;
    takerCommission: number;
    buyerCommission: number;
    sellerCommission: number;
    commissionRates: accountInformationCommissionrates;
    canTrade: boolean;
    canWithdraw: boolean;
    canDeposit: boolean;
    brokered: boolean;
    requireSelfTradePrevention: boolean;
    preventSor: boolean;
    updateTime: number;
    accountType: AccountSnapshotType;
    balances: accountInformationBalances[];
    permissions: Permissions[];
    uid: number;
}
interface accountInformationCommissionrates {
    maker: string;
    taker: string;
    buyer: string;
    seller: string;
}
interface accountInformationBalances {
    asset: string;
    free: string;
    locked: string;
}
interface accountTradeListOptions extends getAllOcoOptions {
    orderId?: number;
}
interface accountTradeListResponse {
    symbol: string;
    id: number;
    orderId: number;
    orderListId: number;
    price: string;
    qty: string;
    quoteQty: string;
    commission: string;
    commissionAsset: string;
    time: number;
    isBuyer: boolean;
    isMaker: boolean;
    isBestMatch: boolean;
}
interface getCurrentOrderCountUsageOptions {
    recvWindow?: number;
}
interface getCurrentOrderCountUsageResponse {
    rateLimitType: string;
    interval: string;
    intervalNum: number;
    limit: number;
    count: number;
}
interface testNewOrderSOROptions {
    timeInForce?: TimeInForce;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
    computeCommissionRates?: boolean;
}
interface newOrderSOROptions$1 {
    timeInForce?: TimeInForce;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}
interface newOrderSORResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: Side;
    workingTime: number;
    fills: fill[] | [];
    workingFloor: WorkingFloor;
    selfTradePreventionMode: SelfTradePreventionMode;
    usedSor: boolean;
}
interface getPreventedMatchesOptions {
    preventedMatchId?: number;
    orderId?: number;
    fromPreventedMatchId?: number;
    limit?: number;
    recvWindow?: number;
}
interface getPreventedMatchesResponse {
    symbol: string;
    preventedMatchId: number;
    takerOrderId: number;
    makerOrderId: number;
    tradeGroupId: number;
    selfTradePreventionMode: SelfTradePreventionMode;
    price: string;
    makerPreventedQuantity: string;
    transactTime: number;
}
interface getAllocationsOptions {
    startTime?: number;
    endTime?: number;
    fromAllocationId?: number;
    limit?: number;
    orderId?: number;
    recvWindow?: number;
}
interface getAllocationsResponse {
    symbol: string;
    allocationId: number;
    allocationType: string;
    orderId: number;
    orderListId: number;
    price: string;
    qty: string;
    quoteQty: string;
    commission: string;
    commissionAsset: string;
    time: number;
    isBuyer: boolean;
    isMaker: boolean;
    isAllocator: boolean;
}
interface getCommissionRatesResponse {
    symbol: string;
    standardCommission: accountInformationCommissionrates;
    taxCommission: accountInformationCommissionrates;
    discount: discount;
}

type types$4_accountInformationOptions = accountInformationOptions;
type types$4_accountInformationResponse = accountInformationResponse;
type types$4_accountTradeListOptions = accountTradeListOptions;
type types$4_accountTradeListResponse = accountTradeListResponse;
type types$4_allOrdersOptions = allOrdersOptions;
type types$4_allOrdersResponse = allOrdersResponse;
type types$4_cancelAllOpenOrdersOnASymbolOptions = cancelAllOpenOrdersOnASymbolOptions;
type types$4_cancelAllOpenOrdersOnASymbolResponse = cancelAllOpenOrdersOnASymbolResponse;
type types$4_cancelAnExistingOrderAndSendANewOrderCancelresponse = cancelAnExistingOrderAndSendANewOrderCancelresponse;
type types$4_cancelAnExistingOrderAndSendANewOrderOptions = cancelAnExistingOrderAndSendANewOrderOptions;
type types$4_cancelAnExistingOrderAndSendANewOrderResponse = cancelAnExistingOrderAndSendANewOrderResponse;
type types$4_cancelOcoOptions = cancelOcoOptions;
type types$4_cancelOcoOrderReports = cancelOcoOrderReports;
type types$4_cancelOcoResponse = cancelOcoResponse;
type types$4_cancelOrderResponse = cancelOrderResponse;
type types$4_commissionParams = commissionParams;
type types$4_currentOpenOrdersOptions = currentOpenOrdersOptions;
type types$4_currentOpenOrdersResponse = currentOpenOrdersResponse;
type types$4_discount = discount;
type types$4_getAllOcoOptions = getAllOcoOptions;
type types$4_getAllOcoResponse = getAllOcoResponse;
type types$4_getAllocationsOptions = getAllocationsOptions;
type types$4_getAllocationsResponse = getAllocationsResponse;
type types$4_getCommissionRatesResponse = getCommissionRatesResponse;
type types$4_getCurrentOrderCountUsageOptions = getCurrentOrderCountUsageOptions;
type types$4_getCurrentOrderCountUsageResponse = getCurrentOrderCountUsageResponse;
type types$4_getOcoOptions = getOcoOptions;
type types$4_getOcoResponse = getOcoResponse;
type types$4_getOpenOcoOptions = getOpenOcoOptions;
type types$4_getOpenOcoResponse = getOpenOcoResponse;
type types$4_getOrderResponse = getOrderResponse;
type types$4_getPreventedMatchesOptions = getPreventedMatchesOptions;
type types$4_getPreventedMatchesResponse = getPreventedMatchesResponse;
type types$4_newOcoOptions = newOcoOptions;
type types$4_newOcoOrderReports = newOcoOrderReports;
type types$4_newOcoResponse = newOcoResponse;
type types$4_newOrderResponse = newOrderResponse;
type types$4_newOrderSORResponse = newOrderSORResponse;
type types$4_testNewOrderResponse = testNewOrderResponse;
type types$4_testNewOrderSOROptions = testNewOrderSOROptions;
declare namespace types$4 {
  export {
    types$4_accountInformationOptions as accountInformationOptions,
    types$4_accountInformationResponse as accountInformationResponse,
    types$4_accountTradeListOptions as accountTradeListOptions,
    types$4_accountTradeListResponse as accountTradeListResponse,
    types$4_allOrdersOptions as allOrdersOptions,
    types$4_allOrdersResponse as allOrdersResponse,
    types$4_cancelAllOpenOrdersOnASymbolOptions as cancelAllOpenOrdersOnASymbolOptions,
    types$4_cancelAllOpenOrdersOnASymbolResponse as cancelAllOpenOrdersOnASymbolResponse,
    types$4_cancelAnExistingOrderAndSendANewOrderCancelresponse as cancelAnExistingOrderAndSendANewOrderCancelresponse,
    types$4_cancelAnExistingOrderAndSendANewOrderOptions as cancelAnExistingOrderAndSendANewOrderOptions,
    types$4_cancelAnExistingOrderAndSendANewOrderResponse as cancelAnExistingOrderAndSendANewOrderResponse,
    types$4_cancelOcoOptions as cancelOcoOptions,
    types$4_cancelOcoOrderReports as cancelOcoOrderReports,
    types$4_cancelOcoResponse as cancelOcoResponse,
    cancelOrderOptions$1 as cancelOrderOptions,
    types$4_cancelOrderResponse as cancelOrderResponse,
    types$4_commissionParams as commissionParams,
    types$4_currentOpenOrdersOptions as currentOpenOrdersOptions,
    types$4_currentOpenOrdersResponse as currentOpenOrdersResponse,
    types$4_discount as discount,
    types$4_getAllOcoOptions as getAllOcoOptions,
    types$4_getAllOcoResponse as getAllOcoResponse,
    types$4_getAllocationsOptions as getAllocationsOptions,
    types$4_getAllocationsResponse as getAllocationsResponse,
    types$4_getCommissionRatesResponse as getCommissionRatesResponse,
    types$4_getCurrentOrderCountUsageOptions as getCurrentOrderCountUsageOptions,
    types$4_getCurrentOrderCountUsageResponse as getCurrentOrderCountUsageResponse,
    types$4_getOcoOptions as getOcoOptions,
    types$4_getOcoResponse as getOcoResponse,
    types$4_getOpenOcoOptions as getOpenOcoOptions,
    types$4_getOpenOcoResponse as getOpenOcoResponse,
    getOrderOptions$1 as getOrderOptions,
    types$4_getOrderResponse as getOrderResponse,
    types$4_getPreventedMatchesOptions as getPreventedMatchesOptions,
    types$4_getPreventedMatchesResponse as getPreventedMatchesResponse,
    types$4_newOcoOptions as newOcoOptions,
    types$4_newOcoOrderReports as newOcoOrderReports,
    types$4_newOcoResponse as newOcoResponse,
    newOrderOptions$1 as newOrderOptions,
    types$4_newOrderResponse as newOrderResponse,
    newOrderSOROptions$1 as newOrderSOROptions,
    types$4_newOrderSORResponse as newOrderSORResponse,
    testNewOrderOptions$1 as testNewOrderOptions,
    types$4_testNewOrderResponse as testNewOrderResponse,
    types$4_testNewOrderSOROptions as testNewOrderSOROptions,
  };
}

interface systemStatusResponse {
    status: number;
    msg: string;
}
interface allCoinsInformationOptions {
    recvWindow?: number;
}
interface allCoinsInformationResponse {
    coin: string;
    depositAllEnable: boolean;
    free: string;
    freeze: string;
    ipoable: string;
    ipoing: string;
    isLegalMoney: boolean;
    locked: string;
    name: string;
    networkList: allCoinsInformationNetworklist[];
    storage: string;
    trading: boolean;
    withdrawAllEnable: boolean;
    withdrawing: string;
}
interface allCoinsInformationNetworklist {
    addressRegex: string;
    coin: string;
    depositDesc?: string;
    depositEnable: boolean;
    isDefault: boolean;
    memoRegex: string;
    minConfirm: number;
    name: string;
    network: string;
    resetAddressStatus: boolean;
    specialTips: string;
    unLockConfirm: number;
    withdrawDesc?: string;
    withdrawEnable: boolean;
    withdrawFee: string;
    withdrawIntegerMultiple: string;
    withdrawMax: string;
    withdrawMin: string;
    sameAddress: boolean;
    estimatedArrivalTime: number;
    busy: boolean;
}
interface dailyAccountSnapshotOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface dailyAccountSnapshotResponse {
    code: number;
    msg: string;
    snapshotVos: dailyAccountSnapshotSnapshotvos[];
}
interface dailyAccountSnapshotSnapshotvos {
    data: dailyAccountSnapshotData;
    type: string;
    updateTime: number;
}
interface dailyAccountSnapshotData {
    balances: dailyAccountSnapshotBalances[];
    totalAssetOfBtc: string;
}
interface dailyAccountSnapshotBalances {
    asset: string;
    free: string;
    locked: string;
}
interface disableFastWithdrawSwitchOptions {
    recvWindow?: number;
}
interface disableFastWithdrawSwitchResponse {
}
interface enableFastWithdrawSwitchOptions {
    recvWindow?: number;
}
interface enableFastWithdrawSwitchResponse {
}
interface withdrawOptions {
    withdrawOrderId?: string;
    network?: string;
    addressTag?: string;
    transactionFeeFlag?: boolean;
    name?: string;
    walletType?: number;
    recvWindow?: number;
}
interface withdrawResponse {
    id: string;
}
interface depositHistoryOptions {
    coin?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    offset?: number;
    limit?: number;
    recvWindow?: number;
    txId?: string;
}
interface depositHistoryResponse {
    id: string;
    amount: string;
    coin: string;
    network: string;
    status: number;
    address: string;
    addressTag: string;
    txId: string;
    insertTime: number;
    transferType: number;
    unlockConfirm: number;
    confirmTimes: string;
    walletType: number;
}
interface withdrawHistoryOptions {
    coin?: string;
    withdrawOrderId?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    offset?: number;
    limit?: number;
    recvWindow?: number;
}
interface withdrawHistoryResponse {
    id: string;
    address: string;
    amount: string;
    applyTime: string;
    coin: string;
    withdrawOrderId?: string;
    network: string;
    transferType: number;
    status: number;
    transactionFee: string;
    confirmNo: number;
    info: string;
    txId: string;
    walletType: number;
    txKey: string;
    completeTime: string;
}
interface depositAddressOptions {
    network?: string;
    amount?: number;
    recvWindow?: number;
}
interface depositAddressResponse {
    address: string;
    coin: string;
    tag: string;
    url: string;
}
interface accountStatusOptions {
    recvWindow?: number;
}
interface accountStatusResponse {
    data: string;
}
interface accountApiTradingStatusOptions {
    recvWindow?: number;
}
interface accountApiTradingStatusResponse {
    data: accountApiTradingStatusData;
}
interface accountApiTradingStatusData {
    isLocked: boolean;
    plannedRecoverTime: number;
    triggerCondition: accountApiTradingStatusTriggercondition;
    updateTime: number;
}
interface accountApiTradingStatusTriggercondition {
    GCR: number;
    IFER: number;
    UFR: number;
}
interface dustlogOptions {
    accountType?: DustAccountType;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}
interface dustlogResponse {
    total: number;
    userAssetDribblets: dustlogUserassetdribblets[];
}
interface dustlogUserassetdribblets {
    operateTime: number;
    totalTransferedAmount: string;
    totalServiceChargeAmount: string;
    transId: number;
    userAssetDribbletDetails: dustlogUserassetdribbletdetails[];
}
interface dustlogUserassetdribbletdetails {
    transId: number;
    serviceChargeAmount: string;
    amount: string;
    operateTime: number;
    transferedAmount: string;
    fromAsset: string;
}
interface getAssetsThatCanBeConvertedIntoBnbOptions {
    accountType?: DustAccountType;
    recvWindow?: number;
}
interface getAssetsThatCanBeConvertedIntoBnbResponse {
    details: getAssetsThatCanBeConvertedIntoBnbDetails[];
    totalTransferBtc: string;
    totalTransferBNB: string;
    dribbletPercentage: string;
}
interface getAssetsThatCanBeConvertedIntoBnbDetails {
    asset: string;
    assetFullName: string;
    amountFree: string;
    toBTC: string;
    toBNB: string;
    toBNBOffExchange: string;
    exchange: string;
}
interface dustTransferOptions {
    accountType?: DustAccountType;
    recvWindow?: number;
}
interface dustTransferResponse {
    totalServiceCharge: string;
    totalTransfered: string;
    transferResult: dustTransferTransferResult[];
}
interface dustTransferTransferResult {
    amount: string;
    fromAsset: string;
    operateTime: number;
    serviceChargeAmount: string;
    tranId: number;
    transferedAmount: string;
}
interface assetDividendRecordOptions {
    asset?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface assetDividendRecordResponse {
    rows: assetDividendRecordRows[];
    total: number;
}
interface assetDividendRecordRows {
    id: number;
    amount: string;
    asset: string;
    divTime: number;
    enInfo: string;
    tranId: number;
}
interface assetDetailOptions {
    asset?: string;
    recvWindow?: number;
}
interface assetDetailResponse {
    CTR?: assetDetail;
    SKY?: assetDetail;
}
interface assetDetail {
    minWithdrawAmount: string;
    depositStatus: boolean;
    withdrawFee: number;
    withdrawStatus: boolean;
    depositTip?: string;
}
interface tradeFeeOptions {
    symbol?: string;
    recvWindow?: number;
}
interface tradeFeeResponse {
    symbol: string;
    makerCommission: string;
    takerCommission: string;
}
interface getUserUniversalTransferHistoryOptions {
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    fromSymbol?: string;
    toSymbol?: string;
    recvWindow?: number;
}
interface getUserUniversalTransferHistoryResponse {
    total: number;
    rows: getUserUniversalTransferHistoryRows[];
}
interface getUserUniversalTransferHistoryRows {
    asset: string;
    amount: string;
    type: UnivTransferType;
    status: UnivStatus;
    tranId: number;
    timestamp: number;
}
interface userUniversalTransferOptions {
    fromSymbol?: string;
    toSymbol?: string;
    recvWindow?: number;
}
interface userUniversalTransferResponse {
    tranId: number;
}
interface fundingWalletOptions {
    asset?: string;
    needBtcValuation?: NeedBtcValuation;
    recvWindow?: number;
}
interface fundingWalletResponse {
    asset: string;
    free: string;
    locked: string;
    freeze: string;
    withdrawing: string;
    btcValuation: string;
}
interface userAssetOptions {
    asset?: string;
    needBtcValuation?: boolean;
    recvWindow?: number;
}
interface userAssetResponse {
    asset: string;
    free: string;
    locked: string;
    freeze: string;
    withdrawing: string;
    ipoable: string;
    btcValuation: string;
}
interface convertTransferOptions {
    accountType?: QueryConvertTransfer;
}
interface convertTransferResponse {
    tranId: number;
    status: string;
}
interface getConvertTransferOptions {
    tranId?: number;
    clientTranId?: string;
    asset?: string;
    accountType?: AccountType;
    current?: number;
    size?: number;
}
interface getConvertTransferResponse {
    total: number;
    rows: getConvertTransferRows[];
}
interface getConvertTransferRows {
    tranId: number;
    type: number;
    time: number;
    deductedAsset: string;
    deductedAmount: string;
    targetAsset: string;
    targetAmount: string;
    status: string;
    accountType: AccountType;
}
interface getCloudminingPaymentAndRefundHistoryOptions {
    tranId?: number;
    clientTranId?: string;
    asset?: string;
    current?: number;
    size?: number;
}
interface getCloudminingPaymentAndRefundHistoryResponse {
    total: number;
    rows: getCloudminingPaymentAndRefundHistoryRows[];
}
interface getCloudminingPaymentAndRefundHistoryRows {
    createTime: number;
    tranId: number;
    type: number;
    asset: string;
    amount: string;
    status: string;
}
interface getApiKeyPermissionOptions {
    recvWindow?: number;
}
interface getApiKeyPermissionResponse {
    ipRestrict: boolean;
    createTime: number;
    enableWithdrawals: boolean;
    enableInternalTransfer: boolean;
    permitsUniversalTransfer: boolean;
    enableVanillaOptions: boolean;
    enableReading: boolean;
    enableFutures: boolean;
    enableMargin: boolean;
    enableSpotAndMarginTrading: boolean;
    tradingAuthorityExpirationTime: number;
}
interface getAutoconvertingStableCoinsResponse {
    convertEnabled: boolean;
    coins: string[];
    exchangeRates: getAutoconvertingStableCoinsExchangerates;
}
interface getAutoconvertingStableCoinsExchangerates {
    USDC: string;
    TUSD: string;
    USDP: string;
}
interface oneClickArrivalDepositApplyOptions {
    depositId: string;
    txId: string;
    subAccountId?: number;
    subUserId?: number;
}
interface oneClickArrivalDepositApplyResponse {
    code: string;
    message: string;
    data: boolean;
    success: boolean;
}

type types$3_accountApiTradingStatusOptions = accountApiTradingStatusOptions;
type types$3_accountApiTradingStatusResponse = accountApiTradingStatusResponse;
type types$3_accountStatusOptions = accountStatusOptions;
type types$3_accountStatusResponse = accountStatusResponse;
type types$3_allCoinsInformationOptions = allCoinsInformationOptions;
type types$3_allCoinsInformationResponse = allCoinsInformationResponse;
type types$3_assetDetailOptions = assetDetailOptions;
type types$3_assetDetailResponse = assetDetailResponse;
type types$3_assetDividendRecordOptions = assetDividendRecordOptions;
type types$3_assetDividendRecordResponse = assetDividendRecordResponse;
type types$3_convertTransferOptions = convertTransferOptions;
type types$3_convertTransferResponse = convertTransferResponse;
type types$3_dailyAccountSnapshotOptions = dailyAccountSnapshotOptions;
type types$3_dailyAccountSnapshotResponse = dailyAccountSnapshotResponse;
type types$3_depositAddressOptions = depositAddressOptions;
type types$3_depositAddressResponse = depositAddressResponse;
type types$3_depositHistoryOptions = depositHistoryOptions;
type types$3_depositHistoryResponse = depositHistoryResponse;
type types$3_disableFastWithdrawSwitchOptions = disableFastWithdrawSwitchOptions;
type types$3_disableFastWithdrawSwitchResponse = disableFastWithdrawSwitchResponse;
type types$3_dustTransferOptions = dustTransferOptions;
type types$3_dustTransferResponse = dustTransferResponse;
type types$3_dustlogOptions = dustlogOptions;
type types$3_dustlogResponse = dustlogResponse;
type types$3_enableFastWithdrawSwitchOptions = enableFastWithdrawSwitchOptions;
type types$3_enableFastWithdrawSwitchResponse = enableFastWithdrawSwitchResponse;
type types$3_fundingWalletOptions = fundingWalletOptions;
type types$3_fundingWalletResponse = fundingWalletResponse;
type types$3_getApiKeyPermissionOptions = getApiKeyPermissionOptions;
type types$3_getApiKeyPermissionResponse = getApiKeyPermissionResponse;
type types$3_getAssetsThatCanBeConvertedIntoBnbOptions = getAssetsThatCanBeConvertedIntoBnbOptions;
type types$3_getAssetsThatCanBeConvertedIntoBnbResponse = getAssetsThatCanBeConvertedIntoBnbResponse;
type types$3_getAutoconvertingStableCoinsResponse = getAutoconvertingStableCoinsResponse;
type types$3_getCloudminingPaymentAndRefundHistoryOptions = getCloudminingPaymentAndRefundHistoryOptions;
type types$3_getCloudminingPaymentAndRefundHistoryResponse = getCloudminingPaymentAndRefundHistoryResponse;
type types$3_getConvertTransferOptions = getConvertTransferOptions;
type types$3_getConvertTransferResponse = getConvertTransferResponse;
type types$3_getUserUniversalTransferHistoryOptions = getUserUniversalTransferHistoryOptions;
type types$3_getUserUniversalTransferHistoryResponse = getUserUniversalTransferHistoryResponse;
type types$3_getUserUniversalTransferHistoryRows = getUserUniversalTransferHistoryRows;
type types$3_oneClickArrivalDepositApplyOptions = oneClickArrivalDepositApplyOptions;
type types$3_oneClickArrivalDepositApplyResponse = oneClickArrivalDepositApplyResponse;
type types$3_systemStatusResponse = systemStatusResponse;
type types$3_tradeFeeOptions = tradeFeeOptions;
type types$3_tradeFeeResponse = tradeFeeResponse;
type types$3_userAssetOptions = userAssetOptions;
type types$3_userAssetResponse = userAssetResponse;
type types$3_userUniversalTransferOptions = userUniversalTransferOptions;
type types$3_userUniversalTransferResponse = userUniversalTransferResponse;
type types$3_withdrawHistoryOptions = withdrawHistoryOptions;
type types$3_withdrawHistoryResponse = withdrawHistoryResponse;
type types$3_withdrawOptions = withdrawOptions;
type types$3_withdrawResponse = withdrawResponse;
declare namespace types$3 {
  export {
    types$3_accountApiTradingStatusOptions as accountApiTradingStatusOptions,
    types$3_accountApiTradingStatusResponse as accountApiTradingStatusResponse,
    types$3_accountStatusOptions as accountStatusOptions,
    types$3_accountStatusResponse as accountStatusResponse,
    types$3_allCoinsInformationOptions as allCoinsInformationOptions,
    types$3_allCoinsInformationResponse as allCoinsInformationResponse,
    types$3_assetDetailOptions as assetDetailOptions,
    types$3_assetDetailResponse as assetDetailResponse,
    types$3_assetDividendRecordOptions as assetDividendRecordOptions,
    types$3_assetDividendRecordResponse as assetDividendRecordResponse,
    types$3_convertTransferOptions as convertTransferOptions,
    types$3_convertTransferResponse as convertTransferResponse,
    types$3_dailyAccountSnapshotOptions as dailyAccountSnapshotOptions,
    types$3_dailyAccountSnapshotResponse as dailyAccountSnapshotResponse,
    types$3_depositAddressOptions as depositAddressOptions,
    types$3_depositAddressResponse as depositAddressResponse,
    types$3_depositHistoryOptions as depositHistoryOptions,
    types$3_depositHistoryResponse as depositHistoryResponse,
    types$3_disableFastWithdrawSwitchOptions as disableFastWithdrawSwitchOptions,
    types$3_disableFastWithdrawSwitchResponse as disableFastWithdrawSwitchResponse,
    types$3_dustTransferOptions as dustTransferOptions,
    types$3_dustTransferResponse as dustTransferResponse,
    types$3_dustlogOptions as dustlogOptions,
    types$3_dustlogResponse as dustlogResponse,
    types$3_enableFastWithdrawSwitchOptions as enableFastWithdrawSwitchOptions,
    types$3_enableFastWithdrawSwitchResponse as enableFastWithdrawSwitchResponse,
    types$3_fundingWalletOptions as fundingWalletOptions,
    types$3_fundingWalletResponse as fundingWalletResponse,
    types$3_getApiKeyPermissionOptions as getApiKeyPermissionOptions,
    types$3_getApiKeyPermissionResponse as getApiKeyPermissionResponse,
    types$3_getAssetsThatCanBeConvertedIntoBnbOptions as getAssetsThatCanBeConvertedIntoBnbOptions,
    types$3_getAssetsThatCanBeConvertedIntoBnbResponse as getAssetsThatCanBeConvertedIntoBnbResponse,
    types$3_getAutoconvertingStableCoinsResponse as getAutoconvertingStableCoinsResponse,
    types$3_getCloudminingPaymentAndRefundHistoryOptions as getCloudminingPaymentAndRefundHistoryOptions,
    types$3_getCloudminingPaymentAndRefundHistoryResponse as getCloudminingPaymentAndRefundHistoryResponse,
    types$3_getConvertTransferOptions as getConvertTransferOptions,
    types$3_getConvertTransferResponse as getConvertTransferResponse,
    types$3_getUserUniversalTransferHistoryOptions as getUserUniversalTransferHistoryOptions,
    types$3_getUserUniversalTransferHistoryResponse as getUserUniversalTransferHistoryResponse,
    types$3_getUserUniversalTransferHistoryRows as getUserUniversalTransferHistoryRows,
    types$3_oneClickArrivalDepositApplyOptions as oneClickArrivalDepositApplyOptions,
    types$3_oneClickArrivalDepositApplyResponse as oneClickArrivalDepositApplyResponse,
    types$3_systemStatusResponse as systemStatusResponse,
    types$3_tradeFeeOptions as tradeFeeOptions,
    types$3_tradeFeeResponse as tradeFeeResponse,
    types$3_userAssetOptions as userAssetOptions,
    types$3_userAssetResponse as userAssetResponse,
    types$3_userUniversalTransferOptions as userUniversalTransferOptions,
    types$3_userUniversalTransferResponse as userUniversalTransferResponse,
    types$3_withdrawHistoryOptions as withdrawHistoryOptions,
    types$3_withdrawHistoryResponse as withdrawHistoryResponse,
    types$3_withdrawOptions as withdrawOptions,
    types$3_withdrawResponse as withdrawResponse,
  };
}

interface StreamMethods$1 {
    aggTrade(symbol: string): void;
    trade(symbol: string): void;
    kline(symbol: string, interval: Interval): void;
    miniTicker(symbol: string): void;
    ticker(symbol: string): void;
    rollingWindowTicker(windowSize: string, symbol: string): void;
    bookTicker(symbol: string): void;
    partialBookDepth(symbol: string, levels: string, speed: string): void;
    diffBookDepth(symbol: string, speed: string): void;
    userData(listenKey: string): void;
    unsubscribe(stream: string): void;
}

declare namespace methods$1 {
  export {
    StreamMethods$1 as StreamMethods,
  };
}

interface TradeMethods$2 {
    startUserDataStream(): void;
    pingUserDataStream(listenKey: string): void;
    stopUserDataStream(listenKey: string): void;
}

declare namespace methods {
  export {
    TradeMethods$2 as TradeMethods,
  };
}

interface newOrderOptions extends sendMessageOptions {
    timeInForce?: TimeInForce | '';
    price?: number;
    quantity?: number;
    quoteOrderQty?: number;
    newClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    strategyId?: number;
    strategyType?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}
interface testNewOrderOptions extends sendMessageOptions {
    timeInForce?: TimeInForce | '';
    price?: number;
    quantity?: number;
    quoteOrderQty?: number;
    newClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    strategyId?: number;
    strategyType?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}
interface getOrderOptions extends sendMessageOptions {
    origClientOrderId?: string;
    recvWindow?: number;
}
interface cancelOrderOptions extends sendMessageOptions {
    origClientOrderId?: string;
    newClientOrderId?: string;
    cancelRestrictions?: CancelRestrictions;
    recvWindow?: number;
}
interface cancelReplaceOrderOptions extends sendMessageOptions {
    cancelOrigClientOrderId?: string;
    cancelNewClientOrderId?: string;
    timeInForce?: TimeInForce | '';
    price?: number;
    quantity?: number;
    quoteOrderQty?: number;
    newClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    strategyId?: number;
    strategyType?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    cancelRestrictions?: CancelRestrictions;
    recvWindow?: number;
}
interface openOrdersOptions extends sendMessageOptions {
    symbol?: string;
    recvWindow?: number;
}
interface cancelOpenOrdersOptions extends sendMessageOptions {
    recvWindow?: number;
}
interface newOCOOrderOptions extends sendMessageOptions {
    listClientOrderId?: string;
    limitClientOrderId?: string;
    limitIcebergQty?: number;
    limitStrategyId?: number;
    limitStrategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    stopClientOrderId?: string;
    stopLimitPrice?: number;
    stopLimitTimeInForce?: StopLimitTimeInForce;
    stopIcebergQty?: number;
    stopStrategyId?: number;
    stopStrategyType?: string;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}
interface getOCOOrderOptions extends sendMessageOptions {
    orderListId?: number;
    recvWindow?: number;
}
interface cancelOCOOrderOptions extends sendMessageOptions {
    listClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
}
interface getOCOOpenOrdersOptions extends sendMessageOptions {
    recvWindow?: number;
}
interface newOrderSOROptions extends sendMessageOptions {
    timeInForce?: TimeInForce | '';
    price?: number;
    newClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    icebergQty?: number;
    strategyId?: number;
    strategyType?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}
interface cancelOCOOrder extends Omit<cancelOcoResponse, 'orderReports'>, sendMessageOptions {
    orderReports: cancelOcoOrder[];
}
interface cancelOcoOrder extends Omit<cancelOcoOrderReports, 'origClientOrderId' | 'stopPrice' | 'transactTime'>, sendMessageOptions {
    transactTime?: number;
    stopPrice?: string;
}
interface cancelOpenOrder extends cancelOrderResponse, sendMessageOptions {
    transactTime: number;
    stopPrice: string;
    icebergQty: string;
    strategyId: number;
    strategyType: number;
}
interface cancelOpenOCOOrder extends Omit<cancelOcoResponse, 'orderReports'>, sendMessageOptions {
    orderReports: orderReport[];
}
interface orderReport extends Omit<cancelOcoOrderReports, 'stopPrice' | 'transactTime'>, sendMessageOptions {
    transactTime?: number;
    stopPrice?: string;
}
interface cancelOrder extends cancelOrderResponse, sendMessageOptions {
    transactTime: number;
}
interface CancelReplaceOrder extends Omit<cancelAnExistingOrderAndSendANewOrderResponse, 'cancelResponse'>, sendMessageOptions {
    cancelResponse: cancelResponse;
}
interface cancelResponse extends cancelAnExistingOrderAndSendANewOrderCancelresponse, sendMessageOptions {
    transactTime: number;
}
interface newOCOOrder extends Omit<newOcoResponse, 'orderReports'>, sendMessageOptions {
    orderReports: orderReports[];
}
interface orderReports extends Omit<newOcoOrderReports, 'stopPrice'>, sendMessageOptions {
    workingTime: number;
    stopPrice?: string;
}

type types$2_CancelReplaceOrder = CancelReplaceOrder;
type types$2_cancelOCOOrder = cancelOCOOrder;
type types$2_cancelOCOOrderOptions = cancelOCOOrderOptions;
type types$2_cancelOpenOCOOrder = cancelOpenOCOOrder;
type types$2_cancelOpenOrder = cancelOpenOrder;
type types$2_cancelOpenOrdersOptions = cancelOpenOrdersOptions;
type types$2_cancelOrder = cancelOrder;
type types$2_cancelOrderOptions = cancelOrderOptions;
type types$2_cancelReplaceOrderOptions = cancelReplaceOrderOptions;
type types$2_getOCOOpenOrdersOptions = getOCOOpenOrdersOptions;
type types$2_getOCOOrderOptions = getOCOOrderOptions;
type types$2_getOrderOptions = getOrderOptions;
type types$2_newOCOOrder = newOCOOrder;
type types$2_newOCOOrderOptions = newOCOOrderOptions;
type types$2_newOrderOptions = newOrderOptions;
type types$2_newOrderSOROptions = newOrderSOROptions;
type types$2_openOrdersOptions = openOrdersOptions;
type types$2_testNewOrderOptions = testNewOrderOptions;
declare namespace types$2 {
  export {
    types$2_CancelReplaceOrder as CancelReplaceOrder,
    types$2_cancelOCOOrder as cancelOCOOrder,
    types$2_cancelOCOOrderOptions as cancelOCOOrderOptions,
    types$2_cancelOpenOCOOrder as cancelOpenOCOOrder,
    types$2_cancelOpenOrder as cancelOpenOrder,
    types$2_cancelOpenOrdersOptions as cancelOpenOrdersOptions,
    types$2_cancelOrder as cancelOrder,
    types$2_cancelOrderOptions as cancelOrderOptions,
    types$2_cancelReplaceOrderOptions as cancelReplaceOrderOptions,
    types$2_getOCOOpenOrdersOptions as getOCOOpenOrdersOptions,
    types$2_getOCOOrderOptions as getOCOOrderOptions,
    types$2_getOrderOptions as getOrderOptions,
    types$2_newOCOOrder as newOCOOrder,
    types$2_newOCOOrderOptions as newOCOOrderOptions,
    types$2_newOrderOptions as newOrderOptions,
    types$2_newOrderSOROptions as newOrderSOROptions,
    types$2_openOrdersOptions as openOrdersOptions,
    types$2_testNewOrderOptions as testNewOrderOptions,
  };
}

interface TradeMethods$1 {
    newOrder(symbol: string, side: Side, type: OrderType, options?: newOrderOptions): void;
    testNewOrder(symbol: string, side: Side, type: OrderType, options?: testNewOrderOptions): void;
    getOrder(symbol: string, orderId: number, options?: getOrderOptions): void;
    cancelOrder(symbol: string, orderId: number, options?: cancelOrderOptions): void;
    cancelReplaceOrder(symbol: string, cancelReplaceMode: CancelReplaceMode, cancelOrderId: number, side: Side, type: OrderType, options?: cancelReplaceOrderOptions): void;
    openOrders(options?: openOrdersOptions): void;
    cancelOpenOrders(symbol: string, options?: cancelOpenOrdersOptions): void;
    newOCOOrder(symbol: string, side: Side, price: number, quantity: number, options?: newOCOOrderOptions): void;
    getOCOOrder(origClientOrderId: string, options?: getOCOOrderOptions): void;
    cancelOCOOrder(symbol: string, orderListId: number, options?: cancelOCOOrderOptions): void;
    getOCOOpenOrders(options?: getOCOOpenOrdersOptions): void;
    newOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: newOrderSOROptions): void;
    testNewOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: newOrderSOROptions): void;
}

interface pingOptions {
    id?: number;
}
interface exchangeInfoOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
    permissions?: string[];
}
interface orderbookOptions extends sendMessageOptions {
    limit?: number;
}
interface tradesOptions extends sendMessageOptions {
    limit?: number;
}
interface historicalTradesOptions extends sendMessageOptions {
    limit?: number;
    fromId?: number;
}
interface aggTradesOptions extends sendMessageOptions {
    limit?: number;
    fromId?: number;
    startTime?: number;
    endTime?: number;
}
interface klinesOptions extends sendMessageOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
}
interface uiKlinesOptions extends sendMessageOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
}
interface ticker24hrOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
    type?: string;
}
interface tickerOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
    type?: string;
}
interface tickerPriceOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
}
interface tickerBookOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
}
interface Ticket24hr extends ticker24hrResponse, sendMessageOptions {
    weightedAvgPrice: string;
    lastQty: string;
}

type types$1_Ticket24hr = Ticket24hr;
type types$1_aggTradesOptions = aggTradesOptions;
type types$1_exchangeInfoOptions = exchangeInfoOptions;
type types$1_historicalTradesOptions = historicalTradesOptions;
type types$1_klinesOptions = klinesOptions;
type types$1_orderbookOptions = orderbookOptions;
type types$1_pingOptions = pingOptions;
type types$1_ticker24hrOptions = ticker24hrOptions;
type types$1_tickerBookOptions = tickerBookOptions;
type types$1_tickerOptions = tickerOptions;
type types$1_tickerPriceOptions = tickerPriceOptions;
type types$1_tradesOptions = tradesOptions;
type types$1_uiKlinesOptions = uiKlinesOptions;
declare namespace types$1 {
  export {
    types$1_Ticket24hr as Ticket24hr,
    types$1_aggTradesOptions as aggTradesOptions,
    types$1_exchangeInfoOptions as exchangeInfoOptions,
    types$1_historicalTradesOptions as historicalTradesOptions,
    types$1_klinesOptions as klinesOptions,
    types$1_orderbookOptions as orderbookOptions,
    types$1_pingOptions as pingOptions,
    types$1_ticker24hrOptions as ticker24hrOptions,
    types$1_tickerBookOptions as tickerBookOptions,
    types$1_tickerOptions as tickerOptions,
    types$1_tickerPriceOptions as tickerPriceOptions,
    types$1_tradesOptions as tradesOptions,
    types$1_uiKlinesOptions as uiKlinesOptions,
  };
}

interface MarketMethods$1 {
    ping(options?: pingOptions): void;
    time(): void;
    exchangeInfo(options?: exchangeInfoOptions): void;
    orderbook(symbol: string, options?: orderbookOptions): void;
    trades(symbol: string, options?: tradesOptions): void;
    historicalTrades(symbol: string, options?: historicalTradesOptions): void;
    aggTrades(symbol: string, options?: aggTradesOptions): void;
    klines(symbol: string, interval: Interval, options?: klinesOptions): void;
    uiKlines(symbol: string, interval: Interval, options?: uiKlinesOptions): void;
    avgPrice(symbol: string): void;
    ticker24hr(options?: ticker24hrOptions): void;
    ticker(options?: tickerOptions): void;
    tickerPrice(options?: tickerPriceOptions): void;
    tickerBook(options?: tickerBookOptions): void;
}

interface AccountMethods {
    account(options?: accountOptions): void;
    orderLimit(options?: orderLimitOptions): void;
    orderHistory(symbol: string, options?: orderHistoryOptions): void;
    ocoOrderHistory(options?: ocoOrderHistoryOptions): void;
    myTrades(symbol: string, options?: myTradesOptions): void;
    preventedMatches(symbol: string, options?: preventedMatchesOptions): void;
    accountAllocation(symbol: string, options?: accountAllocationOptions): void;
}

interface WalletMethods {
    systemStatus(): Promise<systemStatusResponse>;
    allCoinsInformation(options?: allCoinsInformationOptions): Promise<allCoinsInformationResponse[]>;
    dailyAccountSnapshot(type: AccountSnapshotType, options?: dailyAccountSnapshotOptions): Promise<dailyAccountSnapshotResponse>;
    disableFastWithdrawSwitch(options?: disableFastWithdrawSwitchOptions): Promise<Record<string, never>>;
    enableFastWithdrawSwitch(options?: enableFastWithdrawSwitchOptions): Promise<Record<string, never>>;
    withdraw(coin: string, address: string, amount: number, options?: withdrawOptions): Promise<withdrawResponse>;
    depositHistory(options?: depositHistoryOptions): Promise<depositHistoryResponse[]>;
    withdrawHistory(options?: withdrawHistoryOptions): Promise<withdrawHistoryResponse[]>;
    depositAddress(coin: string, options?: depositAddressOptions): Promise<depositAddressResponse>;
    accountStatus(options?: accountStatusOptions): Promise<accountStatusResponse>;
    accountApiTradingStatus(options?: accountApiTradingStatusOptions): Promise<accountApiTradingStatusResponse>;
    dustlog(options?: dustlogOptions): Promise<dustlogResponse>;
    getAssetsThatCanBeConvertedIntoBnb(options?: getAssetsThatCanBeConvertedIntoBnbOptions): Promise<getAssetsThatCanBeConvertedIntoBnbResponse>;
    dustTransfer(asset: string[], options?: dustTransferOptions): Promise<dustTransferResponse>;
    assetDividendRecord(options?: assetDividendRecordOptions): Promise<assetDividendRecordResponse>;
    assetDetail(options?: assetDetailOptions): Promise<assetDetailResponse>;
    tradeFee(options?: tradeFeeOptions): Promise<tradeFeeResponse[]>;
    userUniversalTransfer(type: UnivTransferType, asset: string, amount: number, options?: userUniversalTransferOptions): Promise<userUniversalTransferResponse>;
    getUserUniversalTransferHistory(type: UnivTransferType, options?: getUserUniversalTransferHistoryOptions): Promise<getUserUniversalTransferHistoryResponse>;
    fundingWallet(options?: fundingWalletOptions): Promise<fundingWalletResponse[]>;
    userAsset(options?: userAssetOptions): Promise<userAssetResponse[]>;
    convertTransfer(clientTranId: string, asset: string, amount: number, targetAsset: string, options?: convertTransferOptions): Promise<convertTransferResponse>;
    getConvertTransfer(startTime: number, endTime: number, options?: getConvertTransferOptions): Promise<getConvertTransferResponse>;
    getCloudminingPaymentAndRefundHistory(startTime: number, endTime: number, options?: getCloudminingPaymentAndRefundHistoryOptions): Promise<getCloudminingPaymentAndRefundHistoryResponse>;
    getApiKeyPermission(options?: getApiKeyPermissionOptions): Promise<getApiKeyPermissionResponse>;
    getAutoconvertingStableCoins(): Promise<getAutoconvertingStableCoinsResponse>;
    switchOnOffBusdAndStableCoinsConversion(coin: string, enable: boolean): Promise<void>;
    oneClickArrivalDepositApply(options?: oneClickArrivalDepositApplyOptions): Promise<oneClickArrivalDepositApplyResponse>;
}

interface TradeMethods {
    testNewOrder(symbol: string, side: Side, type: OrderType, options?: testNewOrderOptions$1): Promise<Record<string, never> | testNewOrderResponse>;
    getOrder(symbol: string, options?: getOrderOptions$1): Promise<getOrderResponse>;
    newOrder(symbol: string, side: Side, type: OrderType, options?: newOrderOptions$1): Promise<newOrderResponse>;
    cancelOrder(symbol: string, options?: cancelOrderOptions$1): Promise<cancelOrderResponse>;
    cancelAnExistingOrderAndSendANewOrder(symbol: string, side: Side, type: OrderType, cancelReplaceMode: CancelReplaceMode, options?: cancelAnExistingOrderAndSendANewOrderOptions): Promise<cancelAnExistingOrderAndSendANewOrderResponse>;
    currentOpenOrders(options?: currentOpenOrdersOptions): Promise<currentOpenOrdersResponse[]>;
    cancelAllOpenOrdersOnASymbol(symbol: string, options?: cancelAllOpenOrdersOnASymbolOptions): Promise<cancelAllOpenOrdersOnASymbolResponse[]>;
    allOrders(symbol: string, options?: allOrdersOptions): Promise<allOrdersResponse[]>;
    newOco(symbol: string, side: Side, quantity: number, price: number, stopPrice: number, options?: newOcoOptions): Promise<newOcoResponse>;
    getOco(options?: getOcoOptions): Promise<getOcoResponse>;
    cancelOco(symbol: string, options?: cancelOcoOptions): Promise<cancelOcoResponse>;
    getAllOco(options?: getAllOcoOptions): Promise<getAllOcoResponse[]>;
    getOpenOco(options?: getOpenOcoOptions): Promise<getOpenOcoResponse[]>;
    accountInformation(options?: accountInformationOptions): Promise<accountInformationResponse>;
    accountTradeList(symbol: string, options?: accountTradeListOptions): Promise<accountTradeListResponse[]>;
    getCurrentOrderCountUsage(options?: getCurrentOrderCountUsageOptions): Promise<getCurrentOrderCountUsageResponse[]>;
    testNewOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: testNewOrderSOROptions): Promise<Record<string, never> | testNewOrderResponse>;
    newOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: newOrderSOROptions$1): Promise<newOrderSORResponse>;
    getPreventedMatches(symbol: string, options?: getPreventedMatchesOptions): Promise<getPreventedMatchesResponse[]>;
    getAllocations(symbol: string, options?: getAllocationsOptions): Promise<getAllocationsResponse[]>;
    getCommissionRates(symbol: string): Promise<getCommissionRatesResponse>;
}

interface SubAccountMethods {
    createAVirtualSubAccount(subAccountString: string, options?: createAVirtualSubAccountOptions): Promise<createAVirtualSubAccountResponse>;
    getSubAccountList(options?: getSubAccountListOptions): Promise<getSubAccountListResponse>;
    getSubAccountSpotAssetTransferHistory(options?: getSubAccountSpotAssetTransferHistoryOptions): Promise<getSubAccountSpotAssetTransferHistoryResponse[]>;
    getSubAccountFuturesAssetTransferHistory(email: string, futuresType: number, options?: getSubAccountFuturesAssetTransferHistoryOptions): Promise<getSubAccountFuturesAssetTransferHistoryResponse>;
    subAccountFuturesAssetTransfer(fromEmail: string, toEmail: string, futuresType: number, asset: string, amount: number, options?: subAccountFuturesAssetTransferOptions): Promise<subAccountFuturesAssetTransferResponse>;
    getSubAccountAssets(email: string, options?: getSubAccountAssetsOptions): Promise<getSubAccountAssetsResponse>;
    getSubAccountSpotAssetsSummary(options?: getSubAccountSpotAssetsSummaryOptions): Promise<getSubAccountSpotAssetsSummaryResponse>;
    getSubAccountDepositAddress(email: string, coin: string, options?: getSubAccountDepositAddressOptions): Promise<getSubAccountDepositAddressResponse>;
    subAccountDepositHistory(email: string, options?: subAccountDepositHistoryOptions): Promise<subAccountDepositHistoryResponse[]>;
    subAccountStatusOnMarginFutures(options?: subAccountStatusOnMarginFuturesOptions): Promise<subAccountStatusOnMarginFuturesResponse[]>;
    enableMarginForSubAccount(email: string, options?: enableMarginForSubAccountOptions): Promise<enableMarginForSubAccountResponse>;
    detailOnSubAccountMarginAccount(email: string, options?: detailOnSubAccountMarginAccountOptions): Promise<detailOnSubAccountMarginAccountResponse>;
    summaryOfSubAccountMarginAccount(options?: summaryOfSubAccountMarginAccountOptions): Promise<summaryOfSubAccountMarginAccountResponse>;
    enableFuturesForSubAccount(email: string, options?: enableFuturesForSubAccountOptions): Promise<enableFuturesForSubAccountResponse>;
    detailOnSubAccountFuturesAccount(email: string, options?: detailOnSubAccountFuturesAccountOptions): Promise<detailOnSubAccountFuturesAccountResponse>;
    summaryOfSubAccountFuturesAccount(options?: summaryOfSubAccountFuturesAccountOptions): Promise<summaryOfSubAccountFuturesAccountResponse>;
    futuresPositionriskOfSubAccount(email: string, options?: futuresPositionriskOfSubAccountOptions): Promise<futuresPositionriskOfSubAccountResponse[]>;
    transferForSubAccount(email: string, asset: string, amount: number, type: number, options?: transferForSubAccountOptions): Promise<transferForSubAccountResponse>;
    marginTransferForSubAccount(email: string, asset: string, amount: number, type: number, options?: marginTransferForSubAccountOptions): Promise<marginTransferForSubAccountResponse>;
    transferToSubAccountOfSameMaster(toEmail: string, asset: string, amount: number, options?: transferToSubAccountOfSameMasterOptions): Promise<transferToSubAccountOfSameMasterResponse>;
    transferToMaster(asset: string, amount: number, options?: transferToMasterOptions): Promise<transferToMasterResponse>;
    subAccountTransferHistory(options?: subAccountTransferHistoryOptions): Promise<subAccountTransferHistoryResponse[]>;
    universalTransfer(fromAccountType: FromAccountType, toAccountType: ToAccountType, asset: string, amount: number, options?: universalTransferOptions): Promise<universalTransferResponse>;
    getUniversalTransferHistory(options?: getUniversalTransferHistoryOptions): Promise<getUniversalTransferHistoryResponse>;
    getDetailOnSubAccountFuturesAccountV2(email: string, futuresType: number, options?: getDetailOnSubAccountFuturesAccountV2Options): Promise<getDetailOnSubAccountFuturesAccountV2Response>;
    summaryOfSubAccountFuturesAccountV2(futuresType: number, options?: summaryOfSubAccountFuturesAccountV2Options): Promise<summaryOfSubAccountFuturesAccountV2Response>;
    futuresPositionriskOfSubAccountV2(email: string, futuresType: number, options?: futuresPositionriskOfSubAccountV2Options): Promise<futuresPositionriskOfSubAccountV2Response>;
    enableLeverageTokenForSubAccount(email: string, enableBlvt: boolean, options?: enableLeverageTokenForSubAccountOptions): Promise<enableLeverageTokenForSubAccountResponse>;
    getIpRestrictionForASubAccountApiKey(email: string, subAccountApiKey: string, options?: getIpRestrictionForASubAccountApiKeyOptions): Promise<getIpRestrictionForASubAccountApiKeyResponse>;
    deleteIpListForASubAccountApiKey(email: string, subAccountApiKey: string, options?: deleteIpListForASubAccountApiKeyOptions): Promise<deleteIpListForASubAccountApiKeyResponse>;
    updateIpRestrictionForSubAccountApiKey(email: string, subAccountApiKey: string, status: string, options?: updateIpRestrictionForSubAccountApiKeyOptions): Promise<updateIpRestrictionForSubAccountApiKeyResponse>;
    depositAssetsIntoTheManagedSubAccount(toEmail: string, asset: string, amount: number, options?: depositAssetsIntoTheManagedSubAccountOptions): Promise<depositAssetsIntoTheManagedSubAccountResponse>;
    getManagedSubAccountAssetDetails(email: string, options?: getManagedSubAccountAssetDetailsOptions): Promise<getManagedSubAccountAssetDetailsResponse[]>;
    withdrawlAssetsFromTheManagedSubAccount(fromEmail: string, asset: string, amount: number, options?: withdrawlAssetsFromTheManagedSubAccountOptions): Promise<withdrawlAssetsFromTheManagedSubAccountResponse>;
    getManagedSubAccountSnapshot(email: string, type: AccountSnapshotType, options?: getManagedSubAccountSnapshotOptions): Promise<getManagedSubAccountSnapshotResponse>;
    getManagedSubAccountTransferLog(email: string, startTime: number, endTime: number, page: number, limit: number, options?: getManagedSubAccountTransferLogOptions): Promise<getManagedSubAccountTransferLogResponse>;
    getManagedSubAccountTransferLogForTradeParent(email: string, startTime: number, endTime: number, page: number, limit: number, options?: getManagedSubAccountTransferLogForTradeParentOptions): Promise<getManagedSubAccountTransferLogForTradeParentResponse>;
    getManagedSubAccountFuturesAssetDetails(email: string): Promise<getManagedSubAccountFuturesAssetDetailsResponse>;
    getManagedSubAccountMarginAssetDetails(email: string): Promise<getManagedSubAccountMarginAssetDetailsResponse>;
    getSubAccountAssetsForMasterAccount(email: string, options?: getSubAccountAssetsForMasterAccountOptions): Promise<getSubAccountAssetsForMasterAccountResponse>;
    getManagedSubAccountList(email: string, options?: getManagedSubAccountListOptions): Promise<getManagedSubAccountListResponse>;
    getSubAccountTransactionStatisticsForMasterAccount(email: string, options?: getSubAccountTransactionStatisticsForMasterAccountOptions): Promise<getSubAccountTransactionStatisticsForMasterAccountResponse>;
    getManagedSubAccountDepositAddress(email: string, coin: string, options?: getManagedSubAccountDepositAddressOptions): Promise<getManagedSubAccountDepositAddressResponse>;
    enableOptionsForSubAccount(email: string, options?: enableOptionsForSubAccountOptions): Promise<enableOptionsForSubAccountResponse>;
    getManagedSubAccountTransferLogForTradeSub(startTime: number, endTime: number, page: number, limit: number, options?: getManagedSubAccountTransferLogForTradeSubOptions): Promise<getManagedSubAccountTransferLogForTradeSubResponse>;
}

interface StreamMethods {
    createListenKey(): Promise<listenkeyResponse>;
    renewListenKey(listenKey: string): Promise<Record<string, never>>;
    closeListenKey(listenKey: string): Promise<Record<string, never>>;
    createMarginListenKey(): Promise<listenkeyResponse>;
    renewMarginListenKey(listenKey: string): Promise<Record<string, never>>;
    closeMarginListenKey(listenKey: string): Promise<Record<string, never>>;
    createIsolatedMarginListenKey(symbol: string): Promise<listenkeyResponse>;
    renewIsolatedMarginListenKey(symbol: string, listenKey: string): Promise<Record<string, never>>;
    closeIsolatedMarginListenKey(symbol: string, listenKey: string): Promise<Record<string, never>>;
}

interface SimpleEarnMethods {
    getSimpleEarnFlexibleProductList(options?: getSimpleEarnFlexibleProductListOptions): Promise<getSimpleEarnFlexibleProductListResponse>;
    getSimpleEarnLockedProductList(options?: getSimpleEarnLockedProductListOptions): Promise<getSimpleEarnLockedProductListResponse>;
    subscribeFlexibleProduct(productId: string, amount: number, options?: subscribeFlexibleProductOptions): Promise<subscribeFlexibleProductResponse>;
    subscribeLockedProduct(projectId: string, amount: number, options?: subscribeLockedProductOptions): Promise<subscribeLockedProductResponse>;
    redeemFlexibleProduct(productId: string, options?: redeemFlexibleProductOptions): Promise<redeemFlexibleProductResponse>;
    redeemLockedProduct(positionId: string, options?: redeemLockedProductOptions): Promise<redeemLockedProductResponse>;
    getFlexibleProductPosition(options?: getFlexibleProductPositionOptions): Promise<getFlexibleProductPositionResponse>;
    getLockedProductPosition(options?: getLockedProductPositionOptions): Promise<getLockedProductPositionResponse>;
    simpleAccount(options?: simpleAccountOptions): Promise<simpleAccountResponse>;
    getFlexibleSubscriptionRecord(options?: getFlexibleSubscriptionRecordOptions): Promise<getFlexibleSubscriptionRecordResponse>;
    getLockedSubscriptionRecord(options?: getLockedSubscriptionRecordOptions): Promise<getLockedSubscriptionRecordResponse>;
    getFlexibleRedemptionRecord(options?: getFlexibleRedemptionRecordOptions): Promise<getFlexibleRedemptionRecordResponse>;
    getLockedRedemptionRecord(options?: getLockedRedemptionRecordOptions): Promise<getLockedRedemptionRecordResponse>;
    getFlexibleRewardsHistory(type: string, options?: getFlexibleRewardsHistoryOptions): Promise<getFlexibleRewardsHistoryResponse>;
    getLockedRewardsHistory(options?: getLockedRewardsHistoryOptions): Promise<getLockedRewardsHistoryResponse>;
    setFlexibleAutoSubscribe(productId: string, autoSubscribe: boolean, options?: setFlexibleAutoSubscribeOptions): Promise<setFlexibleAutoSubscribeResponse>;
    setLockedAutoSubscribe(positionId: string, autoSubscribe: boolean, options?: setLockedAutoSubscribeOptions): Promise<setLockedAutoSubscribeResponse>;
    getFlexiblePersonalLeftQuota(productId: string, options?: getFlexiblePersonalLeftQuotaOptions): Promise<getFlexiblePersonalLeftQuotaResponse>;
    getLockedPersonalLeftQuota(projectId: string, options?: getLockedPersonalLeftQuotaOptions): Promise<getLockedPersonalLeftQuotaResponse>;
    getFlexibleSubscriptionPreview(productId: string, amount: number, options?: getFlexibleSubscriptionPreviewOptions): Promise<getFlexibleSubscriptionPreviewResponse>;
    getLockedSubscriptionPreview(projectId: string, amount: number, options?: getLockedSubscriptionPreviewOptions): Promise<getLockedSubscriptionPreviewResponse[]>;
    getRateHistory(productId: string, options?: getRateHistoryOptions): Promise<getRateHistoryResponse>;
    getCollateralRecord(options?: getCollateralRecordOptions): Promise<getCollateralRecordResponse>;
}

interface MarketMethods {
    testConnectivity(): Promise<Record<string, never>>;
    checkServerTime(): Promise<checkServerTimeResponse>;
    exchangeInformation(options?: exchangeInformationOptions): Promise<exchangeInformationResponse>;
    orderBook(symbol: string, options?: orderBookOptions): Promise<orderBookResponse>;
    recentTradesList(symbol: string, options?: recentTradesListOptions): Promise<recentTradesListResponse[]>;
    oldTradeLookup(symbol: string, options?: oldTradeLookupOptions): Promise<oldTradeLookupResponse[]>;
    compressedAggregateTradesList(symbol: string, options?: compressedAggregateTradesListOptions): Promise<compressedAggregateTradesListResponse[]>;
    klineCandlestickData(symbol: string, interval: Interval, options?: klineCandlestickDataOptions): Promise<klineCandlestickDataResponse[]>;
    uiklines(symbol: string, interval: Interval, options?: uiklinesOptions): Promise<uiklinesResponse[]>;
    currentAveragePrice(symbol: string): Promise<currentAveragePriceResponse>;
    ticker24hr(options?: ticker24hrOptions$1): Promise<ticker24hrResponse | ticker24hrResponse[]>;
    symbolPriceTicker(options?: symbolPriceTickerOptions): Promise<symbolPriceTickerResponse | symbolPriceTickerResponse[]>;
    symbolOrderBookTicker(options?: symbolOrderBookTickerOptions): Promise<symbolOrderBookTickerResponse | symbolOrderBookTickerResponse[]>;
    rollingWindowPriceChangeStatistics(options?: rollingWindowPriceChangeStatisticsOptions): Promise<rollingWindowPriceChangeStatisticsResponse | rollingWindowPriceChangeStatisticsResponse[]>;
    tradingDayTicker(symbol: string, options?: tradingDayTickerOptions): Promise<tradingDayTickerResponse | tradingDayTickerResponse[]>;
}

interface MarginMethods {
    getAllMarginAssets(options?: getAllMarginAssetsOptions): Promise<getAllMarginAssetsResponse[]>;
    getAllCrossMarginPairs(options?: getAllCrossMarginPairsOptions): Promise<getAllCrossMarginPairsResponse[]>;
    getMarginPriceIndex(symbol: string): Promise<getMarginPriceIndexResponse>;
    marginAccountNewOrder(symbol: string, side: Side, type: OrderType, options?: marginAccountNewOrderOptions): Promise<marginAccountNewOrderResponse>;
    marginAccountCancelOrder(symbol: string, options?: marginAccountCancelOrderOptions): Promise<marginAccountCancelOrderResponse>;
    marginAccountCancelAllOpenOrdersOnASymbol(symbol: string, options?: marginAccountCancelAllOpenOrdersOnASymbolOptions): Promise<marginAccountCancelAllOpenOrdersOnASymbolResponse[]>;
    adjustCrossMarginMaxLeverage(maxLeverage: number): Promise<adjustCrossMarginMaxLeverageResponse>;
    getCrossMarginTransferHistory(options?: getCrossMarginTransferHistoryOptions): Promise<getCrossMarginTransferHistoryResponse>;
    getInterestHistory(options?: getInterestHistoryOptions): Promise<getInterestHistoryResponse>;
    getForceLiquidationRecord(options?: getForceLiquidationRecordOptions): Promise<getForceLiquidationRecordResponse>;
    getCrossMarginAccountDetails(options?: getCrossMarginAccountDetailsOptions): Promise<getCrossMarginAccountDetailsResponse>;
    getMarginAccountOrder(symbol: string, options?: getMarginAccountOrderOptions): Promise<getMarginAccountOrderResponse>;
    getMarginAccountOpenOrders(options?: getMarginAccountOpenOrdersOptions): Promise<getMarginAccountOpenOrdersResponse[]>;
    getMarginAccountAllOrders(symbol: string, options?: getMarginAccountAllOrdersOptions): Promise<getMarginAccountAllOrdersResponse[]>;
    marginAccountNewOco(symbol: string, side: Side, quantity: number, price: number, stopPrice: number, options?: marginAccountNewOcoOptions): Promise<marginAccountNewOcoResponse>;
    marginAccountCancelOco(symbol: string, options?: marginAccountCancelOcoOptions): Promise<marginAccountCancelOcoResponse>;
    getMarginAccountOco(options?: getMarginAccountOcoOptions): Promise<getMarginAccountOcoResponse>;
    getMarginAccountAllOco(options?: getMarginAccountAllOcoOptions): Promise<getMarginAccountAllOcoResponse[]>;
    getMarginAccountOpenOco(options?: getMarginAccountOpenOcoOptions): Promise<getMarginAccountOpenOcoResponse[]>;
    getMarginAccountTradeList(symbol: string, options?: getMarginAccountTradeListOptions): Promise<getMarginAccountTradeListResponse[]>;
    getMaxBorrow(asset: string, options?: getMaxBorrowOptions): Promise<getMaxBorrowResponse>;
    getMaxTransferoutAmount(asset: string, options?: getMaxTransferoutAmountOptions): Promise<getMaxTransferoutAmountResponse>;
    getSummaryOfMarginAccount(options?: getSummaryOfMarginAccountOptions): Promise<getSummaryOfMarginAccountResponse>;
    getIsolatedMarginAccountInfo(options?: getIsolatedMarginAccountInfoOptions): Promise<getIsolatedMarginAccountInfoResponse>;
    disableIsolatedMarginAccount(symbol: string, options?: disableIsolatedMarginAccountOptions): Promise<disableIsolatedMarginAccountResponse>;
    enableIsolatedMarginAccount(symbol: string, options?: enableIsolatedMarginAccountOptions): Promise<enableIsolatedMarginAccountResponse>;
    getEnabledIsolatedMarginAccountLimit(options?: getEnabledIsolatedMarginAccountLimitOptions): Promise<getEnabledIsolatedMarginAccountLimitResponse>;
    getAllIsolatedMarginSymbol(options?: getAllIsolatedMarginSymbolOptions): Promise<getAllIsolatedMarginSymbolResponse[]>;
    toggleBnbBurnOnSpotTradeAndMarginInterest(options?: toggleBnbBurnOnSpotTradeAndMarginInterestOptions): Promise<toggleBnbBurnOnSpotTradeAndMarginInterestResponse>;
    getBnbBurnStatus(options?: getBnbBurnStatusOptions): Promise<getBnbBurnStatusResponse>;
    marginInterestRateHistory(asset: string, options?: marginInterestRateHistoryOptions): Promise<marginInterestRateHistoryResponse[]>;
    getCrossMarginFeeData(options?: getCrossMarginFeeDataOptions): Promise<getCrossMarginFeeDataResponse[]>;
    getIsolatedMarginFeeData(options?: getIsolatedMarginFeeDataOptions): Promise<getIsolatedMarginFeeDataResponse[]>;
    getIsolatedMarginTierData(symbol: string, options?: getIsolatedMarginTierDataOptions): Promise<getIsolatedMarginTierDataResponse[]>;
    getCurrentMarginOrderCountUsage(options?: getCurrentMarginOrderCountUsageOptions): Promise<getCurrentMarginOrderCountUsageResponse[]>;
    crossMarginCollateralRatio(): Promise<crossMarginCollateralRatioResponse>;
    getSmallLiabilityExchangeCoinList(options?: getSmallLiabilityExchangeCoinListOptions): Promise<getSmallLiabilityExchangeCoinListResponse[]>;
    smallLiabilityExchange(assetNames: string[], options?: smallLiabilityExchangeOptions): Promise<smallLiabilityExchangeResponse>;
    getSmallLiabilityExchangeHistory(current: number, size: number, options?: getSmallLiabilityExchangeHistoryOptions): Promise<getSmallLiabilityExchangeHistoryResponse>;
    getFutureHoulyInterestRate(assets: string, isIsolated: IsIsolatedMargin): Promise<getFutureHoulyInterestRateResponse>;
    getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMargin(options?: getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions): Promise<getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse[]>;
    getMarginAvailableInventory(type: string, options?: getMarginAvailableInventoryOptions): Promise<getMarginAvailableInventoryResponse>;
    marginManualLiquidation(type: string, options?: marginManualLiquidationOptions): Promise<marginManualLiquidationResponse[]>;
    getLeverageBracket(): Promise<getLeverageBracketResponse[]>;
    marginAccountBorrowRepay(asset: string, isIsolated: string, symbol: string, amount: string, type: MarginBorrowRepayType, options?: marginAccountBorrowRepayOptions): Promise<marginAccountBorrowRepayResponse>;
    getBorrowRepayRecords(type: MarginBorrowRepayType, options?: getBorrowRepayRecordsOptions): Promise<getBorrowRepayRecordsResponse>;
}

interface C2cMethods {
    getDetailByNo(adsNo: string): Promise<CommonRet_AdDetailResp>;
    listWithPagination(page: number, rows: number, options?: AdQueryByPageReq): Promise<CommonPageRet_AdDetailResp>;
    search(asset: string, fiat: string, page: number, rows: number, tradeType: string, options?: searchOptions): Promise<CommonPageRet_AdSearchResp>;
    listUserOrderHistory(options?: listUserOrderHistoryOptions): Promise<CommonPageRet_UserOrderHistory>;
    commissionRateOverview(fiat: string): Promise<CommonRet_CommissionRateOverview>;
    detailWithAdvertiser(advNo: string): Promise<CommonRet_AdSearchResp>;
}

declare const SpotBase: Constructor<C2cMethods> & Constructor<MarginMethods> & Constructor<MarketMethods> & Constructor<SimpleEarnMethods> & Constructor<StreamMethods> & Constructor<SubAccountMethods> & Constructor<TradeMethods> & Constructor<WalletMethods> & {
    new (apiKey: string, apiSecret: string, options?: SpotOptions): {
        apiKey: string;
        apiSecret: string;
        baseURL: string;
        timeout: number;
        proxy: AxiosProxyConfig | false;
        httpsAgent: boolean;
        privateKey: Buffer;
        privateKeyPassphrase: string;
        privateKeyAlgo: 'RSA' | 'ED25519';
        makeRequest(method: string, url: string, data?: object): Promise<any>;
        preparePath(path: string, options?: object): string;
        prepareSignedPath(path: string, options?: object): string;
    };
};
declare const WebsocketFeaturesBase: Constructor<AccountMethods> & Constructor<MarketMethods$1> & Constructor<TradeMethods$1> & Constructor<TradeMethods$2> & Constructor<websocketBaseMethods> & {
    new (apiKey: string, apiSecret: string, options?: WebsocketAPIOptions): {
        apiKey: string;
        apiSecret: string;
        wsURL: string;
        callbacks: WebsocketCallbacks;
        reconnectDelay: number;
        wsConnection: WebsocketConnection;
    };
};
declare const WebsocketStreamFeaturesBase: Constructor<StreamMethods$1> & Constructor<websocketBaseMethods> & {
    new (options?: WebsocketAPIOptions): {
        wsURL: string;
        callbacks: WebsocketCallbacks;
        reconnectDelay: number;
        wsConnection: WebsocketConnection;
    };
};

declare class WebsocketAPI extends WebsocketFeaturesBase {
    wsURL: string;
    apiKey: string;
    apiSecret: string;
    constructor(apiKey?: string, apiSecret?: string, options?: WebsocketAPIOptions);
    sendMessageWithAPIKey(method: string, options?: Omit<sendMessageOptions, 'timestamp' | 'signature'>): void;
    sendMessage(method: string, options?: Omit<sendMessageOptions, 'apiKey' | 'timestamp' | 'signature'>): void;
    sendSignatureMessage(method: string, options?: sendMessageOptions): void;
}

interface websocketBaseMethods {
    isConnected(): boolean;
    initConnect(url: string): void;
    disconnect(): void;
    pingServer(): void;
    send(payload: BufferLike): void;
}
type BufferLike = string | Buffer | DataView | number | ArrayBufferView | Uint8Array | ArrayBuffer | SharedArrayBuffer | ReadonlyArray<string> | ReadonlyArray<number> | {
    valueOf(): ArrayBuffer;
} | {
    valueOf(): SharedArrayBuffer;
} | {
    valueOf(): Uint8Array;
} | {
    valueOf(): ReadonlyArray<number>;
} | {
    valueOf(): string;
} | {
    [Symbol.toPrimitive](hint: string): string;
};
interface WebsocketCallbacks {
    open?: (client: WebsocketAPI) => void;
    close?: () => void;
    ping?: (data?: object) => void;
    pong?: () => void;
    error?: () => void;
    message?: (data: string) => void;
}
interface WebsocketConnection {
    ws?: WebSocketClient;
    closeInitiated?: boolean;
}
interface WebsocketOptions {
    reconnectDelay?: number;
    callbacks?: WebsocketCallbacks;
}

type Constructor<T = any> = new (...args: any[]) => T;
interface SpotOptions {
    baseURL?: string;
    timeout?: number;
    proxy?: AxiosProxyConfig | false;
    httpsAgent?: boolean;
    privateKey?: Buffer;
    privateKeyPassphrase?: string;
    privateKeyAlgo?: 'RSA' | 'ED25519';
}
interface sendMessageOptions {
    id?: string;
    apiKey?: string;
    timestamp?: number;
    signature?: string;
}
interface WebsocketAPIOptions extends WebsocketOptions {
    wsURL?: string;
}
interface WebsocketAPIOptions extends WebsocketOptions {
    wsURL?: string;
    combinedStreams?: boolean;
}

interface accountOptions extends sendMessageOptions {
    recvWindow?: number;
}
interface orderLimitOptions extends sendMessageOptions {
    recvWindow: number;
}
interface orderHistoryOptions extends sendMessageOptions {
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface ocoOrderHistoryOptions extends sendMessageOptions {
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}
interface myTradesOptions extends sendMessageOptions {
    orderId?: number;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
}
interface preventedMatchesOptions extends sendMessageOptions {
    preventedMatchId?: number;
    orderId?: number;
    fromPreventedMatchId?: number;
    limit?: number;
    recvWindow?: number;
}
interface accountAllocationOptions extends sendMessageOptions {
    startTime?: number;
    endTime?: number;
    fromAllocationId?: number;
    limit?: number;
    orderId?: number;
    recvWindow?: number;
}
interface accountAllocationResponse extends sendMessageOptions {
    symbol: string;
    allocationId: number;
    allocationType: string;
    orderId: number;
    orderListId: number;
    price: string;
    qty: string;
    quoteQty: string;
    commission: string;
    commissionAsset: string;
    time: number;
    isBuyer: boolean;
    isMaker: boolean;
    isAllocator: boolean;
}
interface orderHistoryResponse extends getOrderResponse, sendMessageOptions {
    preventedMatchId: number;
    preventedQuantity: string;
}
interface preventedMatchesResponse extends sendMessageOptions {
    symbol: string;
    preventedMatchId: number;
    takerOrderId: number;
    makerOrderId: number;
    tradeGroupId: number;
    selfTradePreventionMode: SelfTradePreventionMode;
    price: string;
    makerPreventedQuantity: string;
    transactTime: number;
}

type types_accountAllocationOptions = accountAllocationOptions;
type types_accountAllocationResponse = accountAllocationResponse;
type types_accountOptions = accountOptions;
type types_myTradesOptions = myTradesOptions;
type types_ocoOrderHistoryOptions = ocoOrderHistoryOptions;
type types_orderHistoryOptions = orderHistoryOptions;
type types_orderHistoryResponse = orderHistoryResponse;
type types_orderLimitOptions = orderLimitOptions;
type types_preventedMatchesOptions = preventedMatchesOptions;
type types_preventedMatchesResponse = preventedMatchesResponse;
declare namespace types {
  export {
    types_accountAllocationOptions as accountAllocationOptions,
    types_accountAllocationResponse as accountAllocationResponse,
    types_accountOptions as accountOptions,
    types_myTradesOptions as myTradesOptions,
    types_ocoOrderHistoryOptions as ocoOrderHistoryOptions,
    types_orderHistoryOptions as orderHistoryOptions,
    types_orderHistoryResponse as orderHistoryResponse,
    types_orderLimitOptions as orderLimitOptions,
    types_preventedMatchesOptions as preventedMatchesOptions,
    types_preventedMatchesResponse as preventedMatchesResponse,
  };
}

declare class Spot extends SpotBase {
    constructor(apiKey?: string, apiSecret?: string, options?: SpotOptions);
}

declare class WebsocketStream extends WebsocketStreamFeaturesBase {
    combinedStreams: boolean;
    constructor(options?: WebsocketAPIOptions);
    _prepareURL(stream: string | string[]): string;
    subscribe(stream: string | string[]): void;
    unsubscribe(stream: string | string[]): void;
}

export { AccountSnapshotType, AccountType, AddLiquidityPreviewType, BusdStableCoinsConversion, CancelReplaceMode, CancelRestrictions, CancelResult, CrossMarginAccountTransferType, CrossMarginAccountType, CrossMarginTrans, DepositHistory, Direction, DustAccountType, Featured, FixedAndActivityProductType, FlexibleProductStatus, FlexibleProductType, FromAccountType, FuturesTransferType, FuturesType, GetCrossMargingTransferHistoryType, HisrecStatus, HistoryStatus, IncomeType, InterestBNBBurn, Interval, IsFreeze, IsIsolatedMargin, LendingType, LiquidityAddType, LiquidityRemoveType, MarginArchive, MarginBorrowRepayType, MarginInterestHistory, MarginLevelStatus, MarginStatus, MarginSubAccountTransferType, MarginTransferType, MargintransferType, NeedBtcValuation, NewOrderRespType, NewOrderResult, OCOOrderStatus, OCOStatusType, OcoNewOrderRespType, Operation, OptionalFixedAndActivityProductStatus, OptionalFlexibleProductStatus, OptionalSide, OptionalTransFrom, OptionalTransTo, OrderStatus, OrderType, Permissions, PositionSide, PositionStatus, QueryConvertTransfer, QuerySubAccountList, RedeemDestAccount, RemoveLiquidityPreviewType, types$a as RestC2cTypes, types$9 as RestMarginTypes, types$8 as RestMarketTypes, types$7 as RestSimpleEarnTypes, types$6 as RestStreamTypes, types$5 as RestSubAccountTypes, types$4 as RestTradeTypes, types$3 as RestWalletTypes, SelfTradePreventionMode, Side, SideEffectType, SimpleEarnDestAccount, SimpleEarnFlexibleRewards, SimpleEarnLockedRedemption, SimpleEarnSourceAccount, SimpleEarnStatus, SimpleEarnType, SortBy, Spot, SpotBNBBurn, StopLimitTimeInForce, SubAccountStatus, SubAccountTransferLog, SubUserHistoryType, SubscribeSourceAccount, SwapStatus, TimeInForce, ToAccountType, TradeType, TransFrom, TransTo, TransactionType, UnivStatus, UnivTransferType, Urgency, ValidTime, WebsocketAPI, WebsocketStream, WithdrawHistory, WorkingFloor, types as WsAccountTypes, types$1 as WsMarketTypes, types$2 as WsTradeTypes, methods as WsUserDataTypes, methods$1 as WssTypes, listenkeyResponse };