import { Constructor } from '../../../setters/types';
import {
    CommonRet_FiatFee,
} from './types';
import { FiatMethods } from './methods';

export function mixinFiat<T extends Constructor>(base: T): Constructor<FiatMethods> & T {
    return class extends base {
        /**
        * Get list of fiat fees. (BAPI: https://www.binance.com/bapi)
        * 
        */
        async fiatFeeSettings(): Promise<CommonRet_FiatFee> {
            return await this.makeRequest('GET', '/bapi/fiat/v1/public/fiatpayment/fiat-fee/settings');
        }
    };
}
