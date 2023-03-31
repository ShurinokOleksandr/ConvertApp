import {Dispatch, SetStateAction} from "react";

export const useCurrencyFrom = (
    currencyTo:string,
    inputFrom:number,
    mergedObject:{[key :string]:number},
    setCurrencyFrom:Dispatch<SetStateAction<string>>,
    setInputTo:Dispatch<SetStateAction<number>>
) =>{
    function handleChangeCurrencyForm(value:string) {
        setInputTo(parseFloat((inputFrom * mergedObject[value] / mergedObject[currencyTo]).toFixed(4)))
        setCurrencyFrom(value);
    }

    return{
        handleChangeCurrencyForm
    }
}