import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
import {
    AdQueryByPageReq,
    CommonPageRet_AdDetailResp,
    CommonRet_AdDetailResp,
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
    };
}
