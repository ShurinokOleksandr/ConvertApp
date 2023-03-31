import {Dispatch, SetStateAction} from "react";


export const useCurrencyTo = (
    currencyFrom:string,
    inputTo:number,
    mergedObject:{[key :string]:number},
    setInputFrom:Dispatch<SetStateAction<number>>,
    setCurrencyTo:Dispatch<SetStateAction<string>>
) =>{
    function handleChangeCurrencyTo(value:string) {
        setInputFrom(parseFloat((inputTo * mergedObject[value] / mergedObject[currencyFrom]).toFixed(4)))
        setCurrencyTo(value);
    }

    return{
        handleChangeCurrencyTo
    }
}
