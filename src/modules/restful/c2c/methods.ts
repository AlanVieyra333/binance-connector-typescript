import { 
    AdQueryByPageReq,
    CommonPageRet_AdDetailResp,
    CommonRet_AdDetailResp,
} from './types';

export interface C2cMethods {
    getDetailByNo(adsNo: string): Promise<CommonRet_AdDetailResp>;
    listWithPagination(page: number, rows: number, options?: AdQueryByPageReq): Promise<CommonPageRet_AdDetailResp>;
}