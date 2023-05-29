import { CurrencyRates } from '../../../typings/types'

export interface IAppLogic {
    propsToMain: {
        baseCurrency: {
            value: string,
            onChange: (newVal: string) => void;
        },
        rates: CurrencyRates,
        timeDate: null | Date,
        refresh: () => void,
        notFoundCurrecy: boolean
    },

}
export interface IAppProps {

}
