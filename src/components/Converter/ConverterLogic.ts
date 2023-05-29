import { IConverterLogic, IConverterProps } from './ConverterInterface';




/** Логика компонента App */
export default function useConverterLogic(props: IConverterProps): IConverterLogic {
    const arrayRates: {name: string, value: number } [] = [];

    for(let key in props.rates){
        const property = key as keyof typeof props.rates;
        arrayRates.push({name: key, value: props.rates[property] })
    }


    const result: IConverterLogic = {
        arrayRates
    };

    return result;
}