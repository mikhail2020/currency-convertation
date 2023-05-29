import { CurrencyRates } from "../../../typings/types";

export interface IMainLogic{
    arrayRates: {name: string, value: number }[];
}
export interface IMainProps{
    propsToMain: {
        baseCurrency: {
            value: string,
            onChange: (newVal: string )=> void,
        },
        rates: CurrencyRates,
        timeDate: null | Date,
        refresh: () => void,
        notFoundCurrecy: boolean

    }
}

export interface IInputFieldProps {
    baseCurrency: {
        value: string,
        onChange: (newVal: string )=> void;
    },
    timeDate: null | Date,
    refresh: () => void  

}
