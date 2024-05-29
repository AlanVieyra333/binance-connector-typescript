import {
    CommonRet_FiatFee,
} from './types';

export interface FiatMethods {
    fiatFeeSettings(): Promise<CommonRet_FiatFee>;
}