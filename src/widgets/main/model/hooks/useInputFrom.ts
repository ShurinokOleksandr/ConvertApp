import {Dispatch, SetStateAction} from "react";


export const useInputFrom = (
    currencyFrom:string,
    currencyTo:string,
    mergedObject:{[key :string]:number},
    setInputFrom:Dispatch<SetStateAction<number>>,
    setInputTo:Dispatch<SetStateAction<number>>
) =>{
    function handleChangeInputFrom(value:number) {

        setInputFrom(value);
        setInputTo(parseFloat((value * mergedObject[currencyFrom] / mergedObject[currencyTo]).toFixed(4)))
    }
    return{
        handleChangeInputFrom
    }
}