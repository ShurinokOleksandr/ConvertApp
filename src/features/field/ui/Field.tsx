import React from 'react';
import {Flex, Heading} from "src/shared";
import {convertArrayToObject} from "src/shared/lib/convert-object";
import {useAppSelector} from "src/store/hooks";
import {XMarkIcon} from "@heroicons/react/20/solid";

interface FieldProps {
    children:React.ReactNode;
    clear:() => void;
    value:number;
    currency:string;
    onChangeCurrency:(value:string)=> void;
    onChangeValue:(value:number)=> void;

}
const Field = (
    {
        children,
        clear,
        value,
        currency,
        onChangeCurrency,
        onChangeValue}:FieldProps) => {


    const {data} = useAppSelector(state => state.currencyData)
    const convertObject = convertArrayToObject(data)
    return (
        <Flex className={'items-center justify-between px-6 py-3'}>
            <Heading className={'text-lg'}>
                {children}
            </Heading>
            <Flex className=" items-center rounded-lg bg-[#eff1f5] px-3 py-2 mx-4">
                <input
                    type="text"
                    value={value}
                    onChange={(event) => onChangeValue(parseFloat(event.target.value))}
                    className="pr-4 w-[150px] bg-transparent text-sm font-bold focus:outline-none"
                />
                <XMarkIcon className={'w-5 mx-2'} onClick={clear}/>
                <div className="border border-gray-600 h-8"></div>
                <select
                    className="bg-transparent text-sm font-bold w-[70px] pl-1 py-2"
                    value={currency}
                    onChange={(event ) => onChangeCurrency(event.target.value)}
                    name="select" id="up"
                >
                    {
                        Object.keys(convertObject[0]).map((currency) => (
                            <option key={currency}>{currency}</option>
                        ))
                    }
                </select>
            </Flex>
        </Flex>
    );
};

export default Field;