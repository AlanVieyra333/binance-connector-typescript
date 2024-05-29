import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
import {
    AdQueryByPageReq,
    CommonPageRet_AdDetailResp,
    CommonPageRet_AdSearchResp,
    CommonRet_AdDetailResp,
    CommonPageRet_UserOrderHistory,
    listUserOrderHistoryOptions,
    searchOptions,
    CommonRet_AdSearchResp,
    CommonRet_CommissionRateOverview,
} from './types';
import { C2cMethods } from './methods';

export function mixinC2c<T extends Constructor>(base: T): Constructor<C2cMethods> & T {
    return class extends base {
        /**
        * Get ads detail by number {@link file://c2c-sapi-v7.1.pdf#2.getDetailByNo}
        *
        * @param {number} adsNo
        */
        async getDetailByNo(adsNo: string): Promise<CommonRet_AdDetailResp> {
            validateRequiredParameters({ adsNo });
            const url = this.prepareSignedPath('/sapi/v1/c2c/ads/getDetailByNo',
                {
                    adsNo: adsNo
                }
            );
            return await this.makeRequest('POST', url);
        }

        /**
        * Get ads list with pagination {@link file://c2c-sapi-v7.1.pdf#4.listWithPagination}
        * 
        *
        * @param {number} page
        * @param {number} rows
        * @param {object} [options]
        */
        async listWithPagination(page: number, rows: number, options?: AdQueryByPageReq): Promise<CommonPageRet_AdDetailResp> {
            validateRequiredParameters({ page, rows });
            const url = this.prepareSignedPath('/sapi/v1/c2c/ads/listWithPagination');
            const data = Object.assign(
                options ? options : {},
                {
                    page: page,
                    rows: rows
                }
            );
            return await this.makeRequest('POST', url, data);
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
        async search(asset:string, fiat: string, page: number, rows:number, tradeType:string, options?: searchOptions): Promise<CommonPageRet_AdSearchResp> {
            validateRequiredParameters({ asset, fiat, page, rows, tradeType });
            const url = this.prepareSignedPath('/sapi/v1/c2c/ads/search');
            const data = Object.assign(
                options ? options : {},
                {
                    asset: asset,
                    fiat: fiat,
                    page: page,
                    rows: rows,
                    tradeType: tradeType
                }
            );
            return await this.makeRequest('POST', url, data);
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
        async listUserOrderHistory(options?: listUserOrderHistoryOptions): Promise<CommonPageRet_UserOrderHistory> {
            const url = this.prepareSignedPath('/sapi/v1/c2c/orderMatch/listUserOrderHistory',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }

        /**
        * Retrieve user order history with pagination {@link file://c2c-sapi-v7.1.pdf#40.commissionRateOverview}
        *
        * @param {string} fiat - Fiat currency, e.g. MXN
        */
        async commissionRateOverview(fiat: string): Promise<CommonRet_CommissionRateOverview> {
            validateRequiredParameters({ fiat });
            const url = this.prepareSignedPath('/sapi/v1/c2c/commission-rate/overview');
            const data = Object.assign(
                {
                    fiat: fiat,
                }
            );
            return await this.makeRequest('POST', url, data);
        }


        /**
        * Get adv detail by number. (BAPI: https://www.binance.com/bapi)
        *
        * @param {number} advNo
        */
        async detailWithAdvertiser(advNo: string): Promise<CommonRet_AdSearchResp> {
            validateRequiredParameters({ advNo });
            const url = this.preparePath('/bapi/c2c/v2/public/c2c/adv/detail-with-advertiser',
                {
                    advNo: advNo
                }
            );
            return await this.makeRequest('GET', url);
        }
    };
}
