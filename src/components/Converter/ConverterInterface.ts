import { CurrencyRates } from "../../../typings/types";

export interface IConverterLogic{
    arrayRates: {name: string, value: number }[];
    

}
export interface IConverterProps{
    rates: CurrencyRates,    
}
