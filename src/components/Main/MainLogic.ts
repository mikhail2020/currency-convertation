import { IMainLogic, IMainProps } from './MainInterface';




/** Логика компонента Main */
export default function useMainLogic(props: IMainProps): IMainLogic {
    const arrayRates = [];


    
    for(let key in props.propsToMain.rates){
        const property = key as keyof typeof props.propsToMain.rates;
        arrayRates.push({name: key, value: props.propsToMain.rates[property] })
    }

    const result: IMainLogic = {
        arrayRates
    };

    return result;
}