import {
    AdQueryByPageReq,
    CommonPageRet_AdDetailResp,
    CommonPageRet_AdSearchResp,
    CommonRet_AdDetailResp,
    CommonPageRet_UserOrderHistory,
    listUserOrderHistoryOptions,
    searchOptions,
    CommonRet_AdSearchResp,
} from './types';

export interface C2cMethods {
    getDetailByNo(adsNo: string): Promise<CommonRet_AdDetailResp>;
    listWithPagination(page: number, rows: number, options?: AdQueryByPageReq): Promise<CommonPageRet_AdDetailResp>;
    search(asset:string, fiat: string, page: number, rows:number, tradeType:string, options?: searchOptions): Promise<CommonPageRet_AdSearchResp>;
    listUserOrderHistory(options?: listUserOrderHistoryOptions): Promise<CommonPageRet_UserOrderHistory>;
    
    detailWithAdvertiser(advNo: string): Promise<CommonRet_AdSearchResp>;
}