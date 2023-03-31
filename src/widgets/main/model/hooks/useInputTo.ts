import {Dispatch, SetStateAction} from "react";




export const useInputTo = (
    currencyTo:string,
    currencyFrom:string,
    mergedObject:{[key :string]:number},
    setInputFrom:Dispatch<SetStateAction<number>>,
    setInputTo:Dispatch<SetStateAction<number>>
) =>{
    function handleChangeInputTo(value:number) {
        setInputTo(value);
        setInputFrom(parseFloat((value * mergedObject[currencyTo] / mergedObject[currencyFrom]).toFixed(4)))
    }

    return{
        handleChangeInputTo
    }
}