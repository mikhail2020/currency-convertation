import { useEffect, useState } from 'react';
import { IAppLogic, IAppProps } from './AppInterface';
import axios from 'axios';
import { CurrencyRates } from '../../../typings/types';



const API_KEY = "f96e63029560c95cde280558"
     

/** Логика компонента App */
export default function useAppLogic(props: IAppProps): IAppLogic {

    const [rates, setRates] = useState<CurrencyRates>({});
    const [baseCurrency, setBaseCurrency] = useState("RUB");
    const [timeDate, setTimeDate] = useState<Date | null>(null);
    const [notFoundCurrecy, setNotFoundCurrecy] = useState(false);

    const onChangeCurrency = (val: string) => {
        setBaseCurrency(val)
        setRates({})
    }

    const [counter, setCounter] = useState(0);

    setInterval(()=>{
        setCounter( counter + 1 )
    }, 60000)

    const refreshDate = ()=>{
        setCounter( counter + 1 )
    }


    
    useEffect(() => {
        
        if (baseCurrency.length === 3) {
            const apiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`

            axios.get(apiUrl)
                .then(response => {
                    const data = response.data;
                    if (data.error) {
                        setNotFoundCurrecy(true);
                    } else {                    
                        setNotFoundCurrecy(false);
                        setRates(data.conversion_rates);
                    }
                })
                .catch(error => {
                    setNotFoundCurrecy(true);
                });
            setTimeDate(new Date())
        }


    }, [
        baseCurrency, 
        counter
    ]);

   

    const result: IAppLogic = {
        propsToMain: {
            baseCurrency: {
                value: baseCurrency,
                onChange: (newValue: string) => onChangeCurrency(newValue)
            },
            rates,
            timeDate,
            refresh: refreshDate,
            notFoundCurrecy
        }
    };

    return result;
}

// const test = {
//     ANG: 2.2143,
//     AUD: 1.8896,
//     AWG: 2.2143,
//     AZN: 2.1067,
//     BAM: 2.2494,
//     BBD: 2.4741,
//     BGN: 2.2493,
//     BHD: 0.4651,
//     BND: 1.6695,
//     BOB: 8.5831,
//     BRL: 6.1515,
//     BYN: 3.3009,
//     BZD: 2.4741,
//     CAD: 1.6803,
//     CNY: 8.7347
// }
