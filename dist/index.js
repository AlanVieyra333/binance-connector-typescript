"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AccountSnapshotType: () => AccountSnapshotType,
  AccountType: () => AccountType,
  AddLiquidityPreviewType: () => AddLiquidityPreviewType,
  BusdStableCoinsConversion: () => BusdStableCoinsConversion,
  CancelReplaceMode: () => CancelReplaceMode,
  CancelRestrictions: () => CancelRestrictions,
  CancelResult: () => CancelResult,
  CrossMarginAccountTransferType: () => CrossMarginAccountTransferType,
  CrossMarginAccountType: () => CrossMarginAccountType,
  CrossMarginTrans: () => CrossMarginTrans,
  DepositHistory: () => DepositHistory,
  Direction: () => Direction,
  DustAccountType: () => DustAccountType,
  Featured: () => Featured,
  FixedAndActivityProductType: () => FixedAndActivityProductType,
  FlexibleProductStatus: () => FlexibleProductStatus,
  FlexibleProductType: () => FlexibleProductType,
  FromAccountType: () => FromAccountType,
  FuturesTransferType: () => FuturesTransferType,
  FuturesType: () => FuturesType,
  GetCrossMargingTransferHistoryType: () => GetCrossMargingTransferHistoryType,
  HisrecStatus: () => HisrecStatus,
  HistoryStatus: () => HistoryStatus,
  IncomeType: () => IncomeType,
  InterestBNBBurn: () => InterestBNBBurn,
  Interval: () => Interval,
  IsFreeze: () => IsFreeze,
  IsIsolatedMargin: () => IsIsolatedMargin,
  LendingType: () => LendingType,
  LiquidityAddType: () => LiquidityAddType,
  LiquidityRemoveType: () => LiquidityRemoveType,
  MarginArchive: () => MarginArchive,
  MarginBorrowRepayType: () => MarginBorrowRepayType,
  MarginInterestHistory: () => MarginInterestHistory,
  MarginLevelStatus: () => MarginLevelStatus,
  MarginStatus: () => MarginStatus,
  MarginSubAccountTransferType: () => MarginSubAccountTransferType,
  MarginTransferType: () => MarginTransferType,
  MargintransferType: () => MargintransferType,
  NeedBtcValuation: () => NeedBtcValuation,
  NewOrderRespType: () => NewOrderRespType,
  NewOrderResult: () => NewOrderResult,
  OCOOrderStatus: () => OCOOrderStatus,
  OCOStatusType: () => OCOStatusType,
  OcoNewOrderRespType: () => OcoNewOrderRespType,
  Operation: () => Operation,
  OptionalFixedAndActivityProductStatus: () => OptionalFixedAndActivityProductStatus,
  OptionalFlexibleProductStatus: () => OptionalFlexibleProductStatus,
  OptionalSide: () => OptionalSide,
  OptionalTransFrom: () => OptionalTransFrom,
  OptionalTransTo: () => OptionalTransTo,
  OrderStatus: () => OrderStatus,
  OrderType: () => OrderType,
  Permissions: () => Permissions,
  PositionSide: () => PositionSide,
  PositionStatus: () => PositionStatus,
  QueryConvertTransfer: () => QueryConvertTransfer,
  QuerySubAccountList: () => QuerySubAccountList,
  RedeemDestAccount: () => RedeemDestAccount,
  RemoveLiquidityPreviewType: () => RemoveLiquidityPreviewType,
  RestC2cTypes: () => types_exports,
  RestMarginTypes: () => types_exports2,
  RestMarketTypes: () => types_exports3,
  RestSimpleEarnTypes: () => types_exports4,
  RestStreamTypes: () => types_exports5,
  RestSubAccountTypes: () => types_exports6,
  RestTradeTypes: () => types_exports7,
  RestWalletTypes: () => types_exports8,
  SelfTradePreventionMode: () => SelfTradePreventionMode,
  Side: () => Side,
  SideEffectType: () => SideEffectType,
  SimpleEarnDestAccount: () => SimpleEarnDestAccount,
  SimpleEarnFlexibleRewards: () => SimpleEarnFlexibleRewards,
  SimpleEarnLockedRedemption: () => SimpleEarnLockedRedemption,
  SimpleEarnSourceAccount: () => SimpleEarnSourceAccount,
  SimpleEarnStatus: () => SimpleEarnStatus,
  SimpleEarnType: () => SimpleEarnType,
  SortBy: () => SortBy,
  Spot: () => Spot,
  SpotBNBBurn: () => SpotBNBBurn,
  StopLimitTimeInForce: () => StopLimitTimeInForce,
  SubAccountStatus: () => SubAccountStatus,
  SubAccountTransferLog: () => SubAccountTransferLog,
  SubUserHistoryType: () => SubUserHistoryType,
  SubscribeSourceAccount: () => SubscribeSourceAccount,
  SwapStatus: () => SwapStatus,
  TimeInForce: () => TimeInForce,
  ToAccountType: () => ToAccountType,
  TradeType: () => TradeType,
  TransFrom: () => TransFrom,
  TransTo: () => TransTo,
  TransactionType: () => TransactionType,
  UnivStatus: () => UnivStatus,
  UnivTransferType: () => UnivTransferType,
  Urgency: () => Urgency,
  ValidTime: () => ValidTime,
  WebsocketAPI: () => WebsocketAPI,
  WebsocketStream: () => WebsocketStream,
  WithdrawHistory: () => WithdrawHistory,
  WorkingFloor: () => WorkingFloor,
  WsAccountTypes: () => types_exports9,
  WsMarketTypes: () => types_exports10,
  WsTradeTypes: () => types_exports11,
  WsUserDataTypes: () => methods_exports,
  WssTypes: () => methods_exports2
});
module.exports = __toCommonJS(src_exports);

// src/modules/restful/c2c/types.ts
var types_exports = {};

// src/modules/restful/margin/types.ts
var types_exports2 = {};

// src/modules/restful/market/types.ts
var types_exports3 = {};

// src/modules/restful/simpleEarn/types.ts
var types_exports4 = {};

// src/modules/restful/stream/types.ts
var types_exports5 = {};

// src/modules/restful/subAccount/types.ts
var types_exports6 = {};

// src/modules/restful/trade/types.ts
var types_exports7 = {};

// src/modules/restful/wallet/types.ts
var types_exports8 = {};

// src/modules/websocket/websocketAPI/account/types.ts
var types_exports9 = {};

// src/modules/websocket/websocketAPI/market/types.ts
var types_exports10 = {};

// src/modules/websocket/websocketAPI/trade/types.ts
var types_exports11 = {};

// src/modules/websocket/websocketAPI/userData/methods.ts
var methods_exports = {};

// src/modules/websocket/websocketStream/methods.ts
var methods_exports2 = {};

// src/helpers/utils.ts
var import_axios = __toESM(require("axios"));
var crypto = __toESM(require("crypto"));
async function httpRequest(config) {
  try {
    const { baseURL, apiKey, method, url, timeout, proxy, httpsAgent, data } = config;
    const options = {
      baseURL,
      timeout,
      proxy,
      httpsAgent,
      method,
      url,
      headers: {
        "Content-Type": "application/json",
        "X-MBX-APIKEY": apiKey
      },
      data
    };
    const response = await import_axios.default.request(options);
    return response.data;
  } catch (error) {
    if (import_axios.default.isAxiosError(error) && error.response) {
      throw error.response.data.msg;
    } else {
      throw new Error("Http request error");
    }
  }
}
function removeEmptyValue(obj) {
  if (!(obj instanceof Object))
    return {};
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== null && value !== void 0 && value !== "")
  );
}
function buildQueryString(params) {
  if (!params)
    return "";
  return Object.entries(params).map(stringifyKeyValuePair).join("&");
}
function stringifyKeyValuePair([key, value]) {
  const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value;
  return `${key}=${encodeURIComponent(valueString)}`;
}
function validateRequiredParameters(paramObject) {
  if (!paramObject || isEmptyValue(paramObject)) {
    throw new Error("Missing Parameters");
  }
  const emptyParams = [];
  Object.keys(paramObject).forEach((param) => {
    if (isEmptyValue(paramObject[param])) {
      emptyParams.push(param);
    }
  });
  if (emptyParams.length) {
    throw new Error("Missing Parameters");
  }
}
function isEmptyValue(input) {
  return !input && input !== false && input !== 0 || typeof input === "string" && /^\s+$/.test(input) || input instanceof Object && !Object.keys(input).length || Array.isArray(input) && !input.length;
}
function randomString() {
  return crypto.randomBytes(16).toString("hex");
}
function sortObject(obj) {
  return Object.keys(obj).sort().reduce((res, key) => {
    res[key] = obj[key];
    return res;
  }, {});
}

// src/setters/mixinBase.ts
var crypto2 = __toESM(require("crypto"));

// src/modules/restful/c2c/c2c.ts
function mixinC2c(base) {
  return class extends base {
    /**
    * Get ads detail by number {@link file://c2c-sapi-v7.1.pdf#2.getDetailByNo}
    *
    * @param {number} adsNo
    */
    async getDetailByNo(adsNo) {
      validateRequiredParameters({ adsNo });
      const url = this.prepareSignedPath(
        "/sapi/v1/c2c/ads/getDetailByNo",
        {
          adsNo
        }
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get ads list with pagination {@link file://c2c-sapi-v7.1.pdf#4.listWithPagination}
    * 
    *
    * @param {number} page
    * @param {number} rows
    * @param {object} [options]
    */
    async listWithPagination(page, rows, options) {
      validateRequiredParameters({ page, rows });
      const url = this.prepareSignedPath("/sapi/v1/c2c/ads/listWithPagination");
      const data = Object.assign(
        options ? options : {},
        {
          page,
          rows
        }
      );
      return await this.makeRequest("POST", url, data);
    }
    /**
    * Search ads with condition {@link file://c2c-sapi-v7.1.pdf#6.search}
    *
    * @param {string} asset - Crypto asset, e.g. USDT
    * @param {string} fiat - Fiat currency, e.g. MXN
    * @param {number} page - Page number to query. Start = 1
    * @param {number} rows - Rows to query per page. Suggested = 20
    * @param {string} tradeType - Used with BUY and SELL ads.
    * @param {object} [options]
    * @param {number} [options.additionalKycVerifyFilter] - 0 do not use this filter, return both. 1 return no need additional KYC verify ad only.
    * @param {number} [options.countries] - Adv launch countries. Return all if not present
    * @param {number} [options.filterType] - Filter type (tradable displays ads that users can trade, all displays all ads, considering expanding other filter types), effective after user login, default is 'all'
    * @param {number} [options.order] - Page order by
    * @param {string} [options.payTypes] - Payment method list, e.g. [BANK, WECHAT]
    * @param {string} [options.publisherType] - Adv publisher type (user, merchant). Return all if not present
    * @param {string} [options.sort] - Page sortting by (asc, desc)
    * @param {string} [options.transAmount] - Transaction amount
    */
    async search(asset, fiat, page, rows, tradeType, options) {
      validateRequiredParameters({ asset, fiat, page, rows, tradeType });
      const url = this.prepareSignedPath("/sapi/v1/c2c/ads/search");
      const data = Object.assign(
        options ? options : {},
        {
          asset,
          fiat,
          page,
          rows,
          tradeType
        }
      );
      return await this.makeRequest("POST", url, data);
    }
    /**
    * Retrieve user order history with pagination {@link file://c2c-sapi-v7.1.pdf#25.listUserOrderHistory}
    *
    * @param {object} [options]
    * @param {number} [options.page] - Page number to query. Start = 1
    * @param {number} [options.rows] - Rows to query per page. Suggested = 20
    * @param {number} [options.startTimestamp]
    * @param {number} [options.endTimestamp]
    * @param {string} [options.tradeType] - Used with BUY and SELL ads.
    */
    async listUserOrderHistory(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/c2c/orderMatch/listUserOrderHistory",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Retrieve user order history with pagination {@link file://c2c-sapi-v7.1.pdf#40.commissionRateOverview}
    *
    * @param {string} fiat - Fiat currency, e.g. MXN
    */
    async commissionRateOverview(fiat) {
      validateRequiredParameters({ fiat });
      const url = this.prepareSignedPath("/sapi/v1/c2c/commission-rate/overview");
      const data = Object.assign(
        {
          fiat
        }
      );
      return await this.makeRequest("POST", url, data);
    }
    /**
    * Get adv detail by number. (P2P API: https://p2p.binance.com/bapi)
    *
    * @param {number} advNo
    */
    async detailWithAdvertiser(advNo) {
      validateRequiredParameters({ advNo });
      const url = this.preparePath(
        "/bapi/c2c/v2/public/c2c/adv/detail-with-advertiser",
        {
          advNo
        }
      );
      return await this.makeRequest("GET", url);
    }
  };
}

// src/modules/restful/margin/margin.ts
function mixinMargin(base) {
  return class extends base {
    /**
    * Get All Margin Assets (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-margin-assets-market_data}
    * 
    * @param {object} [options]
    * @param {string} [options.asset]
    */
    async getAllMarginAssets(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/allAssets",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get All Cross Margin Pairs (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-cross-margin-pairs-market_data}
    * 
    * @param {object} [options]
    * @param {string} [options.symbol]
    */
    async getAllCrossMarginPairs(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/allPairs",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Margin PriceIndex (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-priceindex-market_data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    */
    async getMarginPriceIndex(symbol) {
      validateRequiredParameters({ symbol });
      const url = this.preparePath(
        "/sapi/v1/margin/priceIndex",
        {
          symbol: symbol.toUpperCase()
        }
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Margin Account New Order (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-new-order-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {Side} side
    * @param {OrderType} type - Order type
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {number} [options.quantity]
    * @param {number} [options.quoteOrderQty] - Quote quantity
    * @param {number} [options.price] - Order price
    * @param {number} [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
    * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
    * @param {number} [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
    * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON.
    * @param {SideEffectType} [options.sideEffectType] - Default `NO_SIDE_EFFECT`
    * @param {TimeInForce} [options.timeInForce] - Order time in force
    * @param {SelfTradePreventionMode} [options.selfTradePreventionMode] - The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE
    * @param {Boolean} [options.autoRepayAtCancel] - Only when MARGIN_BUY or AUTO_BORROW_REPAY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async marginAccountNewOrder(symbol, side, type, options) {
      validateRequiredParameters({ symbol, side, type });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/order",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            side,
            type
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Margin Account Cancel Order (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-order-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {number} [options.orderId] - Order id
    * @param {string} [options.origClientOrderId] - Order id from client
    * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async marginAccountCancelOrder(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/order",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("DELETE", url);
    }
    /**
    * Margin Account Cancel all Open Orders on a Symbol (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-all-open-orders-on-a-symbol-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async marginAccountCancelAllOpenOrdersOnASymbol(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/openOrders",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("DELETE", url);
    }
    /**
     * Adjust cross margin max leverage (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#adjust-cross-margin-max-leverage-user_data}
     * 
     * @param {number} maxLeverage - Can only adjust 3 , 5 or 10，Example: maxLeverage=10 for Cross Margin Pro ，maxLeverage = 5 or 3 for Cross Margin Classic
     */
    async adjustCrossMarginMaxLeverage(maxLeverage) {
      validateRequiredParameters({ maxLeverage });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/max-leverage",
        {
          maxLeverage
        }
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get Cross Margin Transfer History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-cross-margin-transfer-history-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {GetCrossMargingTransferHistoryType} [options.type] - Transfer Type
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {string} [options.isolatedSymbol] - Symbol in Isolated Margin
    * @param {string} [options.archived] - Default: false. Set to true for archived data from 6 months ago
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getCrossMarginTransferHistory(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/transfer",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Interest History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-interest-history-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {string} [options.isolatedSymbol] - Isolated symbol
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {string} [options.archived] - Default: false. Set to true for archived data from 6 months ago
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getInterestHistory(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/interestHistory",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Force Liquidation Record (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-force-liquidation-record-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {string} [options.isolatedSymbol] - Isolated symbol
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getForceLiquidationRecord(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/forceLiquidationRec",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Cross Margin Account Details (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-cross-margin-account-details-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getCrossMarginAccountDetails(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/account",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Margin Account Order (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-order-user_data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {number} [options.orderId] - Order id
    * @param {string} [options.origClientOrderId] - Order id from client
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getMarginAccountOrder(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/order",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Margin Account Open Orders (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-open-orders-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getMarginAccountOpenOrders(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/openOrders",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Margin Account All Orders (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-all-orders-user_data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {number} [options.orderId] - Order id
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit] - Default 500; max 1000.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getMarginAccountAllOrders(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/allOrders",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Margin Account New OCO (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-new-oco-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {Side} side
    * @param {number} quantity
    * @param {number} price - Order price
    * @param {number} stopPrice
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {string} [options.listClientOrderId] - A unique Id for the entire orderList
    * @param {string} [options.limitClientOrderId] - A unique Id for the limit order
    * @param {number} [options.limitIcebergQty]
    * @param {string} [options.stopClientOrderId] - A unique Id for the stop loss/stop loss limit leg
    * @param {number} [options.stopLimitPrice] - If provided, stopLimitTimeInForce is required.
    * @param {number} [options.stopIcebergQty]
    * @param {StopLimitTimeInForce} [options.stopLimitTimeInForce]
    * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON.
    * @param {SideEffectType} [options.sideEffectType] - Default `NO_SIDE_EFFECT`
    * @param {SelfTradePreventionMode} [options.selfTradePreventionMode] - The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE
    * @param {Boolean} [options.autoRepayAtCancel] - Only when MARGIN_BUY or AUTO_BORROW_REPAY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async marginAccountNewOco(symbol, side, quantity, price, stopPrice, options) {
      validateRequiredParameters({ symbol, side, quantity, price, stopPrice });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/order/oco",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            side,
            quantity,
            price,
            stopPrice
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Margin Account Cancel OCO (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-oco-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {number} [options.orderListId] - Order list id
    * @param {string} [options.listClientOrderId] - A unique Id for the entire orderList
    * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async marginAccountCancelOco(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/orderList",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("DELETE", url);
    }
    /**
    * Query Margin Account OCO (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-oco-user_data}
    *
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {string} [options.symbol] - Mandatory for isolated margin, not supported for cross margin
    * @param {number} [options.orderListId] - Order list id
    * @param {string} [options.origClientOrderId] - Order id from client
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getMarginAccountOco(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/orderList",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Margin Account all OCO (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-all-oco-user_data}
    *
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {string} [options.symbol] - Mandatory for isolated margin, not supported for cross margin
    * @param {string} [options.fromId] - If supplied, neither `startTime` or `endTime` can be provided
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit] - Default Value: 500; Max Value: 1000
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getMarginAccountAllOco(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/allOrderList",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Margin Account Open OCO (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-open-oco-user_data}
    *
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {string} [options.symbol] - Mandatory for isolated margin, not supported for cross margin
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getMarginAccountOpenOco(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/openOrderList",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Margin Account Trade List (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-trade-list-user_data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {number} [options.orderId]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
    * @param {number} [options.limit] - Default 500; max 1000.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getMarginAccountTradeList(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/myTrades",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Max Borrow (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-max-borrow-user_data}
    *
    * @param {string} asset
    * @param {object} [options]
    * @param {string} [options.isolatedSymbol] - Isolated symbol
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getMaxBorrow(asset, options) {
      validateRequiredParameters({ asset });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/maxBorrowable",
        Object.assign(
          options ? options : {},
          {
            asset: asset.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Max Transfer-Out Amount (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-max-transfer-out-amount-user_data}
    *
    * @param {string} asset
    * @param {object} [options]
    * @param {string} [options.isolatedSymbol] - Isolated symbol
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getMaxTransferoutAmount(asset, options) {
      validateRequiredParameters({ asset });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/maxTransferable",
        Object.assign(
          options ? options : {},
          {
            asset: asset.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Summary of Margin account (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-summary-of-margin-account-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSummaryOfMarginAccount(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/tradeCoeff",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Isolated Margin Account Info (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-account-info-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.symbols] - Max 5 symbols can be sent; separated by ','
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getIsolatedMarginAccountInfo(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/isolated/account",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Disable Isolated Margin Account (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#disable-isolated-margin-account-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async disableIsolatedMarginAccount(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/isolated/account",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("DELETE", url);
    }
    /**
    * Enable Isolated Margin Account (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#enable-isolated-margin-account-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async enableIsolatedMarginAccount(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/isolated/account",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query Enabled Isolated Margin Account Limit (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-enabled-isolated-margin-account-limit-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getEnabledIsolatedMarginAccountLimit(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/isolated/accountLimit",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get All Isolated Margin Symbol (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-isolated-margin-symbol-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.symbol]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getAllIsolatedMarginSymbol(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/isolated/allPairs",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#toggle-bnb-burn-on-spot-trade-and-margin-interest-user_data}
    *
    * @param {object} [options]
    * @param {SpotBNBBurn} [options.spotBNBBurn] - Determines whether to use BNB to pay for trading fees on SPOT
    * @param {InterestBNBBurn} [options.interestBNBBurn] - Determines whether to use BNB to pay for margin loan interest
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async toggleBnbBurnOnSpotTradeAndMarginInterest(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/bnbBurn",
        options ? options : {}
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get BNB Burn Status (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-bnb-burn-status-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getBnbBurnStatus(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/bnbBurn",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Margin Interest Rate History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-interest-rate-history-user_data}
    *
    * @param {string} asset
    * @param {object} [options]
    * @param {number} [options.vipLevel] - Defaults to user vip level
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async marginInterestRateHistory(asset, options) {
      validateRequiredParameters({ asset });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/interestRateHistory",
        Object.assign(
          options ? options : {},
          {
            asset: asset.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Cross Margin Fee Data (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-cross-margin-fee-data-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.vipLevel] - Defaults to user vip level
    * @param {string} [options.coin] - Coin name
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getCrossMarginFeeData(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/crossMarginData",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Isolated Margin Fee Data (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-fee-data-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.vipLevel] - Defaults to user vip level
    * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getIsolatedMarginFeeData(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/isolatedMarginData",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Isolated Margin Tier Data (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-tier-data-user_data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {string} [options.tier] - All margin tier data will be returned if tier is omitted
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getIsolatedMarginTierData(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/isolatedMarginTier",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Current Margin Order Count Usage (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#query-current-margin-order-count-usage-trade}
    *
    * @param {object} [options]
    * @param {string} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    * @param {string} [options.symbol] - isolated symbol, mandatory for isolated margin
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getCurrentMarginOrderCountUsage(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/rateLimit/order",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Cross margin collateral ratio (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#cross-margin-collateral-ratio-market_data}
    *
    */
    async crossMarginCollateralRatio() {
      return await this.makeRequest("GET", "/sapi/v1/margin/crossMarginCollateralRatio");
    }
    /**
    * Get Small Liability Exchange Coin List (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-small-liability-exchange-coin-list-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSmallLiabilityExchangeCoinList(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/exchange-small-liability",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Small Liability Exchange (MARGIN) {@link https://binance-docs.github.io/apidocs/spot/en/#small-liability-exchange-margin}
    *
    * @param {string[]} assetNames - The assets list of small liability exchange, Example: assetNames = BTC,ETH
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async smallLiabilityExchange(assetNames, options) {
      validateRequiredParameters({ assetNames });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/exchange-small-liability ",
        Object.assign(
          options ? options : {},
          {
            assetNames
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get Small Liability Exchange History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-small-liability-exchange-history-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSmallLiabilityExchangeHistory(current, size, options) {
      validateRequiredParameters({ current, size });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/exchange-small-liability-history",
        Object.assign(
          options ? options : {},
          {
            current,
            size
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get a future hourly interest rate (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-a-future-hourly-interest-rate-user_data}
    *
    * @param {string} assets - List of assets, separated by commas, up to 20
    * @param {IsIsolatedMargin} isIsolated - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
    */
    async getFutureHoulyInterestRate(assets, isIsolated) {
      validateRequiredParameters({ assets, isIsolated });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/next-hourly-interest-rate",
        {
          assets,
          isIsolated
        }
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get tokens or symbols delist schedule for cross margin and isolated margin (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-tokens-or-symbols-delist-schedule-for-cross-margin-and-isolated-margin-market_data}
    * 
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMargin(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/delist-schedule",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Get the available margin inventory (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-available-inventory-user_data}
     * 
     * @param {string} type - MARGIN, ISOLATED
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    async getMarginAvailableInventory(type, options) {
      validateRequiredParameters({ type });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/available-inventory",
        Object.assign(
          options ? options : {},
          {
            type
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Margin manual liquidation (MARGIN) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-manual-liquidation-margin}
     * 
     * @param {string} type - MARGIN, ISOLATED
     * @param {object} [options]
     * @param {string} [options.symbol] - When type selects ISOLATED, symbol must be filled in
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    async marginManualLiquidation(type, options) {
      validateRequiredParameters({ type });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/manual-liquidation",
        Object.assign(
          options ? options : {},
          {
            type
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
     * Get the liability assets leverage bracket in Cross Margin Pro Mode (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-liability-coin-leverage-bracket-in-cross-margin-pro-mode-market_data}
     */
    async getLeverageBracket() {
      const url = this.prepareSignedPath("/sapi/v1/margin/leverageBracket");
      return await this.makeRequest("GET", url);
    }
    /**
     * Margin account borrow/repay(MARGIN) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-borrow-repay-margin}
     * 
     * @param {string} asset
     * @param {string} isIsolated - TRUE for Isolated Margin, FALSE for Cross Margin, Default FALSE
     * @param {string} symbol - Only for Isolated margin
     * @param {string} amount
     * @param {MarginBorrowRepayType} type - BORROW or REPAY
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    async marginAccountBorrowRepay(asset, isIsolated, symbol, amount, type, options) {
      validateRequiredParameters({ asset, isIsolated, symbol, amount, type });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/borrow-repay",
        Object.assign(
          options ? options : {},
          {
            asset,
            isIsolated,
            symbol,
            amount,
            type
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
     * Query borrow/repay records in Margin account(USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-borrow-repay-records-in-margin-account-user_data}
     * 
     * @param {MarginBorrowRepayType} type - BORROW or REPAY
     * @param {object} [options]
     * @param {string} [options.asset]
     * @param {string} [options.isolatedSymbol] - Symbol in Isolated Margin
     * @param {number} [options.txId]
     * @param {number} [options.startTime]	
     * @param {number} [options.endTime]
     * @param {number} [options.current] - Current querying page. Start from 1. Default:1
     * @param {number} [options.size] - Default:10 Max:100
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    async getBorrowRepayRecords(type, options) {
      validateRequiredParameters({ type });
      const url = this.prepareSignedPath(
        "/sapi/v1/margin/borrow-repay",
        Object.assign(
          options ? options : {},
          {
            type
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
  };
}

// src/modules/restful/market/market.ts
function mixinMarket(base) {
  return class extends base {
    /**
    * Test Connectivity {@link https://binance-docs.github.io/apidocs/spot/en/#test-connectivity}
    */
    async testConnectivity() {
      return await this.makeRequest("GET", "/api/v3/ping");
    }
    /**
    * Check Server Time {@link https://binance-docs.github.io/apidocs/spot/en/#check-server-time}
    */
    async checkServerTime() {
      return await this.makeRequest("GET", "/api/v3/time");
    }
    /**
    * Exchange Information {@link https://binance-docs.github.io/apidocs/spot/en/#exchange-information}
    *
    * @param {object} [options]
    * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
    * @param {string[]} [options.symbols]
    * @param {string[]} [options.permissions]
    */
    async exchangeInformation(options) {
      const url = this.preparePath(
        "/api/v3/exchangeInfo",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Order Book {@link https://binance-docs.github.io/apidocs/spot/en/#order-book}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.limit] - If limit > 5000, then the response will truncate to 5000
    */
    async orderBook(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.preparePath(
        "/api/v3/depth",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Recent Trades List {@link https://binance-docs.github.io/apidocs/spot/en/#recent-trades-list}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.limit] - Default 500; max 1000.
    */
    async recentTradesList(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.preparePath(
        "/api/v3/trades",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Old Trade Lookup (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#old-trade-lookup-market_data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.limit] - Default 500; max 1000.
    * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
    */
    async oldTradeLookup(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.preparePath(
        "/api/v3/historicalTrades",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Compressed/Aggregate Trades List {@link https://binance-docs.github.io/apidocs/spot/en/#compressed-aggregate-trades-list}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit] - Default 500; max 1000.
    */
    async compressedAggregateTradesList(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.preparePath(
        "/api/v3/aggTrades",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Kline/Candlestick Data {@link https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {Interval} interval - kline intervals
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.timeZone] - Default: 0 (UTC)
    * @param {number} [options.limit] - Default 500; max 1000.
    */
    async klineCandlestickData(symbol, interval, options) {
      validateRequiredParameters({ symbol, interval });
      const url = this.preparePath(
        "/api/v3/klines",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            interval
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * UIKlines {@link https://binance-docs.github.io/apidocs/spot/en/#uiklines}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {Interval} interval - kline intervals
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.timeZone] - Default: 0 (UTC)
    * @param {number} [options.limit] - Default 500; max 1000.
    */
    async uiklines(symbol, interval, options) {
      validateRequiredParameters({ symbol, interval });
      const url = this.preparePath(
        "/api/v3/uiKlines",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            interval
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Current Average Price {@link https://binance-docs.github.io/apidocs/spot/en/#current-average-price}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    */
    async currentAveragePrice(symbol) {
      validateRequiredParameters({ symbol });
      const url = this.preparePath(
        "/api/v3/avgPrice",
        {
          symbol: symbol.toUpperCase()
        }
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * 24hr Ticker Price Change Statistics {@link https://binance-docs.github.io/apidocs/spot/en/#24hr-ticker-price-change-statistics}
    *
    * @param {object} [options]
    * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
    * @param {string} [options.symbols]
    * @param {string} [options.type] - Supported values: FULL or MINI., If none provided, the default is FULL
    */
    async ticker24hr(options) {
      const url = this.preparePath(
        "/api/v3/ticker/24hr",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Symbol Price Ticker {@link https://binance-docs.github.io/apidocs/spot/en/#symbol-price-ticker}
    *
    * @param {object} [options]
    * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
    * @param {string} [options.symbols]
    */
    async symbolPriceTicker(options) {
      const url = this.preparePath(
        "/api/v3/ticker/price",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Symbol Order Book Ticker {@link https://binance-docs.github.io/apidocs/spot/en/#symbol-order-book-ticker}
    *
    * @param {object} [options]
    * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
    * @param {string} [options.symbols]
    */
    async symbolOrderBookTicker(options) {
      const url = this.preparePath(
        "/api/v3/ticker/bookTicker",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Rolling window price change statistics {@link https://binance-docs.github.io/apidocs/spot/en/#rolling-window-price-change-statistics}
    *
    * @param {object} [options]
    * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
    * @param {string} [options.symbols]
    * @param {string} [options.windowSize] - Defaults to 1d if no parameter provided., Supported windowSize values:, 1m,2m....59m for minutes, 1h, 2h....23h - for hours, 1d...7d - for days., , Units cannot be combined (e.g. 1d2h is not allowed)
    * @param {string} [options.type] - Supported values: FULL or MINI., If none provided, the default is FULL
    */
    async rollingWindowPriceChangeStatistics(options) {
      const url = this.preparePath(
        "/api/v3/ticker",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Trading Day Ticker {@link https://binance-docs.github.io/apidocs/spot/en/#trading-day-ticker}
     * 
     * @param {string} symbol - Trading symbol, e.g. BNBUSDT
     * @param {object} [options]
     * @param {string} [options.symbols] - The maximum number of symbols allowed in a request is 100.
     * @param {string} [options.timeZone] - Default: 0 (UTC)
     * @param {string} [options.type] - Supported values: FULL or MINI., If none provided, the default is FULL
     */
    async tradingDayTicker(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.preparePath(
        "/api/v3/ticker/tradingDay",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
  };
}

// src/modules/restful/simpleEarn/simpleEarn.ts
function mixinSimpleEarn(base) {
  return class extends base {
    /**
    * Get Simple Earn Flexible Product List (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-simple-earn-flexible-product-list-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSimpleEarnFlexibleProductList(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/list",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Simple Earn Locked Product List (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-simple-earn-locked-product-list-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSimpleEarnLockedProductList(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/list",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Subscribe Flexible Product (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#subscribe-flexible-product-trade}
    *
    * @param {string} productId
    * @param {number} amount
    * @param {object} [options]
    * @param {boolean} [options.autoSubscribe] - true or false, default true.
    * @param {string} [options.sourceAccount] - SPOT,FUND,ALL, default SPOT
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async subscribeFlexibleProduct(productId, amount, options) {
      validateRequiredParameters({ productId, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/subscribe",
        Object.assign(
          options ? options : {},
          {
            productId,
            amount
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Subscribe Locked Product (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#subscribe-locked-product-trade}
    *
    * @param {string} projectId
    * @param {number} amount
    * @param {object} [options]
    * @param {boolean} [options.autoSubscribe] - true or false, default true.
    * @param {string} [options.sourceAccount] - SPOT,FUND,ALL, default SPOT
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async subscribeLockedProduct(projectId, amount, options) {
      validateRequiredParameters({ projectId, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/subscribe",
        Object.assign(
          options ? options : {},
          {
            projectId,
            amount
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Redeem Flexible Product (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#redeem-flexible-product-trade}
    *
    * @param {string} productId
    * @param {object} [options]
    * @param {boolean} [options.redeemAll] - true or false, default to false
    * @param {number} [options.amount] - if redeemAll is false, amount is mandatory
    * @param {string} [options.destAccount] - SPOT,FUND,ALL, default SPOT
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async redeemFlexibleProduct(productId, options) {
      validateRequiredParameters({ productId });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/redeem",
        Object.assign(
          options ? options : {},
          {
            productId
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Redeem Locked Product (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#redeem-locked-product-trade}
    *
    * @param {string} positionId - 1234
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async redeemLockedProduct(positionId, options) {
      validateRequiredParameters({ positionId });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/redeem",
        Object.assign(
          options ? options : {},
          {
            positionId
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get Flexible Product Position (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-flexible-product-position-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {string} [options.productId]
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getFlexibleProductPosition(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/position",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Locked Product Position (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-locked-product-position-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {string} [options.positionId]
    * @param {string} [options.projectId]
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getLockedProductPosition(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/position",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Simple Account (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#simple-account-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async simpleAccount(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/account",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Flexible Subscription Record (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-flexible-subscription-record-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.productId]
    * @param {string} [options.purchaseId]
    * @param {string} [options.asset]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getFlexibleSubscriptionRecord(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/history/subscriptionRecord",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Locked Subscription Record (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-locked-subscription-record-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.purchaseId]
    * @param {string} [options.asset]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getLockedSubscriptionRecord(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/history/subscriptionRecord",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Flexible Redemption Record (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-flexible-redemption-record-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.productId]
    * @param {string} [options.redeemId]
    * @param {string} [options.asset]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    */
    async getFlexibleRedemptionRecord(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/history/redemptionRecord",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Locked Redemption Record (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-locked-redemption-record-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.positionId]
    * @param {string} [options.redeemId]
    * @param {string} [options.asset]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getLockedRedemptionRecord(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/history/redemptionRecord",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Flexible Rewards History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-flexible-rewards-history-user_data}
    *
    * @param {string} type - "BONUS", "REALTIME", "REWARDS"
    * @param {object} [options]
    * @param {string} [options.productId]
    * @param {string} [options.asset]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    */
    async getFlexibleRewardsHistory(type, options) {
      validateRequiredParameters({ type });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/history/rewardsRecord",
        Object.assign(
          options ? options : {},
          {
            type
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Locked Rewards History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-locked-rewards-history-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.positionId]
    * @param {string} [options.asset]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getLockedRewardsHistory(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/history/rewardsRecord",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Set Flexible Auto Subscribe (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#set-flexible-auto-subscribe-user_data}
    *
    * @param {string} productId
    * @param {boolean} autoSubscribe - true or false
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async setFlexibleAutoSubscribe(productId, autoSubscribe, options) {
      validateRequiredParameters({ productId, autoSubscribe });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/setAutoSubscribe",
        Object.assign(
          options ? options : {},
          {
            productId,
            autoSubscribe
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Set Locked Auto Subscribe (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#set-locked-auto-subscribe-user_data}
    *
    * @param {string} positionId
    * @param {boolean} autoSubscribe - true or false
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async setLockedAutoSubscribe(positionId, autoSubscribe, options) {
      validateRequiredParameters({ positionId, autoSubscribe });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/setAutoSubscribe",
        Object.assign(
          options ? options : {},
          {
            positionId,
            autoSubscribe
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get Flexible Personal Left Quota (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-flexible-personal-left-quota-user_data}
    *
    * @param {string} productId
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getFlexiblePersonalLeftQuota(productId, options) {
      validateRequiredParameters({ productId });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/personalLeftQuota",
        Object.assign(
          options ? options : {},
          {
            productId
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Locked Personal Left Quota (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-locked-personal-left-quota-user_data}
    *
    * @param {string} projectId
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getLockedPersonalLeftQuota(projectId, options) {
      validateRequiredParameters({ projectId });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/personalLeftQuota",
        Object.assign(
          options ? options : {},
          {
            projectId
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Flexible Subscription Preview (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-flexible-subscription-preview-user_data}
    *
    * @param {string} productId
    * @param {number} amount
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getFlexibleSubscriptionPreview(productId, amount, options) {
      validateRequiredParameters({ productId, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/subscriptionPreview",
        Object.assign(
          options ? options : {},
          {
            productId,
            amount
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Locked Subscription Preview (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-locked-subscription-preview-user_data}
    *
    * @param {string} projectId
    * @param {number} amount
    * @param {object} [options]
    * @param {boolean} [options.autoSubscribe] - true or false, default true.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getLockedSubscriptionPreview(projectId, amount, options) {
      validateRequiredParameters({ projectId, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/locked/subscriptionPreview",
        Object.assign(
          options ? options : {},
          {
            projectId,
            amount
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Rate History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-rate-history-user_data}
    *
    * @param {string} productId
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getRateHistory(productId, options) {
      validateRequiredParameters({ productId });
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/history/rateHistory",
        Object.assign(
          options ? options : {},
          {
            productId
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Collateral Record (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-collateral-record-user_data}
    *
    * @param {string} productId
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getCollateralRecord(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/simple-earn/flexible/history/collateralRecord",
        Object.assign(
          options ? options : {}
        )
      );
      return await this.makeRequest("GET", url);
    }
  };
}

// src/modules/restful/stream/stream.ts
function mixinStream(base) {
  return class extends base {
    /**
    * Create a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#create-a-listenkey-user_stream}
    */
    async createListenKey() {
      return await this.makeRequest("POST", "/api/v3/userDataStream");
    }
    /**
    * Ping/Keep-alive a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#ping-keep-alive-a-listenkey-user_stream}
    *
    * @param {string} listenKey
    */
    async renewListenKey(listenKey) {
      validateRequiredParameters({ listenKey });
      const url = this.preparePath("/api/v3/userDataStream", { listenKey });
      return await this.makeRequest("PUT", url);
    }
    /**
    * Close a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#close-a-listenkey-user_stream}
    *
    * @param {string} listenKey
    */
    async closeListenKey(listenKey) {
      validateRequiredParameters({ listenKey });
      const url = this.preparePath("/api/v3/userDataStream", { listenKey });
      return await this.makeRequest("DELETE", url);
    }
    /**
    * Create a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#create-a-listenkey-user_stream-2}
    */
    async createMarginListenKey() {
      return await this.makeRequest("POST", "/api/v1/userDataStream");
    }
    /**
    * Ping/Keep-alive a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#ping-keep-alive-a-listenkey-user_stream-2}
    *
    * @param {string} listenKey
    */
    async renewMarginListenKey(listenKey) {
      validateRequiredParameters({ listenKey });
      const url = this.preparePath("/api/v1/userDataStream", { listenKey });
      return await this.makeRequest("PUT", url);
    }
    /**
    * Close a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#close-a-listenkey-user_stream-2}
    *
    * @param {string} listenKey
    */
    async closeMarginListenKey(listenKey) {
      validateRequiredParameters({ listenKey });
      const url = this.preparePath("/api/v1/userDataStream", { listenKey });
      return await this.makeRequest("DELETE", url);
    }
    /**
    * Generate a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-isolated-margin}
    * 
    * @param {string} symbol
    */
    async createIsolatedMarginListenKey(symbol) {
      validateRequiredParameters({ symbol });
      const url = this.preparePath("/sapi/v1/userDataStream/isolated", { symbol });
      return await this.makeRequest("POST", url);
    }
    /**
    * Ping/Keep-alive a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#ping-keep-alive-a-listen-key-user_stream}
    *
    * @param {string} symbol
    * @param {string} listenKey
    */
    async renewIsolatedMarginListenKey(symbol, listenKey) {
      validateRequiredParameters({ symbol, listenKey });
      const url = this.preparePath("/sapi/v1/userDataStream/isolated", { listenKey, symbol });
      return await this.makeRequest("PUT", url);
    }
    /**
    * Close a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#close-a-listenkey-user_stream-3}
    *
    * @param {string} symbol
    * @param {string} listenKey
    */
    async closeIsolatedMarginListenKey(symbol, listenKey) {
      const url = this.preparePath("/sapi/v1/userDataStream/isolated", { listenKey, symbol });
      return await this.makeRequest("DELETE", url);
    }
  };
}

// src/modules/restful/subAccount/subAccount.ts
function mixinSubAccount(base) {
  return class extends base {
    /**
    * Create a Virtual Sub-account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#create-a-virtual-sub-account-for-master-account}
    *
    * @param {string} subAccountString - Please input a string. We will create a virtual email using that string for you to register
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async createAVirtualSubAccount(subAccountString, options) {
      validateRequiredParameters({ subAccountString });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/virtualSubAccount",
        Object.assign(
          options ? options : {},
          {
            subAccountString
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query Sub-account List (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-list-for-master-account}
    *
    * @param {object} [options]
    * @param {string} [options.email] - Sub-account email
    * @param {IsFreeze} [options.isFreeze]
    * @param {number} [options.page] - Default 1
    * @param {number} [options.limit] - Default 1; max 200
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSubAccountList(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/list",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Sub-account Spot Asset Transfer History (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-spot-asset-transfer-history-for-master-account}
    *
    * @param {object} [options]
    * @param {string} [options.fromEmail] - Sub-account email
    * @param {string} [options.toEmail] - Sub-account email
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.page] - Default 1
    * @param {number} [options.limit] - Default 1
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSubAccountSpotAssetTransferHistory(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/sub/transfer/history",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Sub-account Futures Asset Transfer History (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-futures-asset-transfer-history-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {number} futuresType - 1:USDT-margined Futures, 2: Coin-margined Futures
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.page] - Default 1
    * @param {number} [options.limit] - Default value: 50, Max value: 500
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSubAccountFuturesAssetTransferHistory(email, futuresType, options) {
      validateRequiredParameters({ email, futuresType });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/futures/internalTransfer",
        Object.assign(
          options ? options : {},
          {
            email,
            futuresType
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Sub-account Futures Asset Transfer (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#sub-account-futures-asset-transfer-for-master-account}
    *
    * @param {string} fromEmail - Sender email
    * @param {string} toEmail - Recipient email
    * @param {number} futuresType - 1:USDT-margined Futures,2: Coin-margined Futures
    * @param {string} asset
    * @param {number} amount
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async subAccountFuturesAssetTransfer(fromEmail, toEmail, futuresType, asset, amount, options) {
      validateRequiredParameters({ fromEmail, toEmail, futuresType, asset, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/futures/internalTransfer",
        Object.assign(
          options ? options : {},
          {
            fromEmail,
            toEmail,
            futuresType,
            asset: asset.toUpperCase(),
            amount
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query Sub-account Assets (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-assets-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSubAccountAssets(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v3/sub-account/assets",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Sub-account Spot Assets Summary (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-spot-assets-summary-for-master-account}
    *
    * @param {object} [options]
    * @param {string} [options.email] - Sub-account email
    * @param {number} [options.page] - Default 1
    * @param {number} [options.size] - Default:10 Max:20
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSubAccountSpotAssetsSummary(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/spotSummary",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Sub-account Deposit Address (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#sub-account-spot-assets-summary-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {string} coin - Coin name
    * @param {object} [options]
    * @param {string} [options.network]
    * @param {number} [options.amount]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getSubAccountDepositAddress(email, coin, options) {
      validateRequiredParameters({ email, coin });
      const url = this.prepareSignedPath(
        "/sapi/v1/capital/deposit/subAddress",
        Object.assign(
          options ? options : {},
          {
            email,
            coin
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Sub-account Deposit History (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#sub-account-deposit-history-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {object} [options]
    * @param {string} [options.coin] - Coin name
    * @param {number} [options.status] - 0(0:pending,6: credited but cannot withdraw, 1:success)
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit]
    * @param {number} [options.offset]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    * @param {string} [options.txId]
    */
    async subAccountDepositHistory(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/capital/deposit/subHisrec",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Sub-account's Status on Margin/Futures {@link https://binance-docs.github.io/apidocs/spot/en/#sub-account-status-on-margin-futures-for-master-account}
    *
    * @param {object} [options]
    * @param {string} [options.email] - Sub-account email
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async subAccountStatusOnMarginFutures(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/status",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Enable Margin for Sub-account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#enable-margin-for-sub-account-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async enableMarginForSubAccount(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/margin/enable",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get Detail on Sub-account's Margin Account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#detail-on-sub-account-margin-account-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async detailOnSubAccountMarginAccount(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/margin/account",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Summary of Sub-account's Margin Account {@link https://binance-docs.github.io/apidocs/spot/en/#summary-of-sub-account-margin-account-for-master-account}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async summaryOfSubAccountMarginAccount(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/margin/accountSummary",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Enable Futures for Sub-account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#enable-futures-for-sub-account-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async enableFuturesForSubAccount(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/futures/enable",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get Detail on Sub-account's Futures Account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#detail-on-sub-account-futures-account-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async detailOnSubAccountFuturesAccount(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/futures/account",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Summary of Sub-account's Futures Account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#summary-of-sub-account-futures-account-for-master-account}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async summaryOfSubAccountFuturesAccount(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/futures/accountSummary",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Futures Position-Risk of Sub-account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#futures-position-risk-of-sub-account-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async futuresPositionriskOfSubAccount(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/futures/positionRisk",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Futures Transfer for Sub-account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#transfer-for-sub-account-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {string} asset
    * @param {number} amount
    * @param {number} type - * `1` - transfer from subAccount spot account to its USDT-margined futures account, * `2` - transfer from subAccount USDT-margined futures account to its spot account, * `3` - transfer from subAccount spot account to its COIN-margined futures account, * `4` - transfer from subAccount COIN-margined futures account to its spot account
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async transferForSubAccount(email, asset, amount, type, options) {
      validateRequiredParameters({ email, asset, amount, type });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/futures/transfer",
        Object.assign(
          options ? options : {},
          {
            email,
            asset: asset.toUpperCase(),
            amount,
            type
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Margin Transfer for Sub-account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-transfer-for-sub-account-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {string} asset
    * @param {number} amount
    * @param {number} type - * `1` - transfer from subAccount spot account to margin account, * `2` - transfer from subAccount margin account to its spot account
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async marginTransferForSubAccount(email, asset, amount, type, options) {
      validateRequiredParameters({ email, asset, amount, type });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/margin/transfer",
        Object.assign(
          options ? options : {},
          {
            email,
            asset: asset.toUpperCase(),
            amount,
            type
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Transfer to Sub-account of Same Master (For Sub-account) {@link https://binance-docs.github.io/apidocs/spot/en/#transfer-to-sub-account-of-same-master-for-sub-account}
    *
    * @param {string} toEmail - Recipient email
    * @param {string} asset
    * @param {number} amount
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async transferToSubAccountOfSameMaster(toEmail, asset, amount, options) {
      validateRequiredParameters({ toEmail, asset, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/transfer/subToSub",
        Object.assign(
          options ? options : {},
          {
            toEmail,
            asset: asset.toUpperCase(),
            amount
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Transfer to Master (For Sub-account) {@link https://binance-docs.github.io/apidocs/spot/en/#transfer-to-master-for-sub-account}
    *
    * @param {string} asset
    * @param {number} amount
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async transferToMaster(asset, amount, options) {
      validateRequiredParameters({ asset, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/transfer/subToMaster",
        Object.assign(
          options ? options : {},
          {
            asset: asset.toUpperCase(),
            amount
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Sub-account Transfer History (For Sub-account) {@link https://binance-docs.github.io/apidocs/spot/en/#sub-account-transfer-history-for-sub-account}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {number} [options.type] - * `1` - transfer in, * `2` - transfer out
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit] - Default 500; max 1000.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async subAccountTransferHistory(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/transfer/subUserHistory",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Universal Transfer (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#universal-transfer-for-master-account}
    *
    * @param {FromAccountType} fromAccountType
    * @param {ToAccountType} toAccountType
    * @param {string} asset
    * @param {number} amount
    * @param {object} [options]
    * @param {string} [options.fromEmail] - Sub-account email
    * @param {string} [options.toEmail] - Sub-account email
    * @param {string} [options.clientTranId]
    * @param {string} [options.symbol] - Only supported under ISOLATED_MARGIN type
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async universalTransfer(fromAccountType, toAccountType, asset, amount, options) {
      validateRequiredParameters({ fromAccountType, toAccountType, asset, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/universalTransfer",
        Object.assign(
          options ? options : {},
          {
            fromAccountType,
            toAccountType,
            asset: asset.toUpperCase(),
            amount
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query Universal Transfer History (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#query-universal-transfer-history-for-master-account}
    *
    * @param {object} [options]
    * @param {string} [options.fromEmail] - Sub-account email
    * @param {string} [options.toEmail] - Sub-account email
    * @param {string} [options.clientTranId]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.page] - Default 1
    * @param {number} [options.limit] - Default 500, Max 500
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getUniversalTransferHistory(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/universalTransfer",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Detail on Sub-account's Futures Account V2 (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#detail-on-sub-account-futures-account-v2-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {number} futuresType - * `1` - USDT Margined Futures, * `2` - COIN Margined Futures
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getDetailOnSubAccountFuturesAccountV2(email, futuresType, options) {
      validateRequiredParameters({ email, futuresType });
      const url = this.prepareSignedPath(
        "/sapi/v2/sub-account/futures/account",
        Object.assign(
          options ? options : {},
          {
            email,
            futuresType
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Summary of Sub-account's Futures Account V2 (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#summary-of-sub-account-futures-account-v2-for-master-account}
    *
    * @param {number} futuresType - * `1` - USDT Margined Futures, * `2` - COIN Margined Futures
    * @param {object} [options]
    * @param {number} [options.page] - Default 1
    * @param {number} [options.limit] - Default 10, Max 20
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async summaryOfSubAccountFuturesAccountV2(futuresType, options) {
      validateRequiredParameters({ futuresType });
      const url = this.prepareSignedPath(
        "/sapi/v2/sub-account/futures/accountSummary",
        Object.assign(
          options ? options : {},
          {
            futuresType
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Futures Position-Risk of Sub-account V2 (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#futures-position-risk-of-sub-account-v2-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {number} futuresType - * `1` - USDT Margined Futures, * `2` - COIN Margined Futures
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async futuresPositionriskOfSubAccountV2(email, futuresType, options) {
      validateRequiredParameters({ email, futuresType });
      const url = this.prepareSignedPath(
        "/sapi/v2/sub-account/futures/positionRisk",
        Object.assign(
          options ? options : {},
          {
            email,
            futuresType
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Enable Leverage Token for Sub-account (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#enable-leverage-token-for-sub-account-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {boolean} enableBlvt - Only true for now
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async enableLeverageTokenForSubAccount(email, enableBlvt, options) {
      validateRequiredParameters({ email, enableBlvt });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/blvt/enable",
        Object.assign(
          options ? options : {},
          {
            email,
            enableBlvt
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get IP Restriction for a Sub-account API Key (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#get-ip-restriction-for-a-sub-account-api-key-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {string} subAccountApiKey
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getIpRestrictionForASubAccountApiKey(email, subAccountApiKey, options) {
      validateRequiredParameters({ email, subAccountApiKey });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/subAccountApi/ipRestriction",
        Object.assign(
          options ? options : {},
          {
            email,
            subAccountApiKey
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Delete IP List for a Sub-account API Key (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#delete-ip-list-for-a-sub-account-api-key-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {string} subAccountApiKey
    * @param {object} [options]
    * @param {string} [options.ipAddress] - Can be added in batches, separated by commas
    * @param {string} [options.thirdPartyName] - third party IP list name
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async deleteIpListForASubAccountApiKey(email, subAccountApiKey, options) {
      validateRequiredParameters({ email, subAccountApiKey });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList",
        Object.assign(
          options ? options : {},
          {
            email,
            subAccountApiKey
          }
        )
      );
      return await this.makeRequest("DELETE", url);
    }
    /**
    * Update IP Restriction for Sub-Account API key (For Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#update-ip-restriction-for-sub-account-api-key-for-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {string} subAccountApiKey
    * @param {string} status - IP Restriction status. 1 = IP Unrestricted. 2 = Restrict access to trusted IPs only. 3 = Restrict access to users' trusted third party IPs only
    * @param {object} [options]
    * @param {string} [options.thirdPartyName] - third party IP list name
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async updateIpRestrictionForSubAccountApiKey(email, subAccountApiKey, status, options) {
      validateRequiredParameters({ email, subAccountApiKey, status });
      const url = this.prepareSignedPath(
        "/sapi/v2/sub-account/subAccountApi/ipRestriction",
        Object.assign(
          options ? options : {},
          {
            email,
            subAccountApiKey,
            status
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Deposit assets into the managed sub-account (For Investor Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#deposit-assets-into-the-managed-sub-account-for-investor-master-account}
    *
    * @param {string} toEmail - Recipient email
    * @param {string} asset
    * @param {number} amount
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async depositAssetsIntoTheManagedSubAccount(toEmail, asset, amount, options) {
      validateRequiredParameters({ toEmail, asset, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/managed-subaccount/deposit",
        Object.assign(
          options ? options : {},
          {
            toEmail,
            asset: asset.toUpperCase(),
            amount
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query Managed Sub-account Asset Details (For Investor Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-asset-details-for-investor-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getManagedSubAccountAssetDetails(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/managed-subaccount/asset",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Withdrawl assets from the managed sub-account (For Investor Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#withdrawl-assets-from-the-managed-sub-account-for-investor-master-account}
    *
    * @param {string} fromEmail - Sender email
    * @param {string} asset
    * @param {number} amount
    * @param {object} [options]
    * @param {number} [options.transferDate] - Withdrawals is automatically occur on the transfer date(UTC0). If a date is not selected, the withdrawal occurs right now
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async withdrawlAssetsFromTheManagedSubAccount(fromEmail, asset, amount, options) {
      validateRequiredParameters({ fromEmail, asset, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/managed-subaccount/withdraw",
        Object.assign(
          options ? options : {},
          {
            fromEmail,
            asset: asset.toUpperCase(),
            amount
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query Managed Sub-account Snapshot (For Investor Master Account) {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-snapshot-for-investor-master-account}
    *
    * @param {string} email - Sub-account email
    * @param {AccountSnapshotType} type - 'SPOT', 'MARGIN'(cross), 'FUTURES'(UM)
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit] - min 7, max 30, default 7
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getManagedSubAccountSnapshot(email, type, options) {
      validateRequiredParameters({ email, type });
      const url = this.prepareSignedPath(
        "/sapi/v1/managed-subaccount/accountSnapshot",
        Object.assign(
          options ? options : {},
          {
            email,
            type
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Query Managed Sub Account Transfer Log (For Investor Master Account) (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-transfer-log-for-investor-master-account-user_data}
     * 
     * @param {string} email - Managed Sub Account Email
     * @param {number} startTime - Start Time
     * @param {number} endTime - End Time (The start time and end time interval cannot exceed half a year)
     * @param {number} page - Page
     * @param {number} limit - Limit (Max: 500)
     * @param {object} [options]
     * @param {string} [options.transfers] - Transfer Direction (FROM/TO)
     * @param {SubAccountTransferLog} [options.transferFunctionAccountType] - Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
     */
    async getManagedSubAccountTransferLog(email, startTime, endTime, page, limit, options) {
      validateRequiredParameters({ email, startTime, endTime, page, limit });
      const url = this.preparePath(
        "/sapi/v1/managed-subaccount/queryTransLogForInvestor",
        Object.assign(
          options ? options : {},
          {
            email,
            startTime,
            endTime,
            page,
            limit
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Query Managed Sub Account Transfer Log (For Trading Team Master Account) (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-transfer-log-for-trading-team-master-account-user_data}
     * 
     * @param {string} email - Managed Sub Account Email
     * @param {number} startTime - Start Time
     * @param {number} endTime - End Time (The start time and end time interval cannot exceed half a year)
     * @param {number} page - Page
     * @param {number} limit - Limit (Max: 500)
     * @param {object} [options]
     * @param {string} [options.transfers] - Transfer Direction (FROM/TO)
     * @param {SubAccountTransferLog} [options.transferFunctionAccountType] - Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
     */
    async getManagedSubAccountTransferLogForTradeParent(email, startTime, endTime, page, limit, options) {
      validateRequiredParameters({ email, startTime, endTime, page, limit });
      const url = this.preparePath(
        "/sapi/v1/managed-subaccount/queryTransLogForTradeParent",
        Object.assign(
          options ? options : {},
          {
            email,
            startTime,
            endTime,
            page,
            limit
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Query Managed Sub-account Futures Asset Details（For Investor Master Account）(USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-futures-asset-details-for-investor-master-account-user_data}
     * 
     * @param {string} email - Managed Sub Account Email
     */
    async getManagedSubAccountFuturesAssetDetails(email) {
      validateRequiredParameters({ email });
      const url = this.preparePath(
        "/sapi/v1/managed-subaccount/fetch-future-asset",
        {
          email
        }
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Query Managed Sub-account Margin Asset Details (For Investor Master Account) (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-margin-asset-details-for-investor-master-account-user_data}
     * 
     * @param {string} email - Managed Sub Account Email
     */
    async getManagedSubAccountMarginAssetDetails(email) {
      validateRequiredParameters({ email });
      const url = this.preparePath(
        "/sapi/v1/managed-subaccount/marginAsset",
        {
          email
        }
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Query Sub-account Assets (For Master Account)(USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-assets-for-master-account-user_data}
     * 
     * @param {string} email - Managed Sub Account Email
     * @param {option} [options]
     * @param {number} [options.recvWindow]
     */
    async getSubAccountAssetsForMasterAccount(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v4/sub-account/assets",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Query Managed Sub-account List {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-list-for-investor-user_data}
     * 
     * @param {string} email - Managed Sub Account Email
     * @param {option} [options]
     * @param {number} [options.page] - Default value: 1
     * @param {number} [options.limit] - Default value: 20, Max value: 20
     * @param {number} [options.recvWindow]
     */
    async getManagedSubAccountList(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/managed-subaccount/info",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Query Sub-account Transaction Statistics (For Master Account) (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-transaction-statistics-for-master-account-user_data}
     * 
     * @param {string} email - Managed Sub Account Email
     * @param {option} [options]
     * @param {number} [options.recvWindow]
     */
    async getSubAccountTransactionStatisticsForMasterAccount(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/transaction-statistics",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Get Managed Sub-account Deposit Address (For Investor Master Account) (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-managed-sub-account-deposit-address-for-investor-master-account-user_data}
     * 
     * @param {string} email - Sub user email
     * @param {string} coin
     * @param {option} [options]
     * @param {string} [options.network] - networks can be found in GET /sapi/v1/capital/deposit/address
     * @param {number} [options.recvWindow]
     */
    async getManagedSubAccountDepositAddress(email, coin, options) {
      validateRequiredParameters({ email, coin });
      const url = this.prepareSignedPath(
        "/sapi/v1/managed-subaccount/deposit/address",
        Object.assign(
          options ? options : {},
          {
            email,
            coin: coin.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Enable Options for Sub-account (For Master Account)(USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#enable-options-for-sub-account-for-master-account-user_data}
     * 
     * @param {string} email - Managed Sub Account Email
     * @param {option} [options]
     * @param {number} [options.recvWindow]
     */
    async enableOptionsForSubAccount(email, options) {
      validateRequiredParameters({ email });
      const url = this.prepareSignedPath(
        "/sapi/v1/sub-account/eoptions/enable",
        Object.assign(
          options ? options : {},
          {
            email
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
     * Query Managed Sub Account Transfer Log (For Trading Team Sub Account)(USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-transfer-log-for-trading-team-sub-account-user_data}
     * 
     * @param {number} startTime - Start Time
     * @param {number} endTime - End Time (The start time and end time interval cannot exceed half a year)
     * @param {number} page - Page
     * @param {number} limit - Limit (Max: 500)
     * @param {object} [options]
     * @param {string} [options.transfers] - Transfer Direction (FROM/TO)
     * @param {SubAccountTransferLog} [options.transferFunctionAccountType] - Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
     * @param {number} [options.recvWindow]
     */
    async getManagedSubAccountTransferLogForTradeSub(startTime, endTime, page, limit, options) {
      validateRequiredParameters({ startTime, endTime, page, limit });
      const url = this.prepareSignedPath(
        "/sapi/v1/managed-subaccount/transfer",
        Object.assign(
          options ? options : {},
          {
            startTime,
            endTime,
            page,
            limit
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
  };
}

// src/modules/restful/trade/trade.ts
function mixinTrade(base) {
  return class extends base {
    /**
    * Test New Order (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#test-new-order-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {Side} side
    * @param {OrderType} type - Order type
    * @param {object} [options]
    * @param {TimeInForce} [options.timeInForce] - Order time in force
    * @param {number} [options.quantity] - Order quantity
    * @param {number} [options.quoteOrderQty] - Quote quantity
    * @param {number} [options.price] - Order price
    * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
    * @param {number} [options.strategyId]
    * @param {number} [options.strategyType] - The value cannot be less than 1000000.
    * @param {number} [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
    * @param {number} [options.trailingDelta] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
    * @param {number} [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
    * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.
    * @param {SelfTradePreventionMode} [options.selfTradePreventionMode] - The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    * @param {boolean} [options.computeCommissionRates]
    */
    async testNewOrder(symbol, side, type, options) {
      validateRequiredParameters({ symbol, side, type });
      const url = this.prepareSignedPath(
        "/api/v3/order/test",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            side,
            type
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query Order (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-order-user_data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.orderId] - Order id
    * @param {string} [options.origClientOrderId] - Order id from client
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getOrder(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/api/v3/order",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * New Order (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#new-order-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {Side} side
    * @param {OrderType} type - Order type
    * @param {object} [options]
    * @param {TimeInForce} [options.timeInForce] - Order time in force
    * @param {number} [options.quantity] - Order quantity
    * @param {number} [options.quoteOrderQty] - Quote quantity
    * @param {number} [options.price] - Order price
    * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
    * @param {number} [options.strategyId]
    * @param {number} [options.strategyType] - The value cannot be less than 1000000.
    * @param {number} [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
    * @param {number} [options.trailingDelta] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
    * @param {number} [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
    * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.
    * @param {SelfTradePreventionMode} [options.selfTradePreventionMode] - The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async newOrder(symbol, side, type, options) {
      validateRequiredParameters({ symbol, side, type });
      const url = this.prepareSignedPath(
        "/api/v3/order",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            side,
            type
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Cancel Order (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#cancel-order-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.orderId] - Order id
    * @param {string} [options.origClientOrderId] - Order id from client
    * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async cancelOrder(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/api/v3/order",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("DELETE", url);
    }
    /**
    * Cancel an Existing Order and Send a New Order (Trade) {@link https://binance-docs.github.io/apidocs/spot/en/#cancel-an-existing-order-and-send-a-new-order-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {Side} side
    * @param {OrderType} type - Order type
    * @param {string} cancelReplaceMode - - `STOP_ON_FAILURE` If the cancel request fails, the new order placement will not be attempted., - `ALLOW_FAILURES` If new order placement will be attempted even if cancel request fails.
    * @param {object} [options]
    * @param {TimeInForce} [options.timeInForce] - Order time in force
    * @param {number} [options.quantity] - Order quantity
    * @param {number} [options.quoteOrderQty] - Quote quantity
    * @param {number} [options.price] - Order price
    * @param {string} [options.cancelNewClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
    * @param {string} [options.cancelOrigClientOrderId] - Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence.
    * @param {number} [options.cancelOrderId] - Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence.
    * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
    * @param {number} [options.strategyId]
    * @param {number} [options.strategyType] - The value cannot be less than 1000000.
    * @param {number} [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
    * @param {number} [options.trailingDelta] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
    * @param {number} [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
    * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async cancelAnExistingOrderAndSendANewOrder(symbol, side, type, cancelReplaceMode, options) {
      validateRequiredParameters({ symbol, side, type, cancelReplaceMode });
      const url = this.prepareSignedPath(
        "/api/v3/order/cancelReplace",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            side,
            type,
            cancelReplaceMode
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Current Open Orders (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#current-open-orders-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async currentOpenOrders(options) {
      const url = this.prepareSignedPath(
        "/api/v3/openOrders",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Cancel all Open Orders on a Symbol (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#cancel-all-open-orders-on-a-symbol-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async cancelAllOpenOrdersOnASymbol(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/api/v3/openOrders",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("DELETE", url);
    }
    /**
    * All Orders (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#all-orders-user_data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.orderId] - Order id
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit] - Default 500; max 1000.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async allOrders(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/api/v3/allOrders",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * New OCO (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#new-oco-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {Side} side
    * @param {number} quantity
    * @param {number} price - Order price
    * @param {number} stopPrice
    * @param {object} [options]
    * @param {string} [options.listClientOrderId] - A unique Id for the entire orderList
    * @param {string} [options.limitClientOrderId] - A unique Id for the limit order
    * @param {number} [options.limitStrategyId]
    * @param {number} [options.limitStrategyType] - The value cannot be less than 1000000.
    * @param {number} [options.limitIcebergQty]
    * @param {number} [options.trailingDelta]
    * @param {string} [options.stopClientOrderId] - A unique Id for the stop loss/stop loss limit leg
    * @param {number} [options.stopStrategyId]
    * @param {number} [options.stopStrategyType]
    * @param {number} [options.stopLimitPrice] - If provided, stopLimitTimeInForce is required.
    * @param {number} [options.stopIcebergQty]
    * @param {StopLimitTimeInForce} [options.stopLimitTimeInForce]
    * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async newOco(symbol, side, quantity, price, stopPrice, options) {
      validateRequiredParameters({ symbol, side, quantity, price, stopPrice });
      const url = this.prepareSignedPath(
        "/api/v3/order/oco",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            side,
            quantity,
            price,
            stopPrice
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query OCO (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-oco-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.orderListId] - Order list id
    * @param {string} [options.origClientOrderId] - Order id from client
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getOco(options) {
      const url = this.prepareSignedPath(
        "/api/v3/orderList",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Cancel OCO (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#cancel-oco-trade}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.orderListId] - Order list id
    * @param {string} [options.listClientOrderId] - A unique Id for the entire orderList
    * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async cancelOco(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/api/v3/orderList",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("DELETE", url);
    }
    /**
    * Query all OCO (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-all-oco-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit] - Default 500; max 1000.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getAllOco(options) {
      const url = this.prepareSignedPath(
        "/api/v3/allOrderList",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Open OCO (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-open-oco-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getOpenOco(options) {
      const url = this.prepareSignedPath(
        "/api/v3/openOrderList",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Account Information (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#account-information-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async accountInformation(options) {
      const url = this.prepareSignedPath(
        "/api/v3/account",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Account Trade List (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#account-trade-list-user_data}
    *
    * @param {string} symbol - Trading symbol, e.g. BNBUSDT
    * @param {object} [options]
    * @param {number} [options.orderId] - This can only be used in combination with symbol.
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
    * @param {number} [options.limit] - Default 500; max 1000.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async accountTradeList(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/api/v3/myTrades",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query Current Order Count Usage (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#query-current-order-count-usage-trade}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getCurrentOrderCountUsage(options) {
      const url = this.prepareSignedPath(
        "/api/v3/rateLimit/order",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Test New Order Using SOR (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#new-order-using-sor-trade}
     * 
     * @param {string} symbol - Trading symbol, e.g. BNBUSDT
     * @param {Side} side
     * @param {OrderType} type - Order type
     * @param {number} [quantity] - Order quantity
     * @param {object} [options]
     * @param {TimeInForce} [options.timeInForce] - Order time in force
     * @param {number} [options.price] - Order price
     * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
     * @param {number} [options.strategyId]
     * @param {number} [options.strategyType] - The value cannot be less than 1000000.
     * @param {number} [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
     * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.
     * @param {SelfTradePreventionMode} [options.selfTradePreventionMode] - The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     * @param {boolean} [options.computeCommissionRates]
     */
    async testNewOrderSOR(symbol, side, type, quantity, options) {
      validateRequiredParameters({ symbol, side, type, quantity });
      const url = this.prepareSignedPath(
        "/api/v3/sor/order/test",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            side,
            type,
            quantity
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
     * New Order Using SOR (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#new-order-using-sor-trade}
     * 
     * @param {string} symbol - Trading symbol, e.g. BNBUSDT
     * @param {Side} side
     * @param {OrderType} type - Order type
     * @param {number} [quantity] - Order quantity
     * @param {object} [options]
     * @param {TimeInForce} [options.timeInForce] - Order time in force
     * @param {number} [options.price] - Order price
     * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
     * @param {number} [options.strategyId]
     * @param {number} [options.strategyType] - The value cannot be less than 1000000.
     * @param {number} [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
     * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.
     * @param {SelfTradePreventionMode} [options.selfTradePreventionMode] - The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    async newOrderSOR(symbol, side, type, quantity, options) {
      validateRequiredParameters({ symbol, side, type, quantity });
      const url = this.prepareSignedPath(
        "/api/v3/sor/order",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase(),
            side,
            type,
            quantity
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
     * Query Prevented Matches (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-prevented-matches-user_data}
     * 
     * @param {string} symbol - Trading symbol, e.g. BNBUSDT
     * @param {object} [options]
     * @param {number} [options.preventedMatchId]
     * @param {number} [options.orderId]
     * @param {number} [options.fromPreventedMatchId]
     * @param {number} [options.limit] - Default: 500; Max: 1000
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    async getPreventedMatches(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/api/v3/myPreventedMatches",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Query Allocations (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-allocations-user_data}
     * 
     * @param {string} symbol - Trading symbol, e.g. BNBUSDT
     * @param {object} [options]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.fromAllocationId]
     * @param {number} [options.limit] - Default: 500; Max: 1000
     * @param {number} [options.orderId]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    async getAllocations(symbol, options) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/api/v3/myAllocations",
        Object.assign(
          options ? options : {},
          {
            symbol: symbol.toUpperCase()
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
     * Query Commission Rates (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-commission-rates-user_data}
     * 
     * @param {string} symbol - Trading symbol, e.g. BNBUSDT
     */
    async getCommissionRates(symbol) {
      validateRequiredParameters({ symbol });
      const url = this.prepareSignedPath(
        "/api/v3/account/commission",
        {
          symbol: symbol.toUpperCase()
        }
      );
      return await this.makeRequest("GET", url);
    }
  };
}

// src/modules/restful/wallet/wallet.ts
function mixinWallet(base) {
  return class extends base {
    /**
    * System Status (System) {@link https://binance-docs.github.io/apidocs/spot/en/#system-status-system}
    */
    async systemStatus() {
      return await this.makeRequest("GET", "/sapi/v1/system/status");
    }
    /**
    * All Coins' Information (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#all-coins39-information-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async allCoinsInformation(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/capital/config/getall",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Daily Account Snapshot (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#daily-account-snapshot-user_data}
    *
    * @param {AccountSnapshotType} type
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async dailyAccountSnapshot(type, options) {
      validateRequiredParameters({ type });
      const url = this.prepareSignedPath(
        "/sapi/v1/accountSnapshot",
        Object.assign(options ? options : {}, { type })
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Disable Fast Withdraw Switch (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#disable-fast-withdraw-switch-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async disableFastWithdrawSwitch(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/account/disableFastWithdrawSwitch",
        options ? options : {}
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Enable Fast Withdraw Switch (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#enable-fast-withdraw-switch-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async enableFastWithdrawSwitch(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/account/enableFastWithdrawSwitch",
        options ? options : {}
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Withdraw (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#withdraw-user_data}
    *
    * @param {string} coin - Coin name
    * @param {string} address
    * @param {number} amount
    * @param {object} [options]
    * @param {string} [options.withdrawOrderId] - Client id for withdraw
    * @param {string} [options.network] - Get the value from `GET /sapi/v1/capital/config/getall`
    * @param {string} [options.addressTag] - Secondary address identifier for coins like XRP,XMR etc.
    * @param {boolean} [options.transactionFeeFlag] - When making internal transfer, - `true` ->  returning the fee to the destination account;, - `false` -> returning the fee back to the departure account.
    * @param {string} [options.name]
    * @param {number} [options.walletType] - The wallet type for withdraw，0-Spot wallet, 1- Funding wallet. Default is Spot wallet
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async withdraw(coin, address, amount, options) {
      validateRequiredParameters({ coin, address, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/capital/withdraw/apply",
        Object.assign(options ? options : {}, { coin, address, amount })
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Deposit History (supporting network) {@link https://binance-docs.github.io/apidocs/spot/en/#deposit-history-supporting-network}
    *
    * @param {object} [options]
    * @param {string} [options.coin] - Coin name
    * @param {number} [options.status] - * `0` - pending, * `6` - credited but cannot withdraw, * `1` - success
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.offset]
    * @param {number} [options.limit] - Default 500; max 1000.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    * @param {string} [options.txId]
    */
    async depositHistory(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/capital/deposit/hisrec",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Withdraw History (supporting network) {@link https://binance-docs.github.io/apidocs/spot/en/#withdraw-history-supporting-network}
    *
    * @param {object} [options]
    * @param {string} [options.coin] - Coin name
    * @param {string} [options.withdrawOrderId]
    * @param {number} [options.status] - * `0` - Email Sent, * `1` - Cancelled, * `2` - Awaiting Approval, * `3` - Rejected, * `4` - Processing, * `5` - Failure, * `6` - Completed
    * @param {number} [options.startTime] - UTC timestamp in ms, Default: 90 days from current timestamp
    * @param {number} [options.endTime] - UTC timestamp in ms, Default: present timestamp
    * @param {number} [options.offset]
    * @param {number} [options.limit] - Default 500; max 1000.
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async withdrawHistory(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/capital/withdraw/history",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Deposit Address (supporting network) {@link https://binance-docs.github.io/apidocs/spot/en/#deposit-address-supporting-network}
    *
    * @param {string} coin - Coin name
    * @param {object} [options]
    * @param {string} [options.network]
    * @param {number} [options.amount]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async depositAddress(coin, options) {
      validateRequiredParameters({ coin });
      const url = this.prepareSignedPath(
        "/sapi/v1/capital/deposit/address",
        Object.assign(options ? options : {}, { coin })
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Account Status (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#account-status-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async accountStatus(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/account/status",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Account API Trading Status (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#account-api-trading-status-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async accountApiTradingStatus(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/account/apiTradingStatus",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * DustLog (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#dustlog-user_data}
    *
    * @param {object} [options]
    * @param {DustAccountType} [options.accountType] - SPOT or MARGIN, default SPOT
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async dustlog(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/dribblet",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get Assets That Can Be Converted Into BNB (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-assets-that-can-be-converted-into-bnb-user_data}
    *
    * @param {object} [options]
    * @param {DustAccountType} [options.accountType] - SPOT or MARGIN, default SPOT
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getAssetsThatCanBeConvertedIntoBnb(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/dust-btc",
        options ? options : {}
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Dust Transfer (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#dust-transfer-user_data}
    *
    * @param {string[]} asset - The asset being converted. For example: asset=BTC,USDT
    * @param {object} [options]
    * @param {DustAccountType} [options.accountType] - SPOT or MARGIN, default SPOT
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async dustTransfer(asset, options) {
      validateRequiredParameters({ asset });
      const assets = asset.map((x) => x.toUpperCase()).join(",");
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/dust",
        Object.assign(options ? options : {}, { asset: assets })
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Asset Dividend Record (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#asset-dividend-record-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.limit]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async assetDividendRecord(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/assetDividend",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Asset Detail (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#asset-detail-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async assetDetail(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/assetDetail",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Trade Fee (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#trade-fee-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async tradeFee(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/tradeFee",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * User Universal Transfer (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#user-universal-transfer-user_data}
    *
    * @param {UnivTransferType} type - Universal transfer type
    * @param {string} asset
    * @param {number} amount
    * @param {object} [options]
    * @param {string} [options.fromSymbol] - Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
    * @param {string} [options.toSymbol] - Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async userUniversalTransfer(type, asset, amount, options) {
      validateRequiredParameters({ type, asset, amount });
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/transfer",
        Object.assign(options ? options : {}, { type, asset: asset.toUpperCase(), amount })
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query User Universal Transfer History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-user-universal-transfer-history-user_data}
    *
    * @param {UnivTransferType} type - Universal transfer type
    * @param {object} [options]
    * @param {number} [options.startTime] - UTC timestamp in ms
    * @param {number} [options.endTime] - UTC timestamp in ms
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    * @param {string} [options.fromSymbol] - Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
    * @param {string} [options.toSymbol] - Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getUserUniversalTransferHistory(type, options) {
      validateRequiredParameters({ type });
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/transfer",
        Object.assign(options ? options : {}, { type })
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Funding Wallet (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#funding-wallet-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {NeedBtcValuation} [options.needBtcValuation]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async fundingWallet(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/get-funding-asset",
        options ? options : {}
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * User Asset (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#user-asset-user_data}
    *
    * @param {object} [options]
    * @param {string} [options.asset]
    * @param {NeedBtcValuation} [options.needBtcValuation]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async userAsset(options) {
      const url = this.prepareSignedPath(
        "/sapi/v3/asset/getUserAsset",
        options ? options : {}
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Convert Transfer (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#convert-transfer-user_data}
    *
    * @param {string} clientTranId - The unique flag, the min length is 20
    * @param {string} asset
    * @param {number} amount
    * @param {string} targetAsset - Target asset you want to convert
    * @param {object} [options]
    * @param {QueryConvertTransfer} [options.accountType] - The value cannot be greater than 60000
    */
    async convertTransfer(clientTranId, asset, amount, targetAsset, options) {
      validateRequiredParameters({ clientTranId, asset, amount, targetAsset });
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/convert-transfer",
        Object.assign(
          options ? options : {},
          {
            clientTranId,
            asset: asset.toUpperCase(),
            amount,
            targetAsset
          }
        )
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Query Convert Transfer (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-convert-transfer-user_data}
    *
    * @param {number} startTime - inclusive, unit: ms
    * @param {number} endTime - exclusive, unit: ms
    * @param {object} [options]
    * @param {number} [options.tranId] - The transaction id
    * @param {string} [options.clientTranId] - The user-defined transaction id
    * @param {string} [options.asset] - If it is blank, we will match deducted asset and target asset.
    * @param {AccountType} [options.accountType] - MAIN: main account. CARD: funding account. If it is blank, we will query spot and card wallet, otherwise, we just query the corresponding wallet
    * @param {number} [options.current] - current page, default 1, the min value is 1
    * @param {number} [options.size] - page size, default 10, the max value is 100
    */
    async getConvertTransfer(startTime, endTime, options) {
      validateRequiredParameters({ startTime, endTime });
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/convert-transfer/queryByPage",
        Object.assign(options ? options : {}, { startTime, endTime })
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * Get Cloud-Mining payment and refund history (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-cloud-mining-payment-and-refund-history-user_data}
    *
    * @param {number} startTime - inclusive, unit: ms
    * @param {number} endTime - exclusive, unit: ms
    * @param {object} [options]
    * @param {number} [options.tranId] - The transaction id
    * @param {string} [options.clientTranId] - The unique flag
    * @param {string} [options.asset] - If it is blank, we will query all assets
    * @param {number} [options.current] - Current querying page. Start from 1. Default:1
    * @param {number} [options.size] - Default:10 Max:100
    */
    async getCloudminingPaymentAndRefundHistory(startTime, endTime, options) {
      validateRequiredParameters({ startTime, endTime });
      const url = this.prepareSignedPath(
        "/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage",
        Object.assign(
          options ? options : {},
          {
            startTime,
            endTime
          }
        )
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Get API Key Permission (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-api-key-permission-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.recvWindow] - The value cannot be greater than 60000
    */
    async getApiKeyPermission(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/account/apiRestrictions",
        options ? options : {}
      );
      return await this.makeRequest("GET", url);
    }
    /**
    * Query auto-converting stable coins (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-auto-converting-stable-coins-user_data}
    */
    async getAutoconvertingStableCoins() {
      return await this.makeRequest("GET", "/sapi/v1/capital/contract/convertible-coins");
    }
    /**
    * Switch on/off BUSD and stable coins conversion (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#switch-on-off-busd-and-stable-coins-conversion-user_data}
    *
    * @param {BusdStableCoinsConversion} coin - Must be USDC, USDP or TUSD
    * @param {boolean} enable - true: turn on the auto-conversion. false: turn off the auto-conversion
    */
    async switchOnOffBusdAndStableCoinsConversion(coin, enable) {
      validateRequiredParameters({ coin, enable });
      const url = this.prepareSignedPath(
        "/sapi/v1/capital/contract/convertible-coins",
        { coin, enable }
      );
      return await this.makeRequest("POST", url);
    }
    /**
    * One click arrival deposit apply (for expired address deposit) (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#one-click-arrival-deposit-apply-for-expired-address-deposit-user_data}
    *
    * @param {object} [options]
    * @param {number} [options.depositId] - Deposit record Id, priority use
    * @param {number} [options.txId] - Deposit txId, used when depositId is not specified
    * @param {number} [options.subAccountId] - Sub-accountId of Cloud user
    * @param {number} [options.subUserId] - Sub-userId of parent user
    */
    async oneClickArrivalDepositApply(options) {
      const url = this.prepareSignedPath(
        "/sapi/v1/capital/deposit/credit-apply",
        options ? options : {}
      );
      return await this.makeRequest("POST", url);
    }
  };
}

// src/modules/websocket/websocketAPI/account/account.ts
function mixinWsAccount(base) {
  return class extends base {
    /**
     * Account information
     * Query information about your account.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#account-information-user_data}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    account(options) {
      this.sendSignatureMessage("account.status", options);
    }
    /**
     * Account order rate limits
     * Query your current order rate limit.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#account-order-rate-limits-user_data}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    orderLimit(options) {
      this.sendSignatureMessage("account.rateLimits.orders", options);
    }
    /**
     * Account order history
     *
     * Query information about all your orders – active, canceled, filled – filtered by time range.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#account-order-history-user_data}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.orderId]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit]
     * @param {number} [options.recvWindow]
     */
    orderHistory(symbol, options) {
      const limit = options ? options.limit : 500;
      this.sendSignatureMessage("allOrders", {
        symbol,
        limit,
        ...options
      });
    }
    /**
     * Account OCO history
     *
     * Query information about all your OCOs, filtered by time range.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#account-oco-history-user_data}
     *
     * @param {object} [options]
     * @param {number} [options.fromId]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit]
     * @param {number} [options.recvWindow]
     */
    ocoOrderHistory(options) {
      const limit = options ? options.limit : 500;
      this.sendSignatureMessage("allOrderLists", {
        limit,
        ...options
      });
    }
    /**
     * Account trade history
     *
     * Query information about all your trades, filtered by time range.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#account-trade-history-user_data}
     *
     * @param {string} [symbol]
     * @param {object} [options]
     * @param {number} [options.orderId]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.fromId]
     * @param {number} [options.limit]
     * @param {number} [options.recvWindow]
     */
    myTrades(symbol, options) {
      const limit = options ? options.limit : 500;
      this.sendSignatureMessage("myTrades", {
        symbol,
        limit,
        ...options
      });
    }
    /**
     * Account prevented matches
     *
     * Displays the list of orders that were expired because of STP trigger.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#account-prevented-matches-user_data}
     *
     * @param {string} [symbol]
     * @param {object} [options]
     * @param {number} [options.preventedMatchId]
     * @param {number} [options.orderId]
     * @param {number} [options.fromPreventedMatchId]
     * @param {number} [options.limit]
     * @param {number} [options.recvWindow]
     */
    preventedMatches(symbol, options) {
      const limit = options ? options.limit : 500;
      this.sendSignatureMessage("myPreventedMatches", {
        symbol,
        limit,
        ...options
      });
    }
    /**
     * Retrieves allocations resulting from SOR order placement.
     * 
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#account-allocations-user_data}
     * 
     * @param {string} [symbol]
     * @param {object} [options]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.fromAllocationId]
     * @param {number} [options.limit]
     * @param {number} [options.orderId]
     * @param {number} [options.recvWindow]
     */
    accountAllocation(symbol, options) {
      const limit = options ? options.limit : 500;
      this.sendSignatureMessage("myAllocations", {
        symbol,
        limit,
        ...options
      });
    }
  };
}

// src/modules/websocket/websocketAPI/market/market.ts
function mixinWsMarket(base) {
  return class extends base {
    /**
     * Test connectivity
     *
     * Test connectivity to the WebSocket API.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#test-connectivity}
     */
    ping(options) {
      this.sendMessage("ping", options);
    }
    /**
     * Check server time
     *
     * Test connectivity to the WebSocket API and get the current server time.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#check-server-time}
     */
    time() {
      this.sendMessage("time", {});
    }
    /**
     * Exchange information
     *
     * Query current exchange trading rules, rate limits, and symbol information.
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string[]} [options.symbols]
     * @param {string[]} [options.permissions]
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#exchange-information}
     */
    exchangeInfo(options) {
      if (Object.prototype.hasOwnProperty.call(options, "symbol") && options && options.symbol) {
        options.symbol = options.symbol.toUpperCase();
      }
      if (Object.prototype.hasOwnProperty.call(options, "symbols") && options && options.symbols) {
        options.symbols = options.symbols.map((symbol) => symbol.toUpperCase());
      }
      this.sendMessage("exchangeInfo", options);
    }
    /**
     * Order book
     *
     * Get current order book.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#order-book}
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.limit]
     *
     */
    orderbook(symbol, options) {
      const limit = options ? options.limit : 100;
      this.sendMessage("depth", {
        limit,
        symbol,
        ...options
      });
    }
    /**
     * Recent trades
     *
     * Get recent trades.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#recent-trades}
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.limit]
     *
     */
    trades(symbol, options) {
      const limit = options ? options.limit : 500;
      this.sendMessage("trades.recent", {
        limit,
        symbol,
        ...options
      });
    }
    /**
     * Historical trades 
     *
     * Get historical trades.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#historical-trades-market_data}
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.limit]
     * @param {number} [options.fromId]
     *
     */
    historicalTrades(symbol, options) {
      const limit = options ? options.limit : 500;
      this.sendMessageWithAPIKey("trades.historical", {
        limit,
        symbol,
        ...options
      });
    }
    /**
     * Aggregate trades 
     *
     * Get aggregate trades.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#aggregate-trades}
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.limit]
     * @param {number} [options.fromId]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     *
     */
    aggTrades(symbol, options) {
      const limit = options ? options.limit : 500;
      this.sendMessage("trades.aggregate", {
        limit,
        symbol,
        ...options
      });
    }
    /**
     * Klines 
     *
     * Get klines (candlestick bars).
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#klines}
     * @param {string} symbol
     * @param {Interval} interval
     * @param {object} [options]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit]
     *
     */
    klines(symbol, interval, options) {
      const limit = options ? options.limit : 500;
      this.sendMessage("klines", {
        limit,
        interval,
        symbol,
        ...options
      });
    }
    /**
     * UI Klines 
     *
     * Get klines (candlestick bars) optimized for presentation.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#ui-klines}
     * @param {string} symbol
     * @param {Interval} interval
     * @param {object} [options]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit]
     *
     */
    uiKlines(symbol, interval, options) {
      const limit = options ? options.limit : 500;
      this.sendMessage("uiKlines", {
        limit,
        interval,
        symbol,
        ...options
      });
    }
    /**
     * Current average price 
     *
     * Get current average price for a symbol.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#current-average-price}
     * @param {string} symbol
     *
     */
    avgPrice(symbol) {
      this.sendMessage("avgPrice", { symbol });
    }
    /**
     * 24hr ticker price change statistics 
     *
     * Get 24-hour rolling window price change statistics.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#24hr-ticker-price-change-statistics}
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string[]} [options.symbols]
     * @param {string} [options.type]
     *
     */
    ticker24hr(options) {
      this.sendMessage("ticker.24hr", options);
    }
    /**
     * Rolling window price change statistics 
     *
     * Get rolling window price change statistics with a custom window.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#rolling-window-price-change-statistics}
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string[]} [options.symbols]
     * @param {string} [options.type]
     *
     */
    ticker(options) {
      this.sendMessage("ticker", options);
    }
    /**
     * Symbol price ticker 
     *
     * Get the latest market price for a symbol.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#symbol-price-ticker}
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string[]} [options.symbols]
     *
     */
    tickerPrice(options) {
      this.sendMessage("ticker.price", options);
    }
    /**
     * Symbol order book ticker 
     *
     * Get the current best price and quantity on the order book.
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#symbol-order-book-ticker}
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string[]} [options.symbols]
     *
     */
    tickerBook(options) {
      this.sendMessage("ticker.book", options);
    }
  };
}

// src/modules/websocket/websocketAPI/trade/trade.ts
function mixinWsTrade(base) {
  return class extends base {
    /**
     * Place new order
     *
     * Send in a new order.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#place-new-order-trade}
     *
     * @param {string} symbol
     * @param {Side} side
     * @param {OrderType} type
     * @param {object} [options]
     * @param {TimeInForce} [options.timeInForce]
     * @param {number} [options.price]
     * @param {number} [options.quantity]
     * @param {number} [options.quoteOrderQty]
     * @param {string} [options.newClientOrderId]
     * @param {NewOrderRespType} [options.newOrderRespType]
     * @param {number} [options.stopPrice]
     * @param {number} [options.trailingDelta]
     * @param {number} [options.icebergQty]
     * @param {number} [options.strategyId]
     * @param {number} [options.strategyType]
     * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
     * @param {number} [options.recvWindow]
     */
    newOrder(symbol, side, type, options) {
      this.sendSignatureMessage("order.place", {
        symbol,
        side,
        type,
        ...options
      });
    }
    /**
     * Test new order
     *
     * Test a new order.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#test-new-order-trade}
     *
     * @param {string} symbol
     * @param {Side} side
     * @param {OrderType} type
     * @param {object} [options]
     * @param {TimeInForce} [options.timeInForce]
     * @param {number} [options.price]
     * @param {number} [options.quantity]
     * @param {number} [options.quoteOrderQty]
     * @param {string} [options.newClientOrderId]
     * @param {NewOrderRespType} [options.newOrderRespType]
     * @param {number} [options.stopPrice]
     * @param {number} [options.trailingDelta]
     * @param {number} [options.icebergQty]
     * @param {number} [options.strategyId]
     * @param {number} [options.strategyType]
     * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
     * @param {number} [options.recvWindow]
     */
    testNewOrder(symbol, side, type, options) {
      this.sendSignatureMessage("order.test", {
        symbol,
        side,
        type,
        ...options
      });
    }
    /**
     * Query order
     *
     * Check execution status of an order.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#query-order-user_data}
     *
     * @param {string} symbol
     * @param {number} orderId
     * @param {object} [options]
     * @param {string} [options.origClientOrderId]
     * @param {number} [options.recvWindow]
     */
    getOrder(symbol, orderId, options) {
      this.sendSignatureMessage("order.status", {
        symbol,
        orderId,
        ...options
      });
    }
    /**
     * Cancel order
     *
     * Cancel an active order.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#cancel-order-trade}
     *
     * @param {string} symbol
     * @param {number} orderId
     * @param {object} [options]
     * @param {string} [options.origClientOrderId]
     * @param {string} [options.newClientOrderId]
     * @param {CancelRestrictions} [options.cancelRestrictions]
     * @param {number} [options.recvWindow]
     */
    cancelOrder(symbol, orderId, options) {
      this.sendSignatureMessage("order.cancel", {
        symbol,
        orderId,
        ...options
      });
    }
    /**
     * Cancel and replace order
     *
     * Cancel an existing order and immediately place a new order instead of the canceled one.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#cancel-and-replace-order-trade}
     *
     * @param {string} symbol
     * @param {string} cancelReplaceMode
     * @param {number} cancelOrderId
     * @param {Side} side
     * @param {OrderType} type
     * @param {object} [options]
     * @param {TimeInForce} [options.timeInForce]
     * @param {string} [options.cancelOrigClientOrderId]
     * @param {string} [options.cancelNewClientOrderId]
     * @param {number} [options.price]
     * @param {number} [options.quantity]
     * @param {number} [options.quoteOrderQty]
     * @param {string} [options.newClientOrderId]
     * @param {NewOrderRespType} [options.newOrderRespType]
     * @param {number} [options.stopPrice]
     * @param {number} [options.trailingDelta]
     * @param {number} [options.icebergQty]
     * @param {number} [options.strategyId]
     * @param {string} [options.strategyType]
     * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
     * @param {CancelRestrictions} [options.cancelRestrictions]
     * @param {number} [options.recvWindow]
     */
    cancelReplaceOrder(symbol, cancelReplaceMode, cancelOrderId, side, type, options) {
      this.sendSignatureMessage("order.cancelReplace", {
        symbol,
        cancelReplaceMode,
        cancelOrderId,
        side,
        type,
        ...options
      });
    }
    /**
     * Current open orders
     *
     * Query execution status of all open orders.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#current-open-orders-user_data}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {number} [options.recvWindow]
     */
    openOrders(options) {
      this.sendSignatureMessage("openOrders.status", {
        ...options
      });
    }
    /**
     * Cancel open orders
     *
     * Cancel all open orders on a symbol, including OCO orders.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#cancel-open-orders-trade}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    cancelOpenOrders(symbol, options) {
      this.sendSignatureMessage("openOrders.cancelAll", {
        symbol,
        ...options
      });
    }
    /**
     * Place new OCO
     *
     * Send in a new OCO order.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#place-new-oco-trade}
     *
     * @param {string} symbol
     * @param {Side} side
     * @param {number} price
     * @param {number} quantity
     * @param {object} [options]
     * @param {string} [options.listClientOrderId]
     * @param {string} [options.limitClientOrderId]
     * @param {number} [options.limitIcebergQty]
     * @param {number} [options.limitStrategyId]
     * @param {number} [options.limitStrategyType]
     * @param {number} [options.stopPrice]
     * @param {number} [options.trailingDelta]
     * @param {number} [options.stopClientOrderId]
     * @param {number} [options.stopLimitPrice]
     * @param {StopLimitTimeInForce} [options.stopLimitTimeInForce]
     * @param {number} [options.stopIcebergQty]
     * @param {number} [options.stopStrategyId]
     * @param {string} [options.stopStrategyType]
     * @param {NewOrderRespType} [options.newOrderRespType]
     * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
     * @param {number} [options.recvWindow]
     */
    newOCOOrder(symbol, side, price, quantity, options) {
      this.sendSignatureMessage("orderList.place", {
        symbol,
        side,
        price,
        quantity,
        ...options
      });
    }
    /**
     * Query OCO
     *
     * Check execution status of an OCO.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#query-oco-user_data}
     *
     * @param {string} origClientOrderId
     * @param {object} [options]
     * @param {number} [options.orderListId]
     * @param {number} [options.recvWindow]
     */
    getOCOOrder(origClientOrderId, options) {
      this.sendSignatureMessage("orderList.status", {
        origClientOrderId,
        ...options
      });
    }
    /**
     * Query OCO
     *
     * Check execution status of an OCO.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#cancel-oco-trade}
     *
     * @param {string} symbol
     * @param {number} orderListId
     * @param {object} [options]
     * @param {string} [options.listClientOrderId]
     * @param {string} [options.newClientOrderId]
     * @param {number} [options.recvWindow]
     */
    cancelOCOOrder(symbol, orderListId, options) {
      this.sendSignatureMessage("orderList.cancel", {
        symbol,
        orderListId,
        ...options
      });
    }
    /**
     * Current open OCOs 
     *
     * Query execution status of all open OCOs.
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#current-open-ocos-user_data}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    getOCOOpenOrders(options) {
      this.sendSignatureMessage("openOrderLists.status", options);
    }
    /**
     * Place new order using SOR
     * 
     * Places an order using smart order routing (SOR).
     * 
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#place-new-order-using-sor-trade}
     * 
     * @param {string} symbol
     * @param {Side} side
     * @param {OrderType} type
     * @param {number} quantity
     * @param {object} [options]
     * @param {TimeInForce} [options.timeInForce]
     * @param {number} [options.price]
     * @param {string} [options.newClientOrderId]
     * @param {NewOrderRespType} [options.newOrderRespType]
     * @param {number} [options.icebergQty]
     * @param {number} [options.strategyId]
     * @param {number} [options.strategyType]
     * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
     * @param {number} [options.recvWindow]
     */
    newOrderSOR(symbol, side, type, quantity, options) {
      this.sendSignatureMessage("sor.order.place", {
        symbol,
        side,
        type,
        quantity,
        ...options
      });
    }
    /**
     * Place new order using SOR
     * 
     * Places an order using smart order routing (SOR).
     * 
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#test-new-order-using-sor-trade}
     * 
     * @param {string} symbol
     * @param {Side} side
     * @param {OrderType} type
     * @param {number} quantity
     * @param {object} [options]
     * @param {TimeInForce} [options.timeInForce]
     * @param {number} [options.price]
     * @param {string} [options.newClientOrderId]
     * @param {NewOrderRespType} [options.newOrderRespType]
     * @param {number} [options.icebergQty]
     * @param {number} [options.strategyId]
     * @param {number} [options.strategyType]
     * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
     * @param {number} [options.recvWindow]
     */
    testNewOrderSOR(symbol, side, type, quantity, options) {
      this.sendSignatureMessage("sor.order.test", {
        symbol,
        side,
        type,
        quantity,
        ...options
      });
    }
  };
}

// src/modules/websocket/websocketAPI/userData/userData.ts
function mixinWsUserData(base) {
  return class extends base {
    /**
     *
     * Start a new user data stream.<br>
     *
     *
     * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#start-user-data-stream-user_stream}
     */
    startUserDataStream() {
      this.sendMessageWithAPIKey("userDataStream.start");
    }
    /**
    * Ping user data stream.< br>
    *
    * Ping a user data stream to keep it alive.<br>
    *
    *
    * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#ping-user-data-stream-user_stream}
    *
    * @param {string} listenKey
    */
    pingUserDataStream(listenKey) {
      this.sendMessageWithAPIKey("userDataStream.ping", { listenKey });
    }
    /**
    * Stop user data stream.< br>
    *
    * Explicitly stop and close the user data stream.<br>
    *
    *
    * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#stop-user-data-stream-user_stream}
    */
    stopUserDataStream(listenKey) {
      this.sendMessageWithAPIKey("userDataStream.stop", { listenKey });
    }
  };
}

// src/modules/websocket/websocketBase/websocketBase.ts
var import_ws = __toESM(require("ws"));
function WebsocketBase(base) {
  return class extends base {
    isConnected() {
      if (!this.wsConnection.ws || this.wsConnection.ws.readyState !== import_ws.default.OPEN)
        return false;
      return true;
    }
    initConnect(url) {
      const ws = new import_ws.default(url);
      console.info(`Sending Websocket connection to: ${url}`);
      this.wsConnection.ws = ws;
      this.wsConnection.closeInitiated = false;
      ws.on("open", () => {
        console.info(`Connected to the Websocket Server: ${url}`);
        this.callbacks.open && this.callbacks.open(this);
      });
      ws.on("message", (data) => {
        this.callbacks.message && this.callbacks.message(data.toString());
      });
      ws.on("ping", () => {
        console.info("Received PING from server");
        this.callbacks.ping && this.callbacks.ping();
        ws.pong();
        console.info("Responded PONG to server's PING message");
      });
      ws.on("pong", () => {
        console.info("Received PONG from server");
        this.callbacks.pong && this.callbacks.pong();
      });
      ws.on("error", (err) => {
        console.error("Received error from server");
        this.callbacks.error && this.callbacks.error();
        console.error(err);
      });
      ws.on("close", (closeEventCode, reason) => {
        if (!this.wsConnection.closeInitiated) {
          this.callbacks.close && this.callbacks.close();
          console.warn(`Connection close due to ${closeEventCode}: ${reason}.`);
          setTimeout(() => {
            console.debug("Reconnect to the server.");
            this.initConnect(url);
          }, this.reconnectDelay);
        } else {
          this.wsConnection.closeInitiated = false;
        }
      });
    }
    /**
     * Unsubscribe the stream
     *
     * @param {WebSocketClient} wsConnection - websocket client instance created by ws package
     */
    disconnect() {
      if (!this.isConnected())
        console.warn("No connection to close.");
      else {
        this.wsConnection.closeInitiated = true;
        if (this.wsConnection.ws)
          this.wsConnection.ws.close();
        else
          throw new Error("Websocket Client not set");
        console.info("Disconnected with Binance Websocket Server");
      }
    }
    /**
     * Send Ping message to the Websocket Server
     */
    pingServer() {
      if (!this.isConnected())
        console.warn("Ping only can be sent when connection is ready.");
      else {
        console.info("Send PING to the Websocket Server");
        if (this.wsConnection.ws)
          this.wsConnection.ws.ping();
        else
          throw new Error("Websocket Client not set");
      }
    }
    send(payload) {
      if (!this.isConnected())
        console.warn("Send only can be sent when connection is ready.");
      else {
        if (this.wsConnection.ws)
          this.wsConnection.ws.send(payload);
        else
          throw new Error("Websocket Client not set");
      }
    }
  };
}

// src/modules/websocket/websocketStream/stream.ts
function mixinWsStream(base) {
  return class extends base {
    /**
     * Aggregate Trade Streams
     *
     * The Aggregate Trade Streams push trade information that is aggregated for a single taker order.
     *
     * Stream Name: <symbol>@aggTrade
     * Update Speed: Real-time
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#aggregate-trade-streams}
     *
     * @param {string} symbol
     */
    aggTrade(symbol) {
      validateRequiredParameters({ symbol });
      this.subscribe(`${symbol.toLowerCase()}@aggTrade`);
    }
    /**
     * Trade Streams
     *
     * The Trade Streams push raw trade information; each trade has a unique buyer and seller.
     *
     * Stream Name: <symbol>@trade
     * Update Speed: Real-time
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#trade-streams}
     *
     * @param {string} symbol
     */
    trade(symbol) {
      validateRequiredParameters({ symbol });
      this.subscribe(`${symbol.toLowerCase()}@trade`);
    }
    /**
     * Kline/Candlestick Streams
     *
     * The Kline/Candlestick Stream push updates to the current klines/candlestick every second.
     *
     * Stream Name: <symbol>@kline_<interval>
     * Update Speed: 2000ms
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-streams}
     *
     * @param {string} symbol
     * @param {string} interval - m -> minutes; h -> hours; d -> days; w -> weeks; M -> months:
     *     1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M
     */
    kline(symbol, interval) {
      validateRequiredParameters({ symbol, interval });
      this.subscribe(`${symbol.toLowerCase()}@kline_${interval}`);
    }
    /**
     * Individual symbol or all symbols mini ticker
     *
     * 24hr rolling window mini-ticker statistics.
     * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs
     *
     * Stream Name: <symbol>@miniTicker or !miniTicker@arr
     * Update Speed: 1000ms
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-mini-ticker-stream}
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#all-market-mini-tickers-stream}
     *
     * @param {string} [symbol]
     */
    miniTicker(symbol) {
      let stream = "!miniTicker@arr";
      if (!isEmptyValue(symbol)) {
        stream = `${symbol.toLowerCase()}@miniTicker`;
      }
      this.subscribe(stream);
    }
    /**
     * Individual symbol or all symbols ticker
     *
     * 24hr rollwing window ticker statistics for a single symbol.
     * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
     *
     * Stream Name: <symbol>@ticker or !ticker@arr
     * Update Speed: 1000ms
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-ticker-streams}
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#all-market-tickers-stream}
     *
     * @param {string} [symbol]
     */
    ticker(symbol) {
      let stream = "!ticker@arr";
      if (!isEmptyValue(symbol)) {
        stream = `${symbol.toLowerCase()}@ticker`;
      }
      this.subscribe(stream);
    }
    /**
     * Individual symbol or all rolling window statistics ticker
     *
     * Rolling window ticker statistics, computed over multiple windows.
     *
     * Stream Name: <symbol>@ticker_<window_size> or !ticker_<window_size>@arr
     * Window Sizes: 1h,4h
     * Update Speed: 1000ms
     *
     * Note: This stream is different from the <symbol>@ticker stream. The open time O always starts on a minute, while the closing time C is the current time of the update.
     *
     * As such, the effective window might be up to 59999ms wider that <window_size>.
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-rolling-window-statistics-streams}
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#all-market-rolling-window-statistics-streams}
     *
     * @param {string} [windowSize]
     * @param {string} [symbol]
     */
    rollingWindowTicker(windowSize, symbol) {
      let stream = `!ticker_${windowSize.toLowerCase()}@arr`;
      if (!isEmptyValue(symbol)) {
        stream = `${symbol.toLowerCase()}@ticker_${windowSize.toLowerCase()}`;
      }
      this.subscribe(stream);
    }
    /**
     * Individual symbol or all symbols book ticker
     *
     * Pushes any update to the best bid or ask's price or quantity in real-time.
     *
     * Stream Name: <symbol>@bookTicker or !bookTicker
     * Update Speed: Real-time
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-book-ticker-streams}
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#all-book-tickers-stream}
     *
     * @param {string} [symbol]
     */
    bookTicker(symbol) {
      validateRequiredParameters({ symbol });
      this.subscribe(`${symbol.toLowerCase()}@bookTicker`);
    }
    /**
     * Partial Book Depth Streams
     *
     * Top bids and asks, Valid are 5, 10, or 20.
     *
     * Stream Names: <symbol>@depth<levels> or <symbol>@depth<levels>@100ms.
     * Update Speed: 1000ms or 100ms
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#partial-book-depth-streams}
     *
     * @param {string} symbol
     * @param {string} levels - 5, 10, or 20
     * @param {string} speed - 1000ms or 100ms
     */
    partialBookDepth(symbol, levels, speed) {
      validateRequiredParameters({ symbol, levels, speed });
      this.subscribe(`${symbol.toLowerCase()}@depth${levels}@${speed}`);
    }
    /**
     * Diff. Depth Stream
     *
     * Order book price and quantity depth updates used to locally manage an order book.
     *
     * Stream Names: <symbol>@depth or <symbol>@depth@100ms
     * Update Speed: 1000ms or 100ms
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#diff-depth-stream}
     *
     * @param {string} symbol
     * @param {string} speed - 1000ms or 100ms
     */
    diffBookDepth(symbol, speed) {
      validateRequiredParameters({ symbol, speed });
      this.subscribe(`${symbol.toLowerCase()}@depth@${speed}`);
    }
    /**
     * Listen to User data stream
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#user-data-streams}
     *
     * @param {string} listenKey
     */
    userData(listenKey) {
      validateRequiredParameters({ listenKey });
      this.subscribe(listenKey);
    }
    unsubscribe(stream) {
      this.unsubscribe(stream);
    }
  };
}

// src/setters/mixinBase.ts
var SpotBase = mixinC2c(mixinMargin(mixinMarket(mixinSimpleEarn(mixinStream(mixinSubAccount(mixinTrade(mixinWallet(class {
  constructor(apiKey, apiSecret, options = {}) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.baseURL = options.baseURL || "https://api.binance.com";
    this.timeout = options.timeout || 0;
    this.proxy = options.proxy || false;
    this.httpsAgent = options.httpsAgent || false;
    this.privateKey = options.privateKey || Buffer.from("");
    this.privateKeyPassphrase = options.privateKeyPassphrase || "";
    this.privateKeyAlgo = options.privateKeyAlgo || "RSA";
  }
  async makeRequest(method, url, data) {
    return await httpRequest({
      method,
      baseURL: this.baseURL,
      url,
      apiKey: this.apiKey,
      timeout: this.timeout,
      proxy: this.proxy,
      httpsAgent: this.httpsAgent,
      data
    });
  }
  preparePath(path, options) {
    if (!options)
      return path;
    options = removeEmptyValue(options);
    const params = buildQueryString(options);
    return `${path}?${params}`;
  }
  prepareSignedPath(path, options) {
    const timeStamp = Date.now();
    const newOptions = { ...options, timestamp: timeStamp };
    options = removeEmptyValue(newOptions);
    const params = buildQueryString(options);
    let signature = "";
    if (this.apiSecret) {
      signature = crypto2.createHmac("sha256", this.apiSecret).update(params).digest("hex");
    } else if (this.privateKeyAlgo === "RSA") {
      signature = crypto2.sign("RSA-SHA256", Buffer.from(params), {
        key: this.privateKey,
        passphrase: this.privateKeyPassphrase
      }).toString("base64");
    } else if (this.privateKeyAlgo === "ED25519") {
      signature = crypto2.sign(null, Buffer.from(params), {
        key: this.privateKey,
        padding: crypto2.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: crypto2.constants.RSA_PSS_SALTLEN_DIGEST
      }).toString("base64");
    } else {
      throw new Error("privateKeyAlgo must be either 'RSA' or 'ED25519'");
    }
    return `${path}?${params}&signature=${signature}`;
  }
}))))))));
var WebsocketFeaturesBase = mixinWsAccount(mixinWsMarket(mixinWsTrade(mixinWsUserData(WebsocketBase(class {
  constructor(apiKey, apiSecret, options) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.wsURL = options && options.wsURL ? options.wsURL : "wss://ws-api.binance.com:443/ws-api/v3";
    this.callbacks = options && options.callbacks ? options.callbacks : {};
    this.reconnectDelay = options && options.reconnectDelay ? options.reconnectDelay : 5e3;
    this.wsConnection = {};
  }
})))));
var WebsocketStreamFeaturesBase = mixinWsStream(WebsocketBase(class {
  constructor(options = {}) {
    this.wsURL = options.wsURL || "wss://ws-api.binance.com:443/ws-api/v3";
    this.callbacks = options.callbacks || {};
    this.reconnectDelay = options.reconnectDelay || 5e3;
    this.wsConnection = {};
  }
}));

// src/spot.ts
var Spot = class extends SpotBase {
  constructor(apiKey = "", apiSecret = "", options = {}) {
    super(
      apiKey,
      apiSecret,
      options
    );
  }
};

// src/websocketAPI.ts
var crypto3 = __toESM(require("crypto"));
var WebsocketAPI = class extends WebsocketFeaturesBase {
  constructor(apiKey = "", apiSecret = "", options = {}) {
    super(apiKey, apiSecret, options);
    this.wsURL = options.wsURL || "wss://ws-api.binance.com:443/ws-api/v3";
    this.initConnect(this.wsURL);
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }
  sendMessageWithAPIKey(method, options = {}) {
    if (!this.isConnected()) {
      console.error("Not connected");
      return;
    }
    const id = options.id || randomString();
    options.apiKey = this.apiKey;
    delete options.id;
    const payload = {
      id,
      method,
      params: removeEmptyValue(options)
    };
    console.debug("Send message to Binance Websocket API Server:", payload);
    this.send(JSON.stringify(payload));
  }
  sendMessage(method, options = {}) {
    if (!this.isConnected()) {
      console.error("Not connected");
      return;
    }
    const id = options.id && /^[0-9a-f]{32}$/.test(options.id) ? options.id : randomString();
    delete options.id;
    const payload = {
      id,
      method,
      params: removeEmptyValue(options)
    };
    console.debug("Send message to Binance Websocket API Server:", payload);
    this.send(JSON.stringify(payload));
  }
  sendSignatureMessage(method, options = {}) {
    if (!this.isConnected()) {
      console.error("Not connected");
      return;
    }
    const id = options.id || randomString();
    delete options.id;
    options = removeEmptyValue(options);
    options.apiKey = this.apiKey;
    options.timestamp = Date.now();
    options = sortObject(options);
    options.signature = crypto3.createHmac("sha256", this.apiSecret).update(buildQueryString(options)).digest("hex");
    const payload = {
      id,
      method,
      params: options
    };
    console.debug("Send message to Binance Websocket API Server:", payload);
    this.send(JSON.stringify(payload));
  }
};

// src/websocketStream.ts
var WebsocketStream = class extends WebsocketStreamFeaturesBase {
  constructor(options) {
    super(options);
    this.wsURL = options && options.wsURL ? options.wsURL : "wss://stream.binance.com:9443";
    this.combinedStreams = options && options.combinedStreams ? options.combinedStreams : false;
  }
  _prepareURL(stream) {
    let url = `${this.wsURL}/ws/${stream}`;
    if (this.combinedStreams) {
      url = `${this.wsURL}/stream?streams=${stream}`;
    }
    return url;
  }
  subscribe(stream) {
    if (!this.isConnected()) {
      const url = this._prepareURL(stream);
      this.initConnect(url);
    } else {
      if (!Array.isArray(stream)) {
        stream = [stream];
      }
      const payload = {
        method: "SUBSCRIBE",
        params: stream,
        id: Date.now()
      };
      console.info("SUBSCRIBE", payload);
      this.send(JSON.stringify(payload));
    }
  }
  unsubscribe(stream) {
    if (!this.isConnected()) {
      console.warn("Not connected");
    } else {
      if (!Array.isArray(stream)) {
        stream = [stream];
      }
      const payload = {
        method: "UNSUBSCRIBE",
        params: stream,
        id: Date.now()
      };
      console.info("UNSUBSCRIBE", payload);
      this.send(JSON.stringify(payload));
    }
  }
};

// src/modules/enum.ts
var AccountSnapshotType = /* @__PURE__ */ ((AccountSnapshotType2) => {
  AccountSnapshotType2["SPOT"] = "SPOT";
  AccountSnapshotType2["MARGIN"] = "MARGIN";
  AccountSnapshotType2["FUTURES"] = "FUTURES";
  return AccountSnapshotType2;
})(AccountSnapshotType || {});
var AccountType = /* @__PURE__ */ ((AccountType2) => {
  AccountType2["MAIN"] = "MAIN";
  AccountType2["CARD"] = "CARD";
  return AccountType2;
})(AccountType || {});
var AddLiquidityPreviewType = /* @__PURE__ */ ((AddLiquidityPreviewType2) => {
  AddLiquidityPreviewType2["SINGLE"] = "SINGLE";
  AddLiquidityPreviewType2["COMBINATION"] = "COMBINATION";
  return AddLiquidityPreviewType2;
})(AddLiquidityPreviewType || {});
var BusdStableCoinsConversion = /* @__PURE__ */ ((BusdStableCoinsConversion2) => {
  BusdStableCoinsConversion2["USDC"] = "USDC";
  BusdStableCoinsConversion2["USDP"] = "USDP";
  BusdStableCoinsConversion2["TUSD"] = "TUSD";
  return BusdStableCoinsConversion2;
})(BusdStableCoinsConversion || {});
var CancelReplaceMode = /* @__PURE__ */ ((CancelReplaceMode2) => {
  CancelReplaceMode2["ALLOW_FAILURE"] = "ALLOW_FAILURE";
  CancelReplaceMode2["STOP_ON_FAILURE"] = "STOP_ON_FAILURE";
  return CancelReplaceMode2;
})(CancelReplaceMode || {});
var CancelResult = /* @__PURE__ */ ((CancelResult2) => {
  CancelResult2["SUCCESS"] = "SUCCESS";
  CancelResult2["FAILURE"] = "FAILURE";
  return CancelResult2;
})(CancelResult || {});
var CancelRestrictions = /* @__PURE__ */ ((CancelRestrictions2) => {
  CancelRestrictions2["ONLY_NEW"] = "ONLY_NEW";
  CancelRestrictions2["ONLY_PARTIALLY_FILLED"] = "ONLY_PARTIALLY_FILLED";
  return CancelRestrictions2;
})(CancelRestrictions || {});
var CrossMarginAccountTransferType = /* @__PURE__ */ ((CrossMarginAccountTransferType2) => {
  CrossMarginAccountTransferType2[CrossMarginAccountTransferType2["TransferFromMainAccountToMarginAccount"] = 1] = "TransferFromMainAccountToMarginAccount";
  CrossMarginAccountTransferType2[CrossMarginAccountTransferType2["TransferFromMarginAccountToMainAccount"] = 2] = "TransferFromMarginAccountToMainAccount";
  return CrossMarginAccountTransferType2;
})(CrossMarginAccountTransferType || {});
var CrossMarginAccountType = /* @__PURE__ */ ((CrossMarginAccountType2) => {
  CrossMarginAccountType2["Margin_1"] = "Margin_1";
  CrossMarginAccountType2["Margin_2"] = "Margin_2";
  return CrossMarginAccountType2;
})(CrossMarginAccountType || {});
var CrossMarginTrans = /* @__PURE__ */ ((CrossMarginTrans2) => {
  CrossMarginTrans2["SPOT"] = "SPOT";
  CrossMarginTrans2["FUTURES"] = "FUTURES";
  CrossMarginTrans2["FIAT"] = "FIAT";
  CrossMarginTrans2["DELIVERY"] = "DELIVERY";
  CrossMarginTrans2["MINING"] = "MINING";
  CrossMarginTrans2["ISOLATED_MARGIN"] = "ISOLATED_MARGIN";
  CrossMarginTrans2["FUNDING"] = "FUNDING";
  CrossMarginTrans2["MOTHER_SPOT"] = "MOTHER_SPOT";
  CrossMarginTrans2["OPTION"] = "OPTION";
  CrossMarginTrans2["SUB_SPOT"] = "SUB_SPOT";
  CrossMarginTrans2["SUB_MARGIN"] = "SUB_MARGIN";
  CrossMarginTrans2["CROSS_MARGIN"] = "CROSS_MARGIN";
  return CrossMarginTrans2;
})(CrossMarginTrans || {});
var DepositHistory = /* @__PURE__ */ ((DepositHistory2) => {
  DepositHistory2[DepositHistory2["Pending"] = 0] = "Pending";
  DepositHistory2[DepositHistory2["CreditedButCannotWithdraw"] = 6] = "CreditedButCannotWithdraw";
  DepositHistory2[DepositHistory2["Success"] = 1] = "Success";
  return DepositHistory2;
})(DepositHistory || {});
var Direction = /* @__PURE__ */ ((Direction2) => {
  Direction2["ADDITIONAL"] = "ADDITIONAL";
  Direction2["REDUCED"] = "REDUCED";
  return Direction2;
})(Direction || {});
var Featured = /* @__PURE__ */ ((Featured2) => {
  Featured2["ALL"] = "ALL";
  Featured2["TRUE"] = "TRUE";
  return Featured2;
})(Featured || {});
var FixedAndActivityProductType = /* @__PURE__ */ ((FixedAndActivityProductType2) => {
  FixedAndActivityProductType2["ACTIVITY"] = "ACTIVITY";
  FixedAndActivityProductType2["CUSTOMIZED_FIXED"] = "CUSTOMIZED_FIXED";
  return FixedAndActivityProductType2;
})(FixedAndActivityProductType || {});
var FlexibleProductStatus = /* @__PURE__ */ ((FlexibleProductStatus2) => {
  FlexibleProductStatus2["ALL"] = "ALL";
  FlexibleProductStatus2["SUBSCRIBABLE"] = "SUBSCRIBABLE";
  FlexibleProductStatus2["UNSUBSCRIBABLE"] = "UNSUBSCRIBABLE";
  return FlexibleProductStatus2;
})(FlexibleProductStatus || {});
var FlexibleProductType = /* @__PURE__ */ ((FlexibleProductType2) => {
  FlexibleProductType2["FAST"] = "FAST";
  FlexibleProductType2["NORMAL"] = "NORMAL";
  return FlexibleProductType2;
})(FlexibleProductType || {});
var FromAccountType = /* @__PURE__ */ ((FromAccountType2) => {
  FromAccountType2["SPOT"] = "SPOT";
  FromAccountType2["USDT_FUTURE"] = "USDT_FUTURE";
  FromAccountType2["COIN_FUTURE"] = "COIN_FUTURE";
  FromAccountType2["MARGIN"] = "MARGIN";
  FromAccountType2["ISOLATED_MARGIN"] = "ISOLATED_MARGIN";
  return FromAccountType2;
})(FromAccountType || {});
var FuturesType = /* @__PURE__ */ ((FuturesType2) => {
  FuturesType2[FuturesType2["USDTMarginedFutures"] = 1] = "USDTMarginedFutures";
  FuturesType2[FuturesType2["COINMarginedFutures"] = 2] = "COINMarginedFutures";
  return FuturesType2;
})(FuturesType || {});
var FuturesTransferType = /* @__PURE__ */ ((FuturesTransferType2) => {
  FuturesTransferType2[FuturesTransferType2["TransferFromSubaccountSpotAccountToItsUSDT"] = 1] = "TransferFromSubaccountSpotAccountToItsUSDT";
  FuturesTransferType2[FuturesTransferType2["TransferFromSubaccountUSDT"] = 2] = "TransferFromSubaccountUSDT";
  FuturesTransferType2[FuturesTransferType2["TransferFromSubaccountSpotAccountToItsCOIN"] = 3] = "TransferFromSubaccountSpotAccountToItsCOIN";
  FuturesTransferType2[FuturesTransferType2["TransferFromSubaccountCOIN"] = 4] = "TransferFromSubaccountCOIN";
  return FuturesTransferType2;
})(FuturesTransferType || {});
var DustAccountType = /* @__PURE__ */ ((DustAccountType2) => {
  DustAccountType2["SPOT"] = "SPOT";
  DustAccountType2["MARGIN"] = "MARGIN";
  return DustAccountType2;
})(DustAccountType || {});
var GetCrossMargingTransferHistoryType = /* @__PURE__ */ ((GetCrossMargingTransferHistoryType2) => {
  GetCrossMargingTransferHistoryType2["ROLL_IN"] = "ROLL_IN";
  GetCrossMargingTransferHistoryType2["ROLL_OUT"] = "ROLL_OUT";
  return GetCrossMargingTransferHistoryType2;
})(GetCrossMargingTransferHistoryType || {});
var HisrecStatus = /* @__PURE__ */ ((HisrecStatus2) => {
  HisrecStatus2[HisrecStatus2["Pending"] = 0] = "Pending";
  HisrecStatus2[HisrecStatus2["CreditedButCannotWithdraw"] = 6] = "CreditedButCannotWithdraw";
  HisrecStatus2[HisrecStatus2["Success"] = 1] = "Success";
  return HisrecStatus2;
})(HisrecStatus || {});
var HistoryStatus = /* @__PURE__ */ ((HistoryStatus2) => {
  HistoryStatus2[HistoryStatus2["EmailSent"] = 0] = "EmailSent";
  HistoryStatus2[HistoryStatus2["Cancelled"] = 1] = "Cancelled";
  HistoryStatus2[HistoryStatus2["AwaitingApproval"] = 2] = "AwaitingApproval";
  HistoryStatus2[HistoryStatus2["Rejected"] = 3] = "Rejected";
  HistoryStatus2[HistoryStatus2["Processing"] = 4] = "Processing";
  HistoryStatus2[HistoryStatus2["Failure"] = 5] = "Failure";
  HistoryStatus2[HistoryStatus2["Completed"] = 6] = "Completed";
  return HistoryStatus2;
})(HistoryStatus || {});
var IncomeType = /* @__PURE__ */ ((IncomeType2) => {
  IncomeType2["borrowIn"] = "borrowIn";
  IncomeType2["collateralSpent"] = "collateralSpent";
  IncomeType2["repayAmount"] = "repayAmount";
  IncomeType2["collateralReturn"] = "collateralReturn";
  IncomeType2["addCollateral"] = "addCollateral";
  IncomeType2["removeCollateral"] = "removeCollateral";
  IncomeType2["collateralReturnAfterLiquidation"] = "collateralReturnAfterLiquidation";
  return IncomeType2;
})(IncomeType || {});
var InterestBNBBurn = /* @__PURE__ */ ((InterestBNBBurn2) => {
  InterestBNBBurn2["true"] = "true";
  InterestBNBBurn2["false"] = "false";
  return InterestBNBBurn2;
})(InterestBNBBurn || {});
var Interval = /* @__PURE__ */ ((Interval2) => {
  Interval2["1s"] = "1s";
  Interval2["1m"] = "1m";
  Interval2["3m"] = "3m";
  Interval2["5m"] = "5m";
  Interval2["15m"] = "15m";
  Interval2["30m"] = "30m";
  Interval2["1h"] = "1h";
  Interval2["2h"] = "2h";
  Interval2["4h"] = "4h";
  Interval2["6h"] = "6h";
  Interval2["8h"] = "8h";
  Interval2["12h"] = "12h";
  Interval2["1d"] = "1d";
  Interval2["3d"] = "3d";
  Interval2["1w"] = "1w";
  Interval2["1M"] = "1M";
  return Interval2;
})(Interval || {});
var IsFreeze = /* @__PURE__ */ ((IsFreeze2) => {
  IsFreeze2["true"] = "true";
  IsFreeze2["false"] = "false";
  return IsFreeze2;
})(IsFreeze || {});
var IsIsolatedMargin = /* @__PURE__ */ ((IsIsolatedMargin2) => {
  IsIsolatedMargin2["TRUE"] = "TRUE";
  IsIsolatedMargin2["FALSE"] = "FALSE";
  return IsIsolatedMargin2;
})(IsIsolatedMargin || {});
var LendingType = /* @__PURE__ */ ((LendingType2) => {
  LendingType2["DAILY"] = "DAILY";
  LendingType2["ACTIVITY"] = "ACTIVITY";
  LendingType2["CUSTOMIZED_FIXED"] = "CUSTOMIZED_FIXED";
  return LendingType2;
})(LendingType || {});
var LiquidityAddType = /* @__PURE__ */ ((LiquidityAddType2) => {
  LiquidityAddType2["SINGLE"] = "SINGLE";
  LiquidityAddType2["COMBINATION"] = "COMBINATION";
  return LiquidityAddType2;
})(LiquidityAddType || {});
var LiquidityRemoveType = /* @__PURE__ */ ((LiquidityRemoveType2) => {
  LiquidityRemoveType2["SINGLE"] = "SINGLE";
  LiquidityRemoveType2["COMBINATION"] = "COMBINATION";
  return LiquidityRemoveType2;
})(LiquidityRemoveType || {});
var MarginBorrowRepayType = /* @__PURE__ */ ((MarginBorrowRepayType2) => {
  MarginBorrowRepayType2["BORROW"] = "BORROW";
  MarginBorrowRepayType2["REPAY"] = "REPAY";
  return MarginBorrowRepayType2;
})(MarginBorrowRepayType || {});
var MargintransferType = /* @__PURE__ */ ((MargintransferType2) => {
  MargintransferType2[MargintransferType2["TransferFromMainAccountToMarginAccount"] = 1] = "TransferFromMainAccountToMarginAccount";
  MargintransferType2[MargintransferType2["TransferFromMarginAccountToMainAccount"] = 2] = "TransferFromMarginAccountToMainAccount";
  return MargintransferType2;
})(MargintransferType || {});
var MarginTransferType = /* @__PURE__ */ ((MarginTransferType2) => {
  MarginTransferType2["ROLL_IN"] = "ROLL_IN";
  MarginTransferType2["ROLL_OUT"] = "ROLL_OUT";
  return MarginTransferType2;
})(MarginTransferType || {});
var MarginStatus = /* @__PURE__ */ ((MarginStatus2) => {
  MarginStatus2["CONFIRMED"] = "CONFIRMED";
  MarginStatus2["PENDING"] = "PENDING";
  MarginStatus2["FAILED"] = "FAILED";
  return MarginStatus2;
})(MarginStatus || {});
var MarginInterestHistory = /* @__PURE__ */ ((MarginInterestHistory2) => {
  MarginInterestHistory2["PERIODIC"] = "PERIODIC";
  MarginInterestHistory2["ON_BORROW"] = "ON_BORROW";
  MarginInterestHistory2["PERIODIC_CONVERTED"] = "PERIODIC_CONVERTED";
  MarginInterestHistory2["ON_BORROW_CONVERTED"] = "ON_BORROW_CONVERTED";
  MarginInterestHistory2["PORTFOLIO"] = "PORTFOLIO";
  return MarginInterestHistory2;
})(MarginInterestHistory || {});
var MarginArchive = /* @__PURE__ */ ((MarginArchive2) => {
  MarginArchive2["true"] = "true";
  MarginArchive2["false"] = "false";
  return MarginArchive2;
})(MarginArchive || {});
var MarginLevelStatus = /* @__PURE__ */ ((MarginLevelStatus2) => {
  MarginLevelStatus2["EXCESSIVE"] = "EXCESSIVE";
  MarginLevelStatus2["NORMAL"] = "NORMAL";
  MarginLevelStatus2["MARGIN_CALL"] = "MARGIN_CALL";
  MarginLevelStatus2["PRE_LIQUIDATION"] = "PRE_LIQUIDATION";
  MarginLevelStatus2["FORCE_LIQUIDATION"] = "FORCE_LIQUIDATION";
  return MarginLevelStatus2;
})(MarginLevelStatus || {});
var MarginSubAccountTransferType = /* @__PURE__ */ ((MarginSubAccountTransferType2) => {
  MarginSubAccountTransferType2[MarginSubAccountTransferType2["TransferFromSubaccountSpotAccountToMarginAccount"] = 1] = "TransferFromSubaccountSpotAccountToMarginAccount";
  MarginSubAccountTransferType2[MarginSubAccountTransferType2["TransferFromSubaccountMarginAccountToItsSpotAccount"] = 2] = "TransferFromSubaccountMarginAccountToItsSpotAccount";
  return MarginSubAccountTransferType2;
})(MarginSubAccountTransferType || {});
var NeedBtcValuation = /* @__PURE__ */ ((NeedBtcValuation2) => {
  NeedBtcValuation2["true"] = "true";
  NeedBtcValuation2["false"] = "false";
  return NeedBtcValuation2;
})(NeedBtcValuation || {});
var NewOrderRespType = /* @__PURE__ */ ((NewOrderRespType2) => {
  NewOrderRespType2["ACK"] = "ACK";
  NewOrderRespType2["RESULT"] = "RESULT";
  NewOrderRespType2["FULL"] = "FULL";
  return NewOrderRespType2;
})(NewOrderRespType || {});
var NewOrderResult = /* @__PURE__ */ ((NewOrderResult2) => {
  NewOrderResult2["SUCCESS"] = "SUCCESS";
  NewOrderResult2["FAILURE"] = "FAILURE";
  NewOrderResult2["NOT_ATTEMPTED"] = "NOT_ATTEMPTED";
  return NewOrderResult2;
})(NewOrderResult || {});
var OCOOrderStatus = /* @__PURE__ */ ((OCOOrderStatus2) => {
  OCOOrderStatus2["EXECUTING"] = "EXECUTING";
  OCOOrderStatus2["ALL_DONE"] = "ALL_DONE";
  OCOOrderStatus2["REJECT"] = "REJECT";
  return OCOOrderStatus2;
})(OCOOrderStatus || {});
var OcoNewOrderRespType = /* @__PURE__ */ ((OcoNewOrderRespType2) => {
  OcoNewOrderRespType2["ACK"] = "ACK";
  OcoNewOrderRespType2["RESULT"] = "RESULT";
  OcoNewOrderRespType2["FULL"] = "FULL";
  return OcoNewOrderRespType2;
})(OcoNewOrderRespType || {});
var OCOStatusType = /* @__PURE__ */ ((OCOStatusType2) => {
  OCOStatusType2["RESPONSE"] = "RESPONSE";
  OCOStatusType2["EXEC_STARTED"] = "EXEC_STARTED";
  OCOStatusType2["ALL_DONE"] = "ALL_DONE";
  return OCOStatusType2;
})(OCOStatusType || {});
var Operation = /* @__PURE__ */ ((Operation2) => {
  Operation2["ADD"] = "ADD";
  Operation2["REMOVE"] = "REMOVE";
  return Operation2;
})(Operation || {});
var OptionalFixedAndActivityProductStatus = /* @__PURE__ */ ((OptionalFixedAndActivityProductStatus2) => {
  OptionalFixedAndActivityProductStatus2["ALL"] = "ALL";
  OptionalFixedAndActivityProductStatus2["SUBSCRIBABLE"] = "SUBSCRIBABLE";
  OptionalFixedAndActivityProductStatus2["UNSUBSCRIBABLE"] = "UNSUBSCRIBABLE";
  return OptionalFixedAndActivityProductStatus2;
})(OptionalFixedAndActivityProductStatus || {});
var OptionalFlexibleProductStatus = /* @__PURE__ */ ((OptionalFlexibleProductStatus2) => {
  OptionalFlexibleProductStatus2["ALL"] = "ALL";
  OptionalFlexibleProductStatus2["SUBSCRIBABLE"] = "SUBSCRIBABLE";
  OptionalFlexibleProductStatus2["UNSUBSCRIBABLE"] = "UNSUBSCRIBABLE";
  return OptionalFlexibleProductStatus2;
})(OptionalFlexibleProductStatus || {});
var OptionalSide = /* @__PURE__ */ ((OptionalSide2) => {
  OptionalSide2["SELL"] = "SELL";
  OptionalSide2["BUY"] = "BUY";
  return OptionalSide2;
})(OptionalSide || {});
var OptionalTransFrom = /* @__PURE__ */ ((OptionalTransFrom2) => {
  OptionalTransFrom2["SPOT"] = "SPOT";
  OptionalTransFrom2["ISOLATED_MARGIN"] = "ISOLATED_MARGIN";
  return OptionalTransFrom2;
})(OptionalTransFrom || {});
var OptionalTransTo = /* @__PURE__ */ ((OptionalTransTo2) => {
  OptionalTransTo2["SPOT"] = "SPOT";
  OptionalTransTo2["ISOLATED_MARGIN"] = "ISOLATED_MARGIN";
  return OptionalTransTo2;
})(OptionalTransTo || {});
var OrderStatus = /* @__PURE__ */ ((OrderStatus2) => {
  OrderStatus2["NEW"] = "NEW";
  OrderStatus2["PARTIALLY_FILLED"] = "PARTIALLY_FILLED";
  OrderStatus2["FILLED"] = "FILLED";
  OrderStatus2["CANCELED"] = "CANCELED";
  OrderStatus2["PENDING_CANCEL"] = "PENDING_CANCEL";
  OrderStatus2["REJECTED"] = "REJECTED";
  OrderStatus2["EXPIRED"] = "EXPIRED";
  OrderStatus2["EXPIRED_IN_MATCH"] = "EXPIRED_IN_MATCH";
  return OrderStatus2;
})(OrderStatus || {});
var OrderType = /* @__PURE__ */ ((OrderType2) => {
  OrderType2["LIMIT"] = "LIMIT";
  OrderType2["MARKET"] = "MARKET";
  OrderType2["STOP_LOSS"] = "STOP_LOSS";
  OrderType2["STOP_LOSS_LIMIT"] = "STOP_LOSS_LIMIT";
  OrderType2["TAKE_PROFIT"] = "TAKE_PROFIT";
  OrderType2["TAKE_PROFIT_LIMIT"] = "TAKE_PROFIT_LIMIT";
  OrderType2["LIMIT_MAKER"] = "LIMIT_MAKER";
  return OrderType2;
})(OrderType || {});
var Permissions = /* @__PURE__ */ ((Permissions2) => {
  Permissions2["SPOT"] = "SPOT";
  Permissions2["MARGIN"] = "MARGIN";
  Permissions2["LEVERAGED"] = "LEVERAGED";
  Permissions2["TRD_GRP_002"] = "TRD_GRP_002";
  Permissions2["TRD_GRP_003"] = "TRD_GRP_003";
  Permissions2["TRD_GRP_004"] = "TRD_GRP_004";
  Permissions2["TRD_GRP_005"] = "TRD_GRP_005";
  Permissions2["TRD_GRP_006"] = "TRD_GRP_006";
  Permissions2["TRD_GRP_007"] = "TRD_GRP_007";
  Permissions2["TRD_GRP_008"] = "TRD_GRP_008";
  Permissions2["TRD_GRP_009"] = "TRD_GRP_009";
  Permissions2["TRD_GRP_010"] = "TRD_GRP_010";
  Permissions2["TRD_GRP_011"] = "TRD_GRP_011";
  Permissions2["TRD_GRP_012"] = "TRD_GRP_012";
  Permissions2["TRD_GRP_013"] = "TRD_GRP_013";
  return Permissions2;
})(Permissions || {});
var PositionSide = /* @__PURE__ */ ((PositionSide2) => {
  PositionSide2["BOTH"] = "BOTH";
  PositionSide2["LONG"] = "LONG";
  PositionSide2["SHORT"] = "SHORT";
  return PositionSide2;
})(PositionSide || {});
var PositionStatus = /* @__PURE__ */ ((PositionStatus2) => {
  PositionStatus2["HOLDING"] = "HOLDING";
  PositionStatus2["REDEEMED"] = "REDEEMED";
  return PositionStatus2;
})(PositionStatus || {});
var QueryConvertTransfer = /* @__PURE__ */ ((QueryConvertTransfer2) => {
  QueryConvertTransfer2["MAIN"] = "MAIN";
  QueryConvertTransfer2["CARD"] = "CARD";
  return QueryConvertTransfer2;
})(QueryConvertTransfer || {});
var QuerySubAccountList = /* @__PURE__ */ ((QuerySubAccountList2) => {
  QuerySubAccountList2["true"] = "true";
  QuerySubAccountList2["false"] = "false";
  return QuerySubAccountList2;
})(QuerySubAccountList || {});
var RemoveLiquidityPreviewType = /* @__PURE__ */ ((RemoveLiquidityPreviewType2) => {
  RemoveLiquidityPreviewType2["SINGLE"] = "SINGLE";
  RemoveLiquidityPreviewType2["COMBINATION"] = "COMBINATION";
  return RemoveLiquidityPreviewType2;
})(RemoveLiquidityPreviewType || {});
var RedeemDestAccount = /* @__PURE__ */ ((RedeemDestAccount2) => {
  RedeemDestAccount2["SPOT"] = "SPOT";
  RedeemDestAccount2["FUND"] = "FUND";
  RedeemDestAccount2["ALL"] = "ALL";
  return RedeemDestAccount2;
})(RedeemDestAccount || {});
var SelfTradePreventionMode = /* @__PURE__ */ ((SelfTradePreventionMode2) => {
  SelfTradePreventionMode2["EXPIRE_TAKER"] = "EXPIRE_TAKER";
  SelfTradePreventionMode2["EXPIRE_MAKER"] = "EXPIRE_MAKER";
  SelfTradePreventionMode2["EXPIRE_BOTH"] = "EXPIRE_BOTH";
  SelfTradePreventionMode2["NONE"] = "NONE";
  return SelfTradePreventionMode2;
})(SelfTradePreventionMode || {});
var Side = /* @__PURE__ */ ((Side2) => {
  Side2["SELL"] = "SELL";
  Side2["BUY"] = "BUY";
  return Side2;
})(Side || {});
var SideEffectType = /* @__PURE__ */ ((SideEffectType2) => {
  SideEffectType2["NO_SIDE_EFFECT"] = "NO_SIDE_EFFECT";
  SideEffectType2["MARGIN_BUY"] = "MARGIN_BUY";
  SideEffectType2["AUTO_REPAY"] = "AUTO_REPAY";
  SideEffectType2["AUTO_BORROW_REPAY"] = "AUTO_BORROW_REPAY";
  return SideEffectType2;
})(SideEffectType || {});
var SimpleEarnDestAccount = /* @__PURE__ */ ((SimpleEarnDestAccount2) => {
  SimpleEarnDestAccount2["SPOT"] = "SPOT";
  SimpleEarnDestAccount2["FUNDING"] = "FUNDING";
  return SimpleEarnDestAccount2;
})(SimpleEarnDestAccount || {});
var SimpleEarnFlexibleRewards = /* @__PURE__ */ ((SimpleEarnFlexibleRewards2) => {
  SimpleEarnFlexibleRewards2["BONUS"] = "BONUS";
  SimpleEarnFlexibleRewards2["REALTIME"] = "REALTIME";
  SimpleEarnFlexibleRewards2["REWARDS"] = "REWARDS";
  return SimpleEarnFlexibleRewards2;
})(SimpleEarnFlexibleRewards || {});
var SimpleEarnLockedRedemption = /* @__PURE__ */ ((SimpleEarnLockedRedemption2) => {
  SimpleEarnLockedRedemption2["MATURE"] = "MATURE";
  SimpleEarnLockedRedemption2["NEW_TRANSFERRED"] = "NEW_TRANSFERRED";
  SimpleEarnLockedRedemption2["AHEAD"] = "AHEAD";
  return SimpleEarnLockedRedemption2;
})(SimpleEarnLockedRedemption || {});
var SimpleEarnSourceAccount = /* @__PURE__ */ ((SimpleEarnSourceAccount2) => {
  SimpleEarnSourceAccount2["SPOT"] = "SPOT";
  SimpleEarnSourceAccount2["FUNDING"] = "FUNDING";
  SimpleEarnSourceAccount2["SPOTANDFUNDING"] = "SPOTANDFUNDING";
  return SimpleEarnSourceAccount2;
})(SimpleEarnSourceAccount || {});
var SimpleEarnStatus = /* @__PURE__ */ ((SimpleEarnStatus2) => {
  SimpleEarnStatus2["SUCCESS"] = "SUCCESS";
  SimpleEarnStatus2["PURCHASING"] = "PURCHASING";
  SimpleEarnStatus2["FAILED"] = "FAILED";
  return SimpleEarnStatus2;
})(SimpleEarnStatus || {});
var SimpleEarnType = /* @__PURE__ */ ((SimpleEarnType2) => {
  SimpleEarnType2["AUTO"] = "AUTO";
  SimpleEarnType2["NORMAL"] = "NORMAL";
  SimpleEarnType2["CONVERT"] = "CONVERT";
  SimpleEarnType2["LOAN"] = "LOAN";
  SimpleEarnType2["AI"] = "AI";
  SimpleEarnType2["TRANSFER"] = "TRANSFER";
  return SimpleEarnType2;
})(SimpleEarnType || {});
var SortBy = /* @__PURE__ */ ((SortBy2) => {
  SortBy2["START_TIME"] = "START_TIME";
  SortBy2["LOT_SIZE"] = "LOT_SIZE";
  SortBy2["INTEREST_RATE"] = "INTEREST_RATE";
  SortBy2["DURATION"] = "DURATION";
  return SortBy2;
})(SortBy || {});
var SpotBNBBurn = /* @__PURE__ */ ((SpotBNBBurn2) => {
  SpotBNBBurn2["true"] = "true";
  SpotBNBBurn2["false"] = "false";
  return SpotBNBBurn2;
})(SpotBNBBurn || {});
var StopLimitTimeInForce = /* @__PURE__ */ ((StopLimitTimeInForce2) => {
  StopLimitTimeInForce2["GTC"] = "GTC";
  StopLimitTimeInForce2["FOK"] = "FOK";
  StopLimitTimeInForce2["IOC"] = "IOC";
  return StopLimitTimeInForce2;
})(StopLimitTimeInForce || {});
var SubAccountStatus = /* @__PURE__ */ ((SubAccountStatus2) => {
  SubAccountStatus2["SUCCESS"] = "SUCCESS";
  SubAccountStatus2["PROCESS"] = "PROCESS";
  SubAccountStatus2["FAILURE"] = "FAILURE";
  return SubAccountStatus2;
})(SubAccountStatus || {});
var SubAccountTransferLog = /* @__PURE__ */ ((SubAccountTransferLog2) => {
  SubAccountTransferLog2["SPOT"] = "SPOT";
  SubAccountTransferLog2["USDT_FUTURE"] = "USDT_FUTURE";
  SubAccountTransferLog2["COIN_FUTURE"] = "COIN_FUTURE";
  SubAccountTransferLog2["MARGIN"] = "MARGIN";
  SubAccountTransferLog2["ISOLATED_MARGIN"] = "ISOLATED_MARGIN";
  return SubAccountTransferLog2;
})(SubAccountTransferLog || {});
var SubscribeSourceAccount = /* @__PURE__ */ ((SubscribeSourceAccount2) => {
  SubscribeSourceAccount2["SPOT"] = "SPOT";
  SubscribeSourceAccount2["FUND"] = "FUND";
  SubscribeSourceAccount2["ALL"] = "ALL";
  return SubscribeSourceAccount2;
})(SubscribeSourceAccount || {});
var SubUserHistoryType = /* @__PURE__ */ ((SubUserHistoryType2) => {
  SubUserHistoryType2[SubUserHistoryType2["TransferIn"] = 1] = "TransferIn";
  SubUserHistoryType2[SubUserHistoryType2["TransferOut"] = 2] = "TransferOut";
  return SubUserHistoryType2;
})(SubUserHistoryType || {});
var SwapStatus = /* @__PURE__ */ ((SwapStatus2) => {
  SwapStatus2[SwapStatus2["PendingForSwap"] = 0] = "PendingForSwap";
  SwapStatus2[SwapStatus2["Success"] = 1] = "Success";
  SwapStatus2[SwapStatus2["Failed"] = 2] = "Failed";
  return SwapStatus2;
})(SwapStatus || {});
var TimeInForce = /* @__PURE__ */ ((TimeInForce2) => {
  TimeInForce2["GTC"] = "GTC";
  TimeInForce2["IOC"] = "IOC";
  TimeInForce2["FOK"] = "FOK";
  return TimeInForce2;
})(TimeInForce || {});
var ToAccountType = /* @__PURE__ */ ((ToAccountType2) => {
  ToAccountType2["SPOT"] = "SPOT";
  ToAccountType2["USDT_FUTURE"] = "USDT_FUTURE";
  ToAccountType2["COIN_FUTURE"] = "COIN_FUTURE";
  ToAccountType2["MARGIN"] = "MARGIN";
  ToAccountType2["ISOLATED_MARGIN"] = "ISOLATED_MARGIN";
  return ToAccountType2;
})(ToAccountType || {});
var TradeType = /* @__PURE__ */ ((TradeType2) => {
  TradeType2["BUY"] = "BUY";
  TradeType2["SELL"] = "SELL";
  return TradeType2;
})(TradeType || {});
var TransFrom = /* @__PURE__ */ ((TransFrom2) => {
  TransFrom2["SPOT"] = "SPOT";
  TransFrom2["ISOLATED_MARGIN"] = "ISOLATED_MARGIN";
  return TransFrom2;
})(TransFrom || {});
var TransTo = /* @__PURE__ */ ((TransTo2) => {
  TransTo2["SPOT"] = "SPOT";
  TransTo2["ISOLATED_MARGIN"] = "ISOLATED_MARGIN";
  return TransTo2;
})(TransTo || {});
var TransactionType = /* @__PURE__ */ ((TransactionType2) => {
  TransactionType2["Deposit"] = "0";
  TransactionType2["Withdraw"] = "1";
  return TransactionType2;
})(TransactionType || {});
var UnivStatus = /* @__PURE__ */ ((UnivStatus2) => {
  UnivStatus2["CONFIRMED"] = "CONFIRMED";
  UnivStatus2["PENDING"] = "PENDING";
  UnivStatus2["FAILED"] = "FAILED";
  return UnivStatus2;
})(UnivStatus || {});
var UnivTransferType = /* @__PURE__ */ ((UnivTransferType2) => {
  UnivTransferType2["MAIN_MARGIN"] = "MAIN_MARGIN";
  UnivTransferType2["CMFUTURE_MAIN"] = "CMFUTURE_MAIN";
  UnivTransferType2["MARGIN_MAIN"] = "MARGIN_MAIN";
  UnivTransferType2["ISOLATEDMARGIN_MARGIN"] = "ISOLATEDMARGIN_MARGIN";
  UnivTransferType2["MARGIN_ISOLATEDMARGIN"] = "MARGIN_ISOLATEDMARGIN";
  UnivTransferType2["ISOLATEDMARGIN_ISOLATEDMARGIN"] = "ISOLATEDMARGIN_ISOLATEDMARGIN";
  UnivTransferType2["MARGIN_FUNDING"] = "MARGIN_FUNDING";
  UnivTransferType2["FUNDING_MARGIN"] = "FUNDING_MARGIN";
  UnivTransferType2["OPTION_MAIN"] = "OPTION_MAIN";
  UnivTransferType2["MARGIN_OPTION"] = "MARGIN_OPTION";
  UnivTransferType2["OPTION_MARGIN"] = "OPTION_MARGIN";
  UnivTransferType2["FUNDING_OPTION"] = "FUNDING_OPTION";
  UnivTransferType2["OPTION_FUNDING"] = "OPTION_FUNDING";
  UnivTransferType2["MAIN_PORTFOLIO_MARGIN"] = "MAIN_PORTFOLIO_MARGIN";
  UnivTransferType2["PORTFOLIO_MARGIN_MAIN"] = "PORTFOLIO_MARGIN_MAIN";
  UnivTransferType2["MAIN_ISOLATED_MARGIN"] = "MAIN_ISOLATED_MARGIN";
  UnivTransferType2["ISOLATED_MARGIN_MAIN"] = "ISOLATED_MARGIN_MAIN";
  UnivTransferType2["MAIN_FUNDING"] = "MAIN_FUNDING";
  UnivTransferType2["FUNDING_MAIN"] = "FUNDING_MAIN";
  return UnivTransferType2;
})(UnivTransferType || {});
var Urgency = /* @__PURE__ */ ((Urgency2) => {
  Urgency2["LOW"] = "LOW";
  Urgency2["MEDIUM"] = "MEDIUM";
  Urgency2["HIGH"] = "HIGH";
  return Urgency2;
})(Urgency || {});
var ValidTime = /* @__PURE__ */ ((ValidTime2) => {
  ValidTime2["10s"] = "10s";
  ValidTime2["30s"] = "30s";
  ValidTime2["1m"] = "1m";
  ValidTime2["2m"] = "2m";
  return ValidTime2;
})(ValidTime || {});
var WithdrawHistory = /* @__PURE__ */ ((WithdrawHistory2) => {
  WithdrawHistory2[WithdrawHistory2["EmailSent"] = 0] = "EmailSent";
  WithdrawHistory2[WithdrawHistory2["Cancelled"] = 1] = "Cancelled";
  WithdrawHistory2[WithdrawHistory2["AwaitingApproval"] = 2] = "AwaitingApproval";
  WithdrawHistory2[WithdrawHistory2["Rejected"] = 3] = "Rejected";
  WithdrawHistory2[WithdrawHistory2["Processing"] = 4] = "Processing";
  WithdrawHistory2[WithdrawHistory2["Failure"] = 5] = "Failure";
  WithdrawHistory2[WithdrawHistory2["Completed"] = 6] = "Completed";
  return WithdrawHistory2;
})(WithdrawHistory || {});
var WorkingFloor = /* @__PURE__ */ ((WorkingFloor2) => {
  WorkingFloor2["EXCHANGE"] = "EXCHANGE";
  WorkingFloor2["SOR"] = "SOR";
  return WorkingFloor2;
})(WorkingFloor || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccountSnapshotType,
  AccountType,
  AddLiquidityPreviewType,
  BusdStableCoinsConversion,
  CancelReplaceMode,
  CancelRestrictions,
  CancelResult,
  CrossMarginAccountTransferType,
  CrossMarginAccountType,
  CrossMarginTrans,
  DepositHistory,
  Direction,
  DustAccountType,
  Featured,
  FixedAndActivityProductType,
  FlexibleProductStatus,
  FlexibleProductType,
  FromAccountType,
  FuturesTransferType,
  FuturesType,
  GetCrossMargingTransferHistoryType,
  HisrecStatus,
  HistoryStatus,
  IncomeType,
  InterestBNBBurn,
  Interval,
  IsFreeze,
  IsIsolatedMargin,
  LendingType,
  LiquidityAddType,
  LiquidityRemoveType,
  MarginArchive,
  MarginBorrowRepayType,
  MarginInterestHistory,
  MarginLevelStatus,
  MarginStatus,
  MarginSubAccountTransferType,
  MarginTransferType,
  MargintransferType,
  NeedBtcValuation,
  NewOrderRespType,
  NewOrderResult,
  OCOOrderStatus,
  OCOStatusType,
  OcoNewOrderRespType,
  Operation,
  OptionalFixedAndActivityProductStatus,
  OptionalFlexibleProductStatus,
  OptionalSide,
  OptionalTransFrom,
  OptionalTransTo,
  OrderStatus,
  OrderType,
  Permissions,
  PositionSide,
  PositionStatus,
  QueryConvertTransfer,
  QuerySubAccountList,
  RedeemDestAccount,
  RemoveLiquidityPreviewType,
  RestC2cTypes,
  RestMarginTypes,
  RestMarketTypes,
  RestSimpleEarnTypes,
  RestStreamTypes,
  RestSubAccountTypes,
  RestTradeTypes,
  RestWalletTypes,
  SelfTradePreventionMode,
  Side,
  SideEffectType,
  SimpleEarnDestAccount,
  SimpleEarnFlexibleRewards,
  SimpleEarnLockedRedemption,
  SimpleEarnSourceAccount,
  SimpleEarnStatus,
  SimpleEarnType,
  SortBy,
  Spot,
  SpotBNBBurn,
  StopLimitTimeInForce,
  SubAccountStatus,
  SubAccountTransferLog,
  SubUserHistoryType,
  SubscribeSourceAccount,
  SwapStatus,
  TimeInForce,
  ToAccountType,
  TradeType,
  TransFrom,
  TransTo,
  TransactionType,
  UnivStatus,
  UnivTransferType,
  Urgency,
  ValidTime,
  WebsocketAPI,
  WebsocketStream,
  WithdrawHistory,
  WorkingFloor,
  WsAccountTypes,
  WsMarketTypes,
  WsTradeTypes,
  WsUserDataTypes,
  WssTypes
});
//# sourceMappingURL=index.js.map