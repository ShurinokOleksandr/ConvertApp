import React, {useState} from 'react';
import {Button} from "src/shared";
import Paragraph from "src/shared/ui/paragraph/Paragraph";
import Field from "src/features/field/ui/Field";
import {useAppSelector} from "src/store/hooks";
import {convertArrayToObject} from "src/shared/lib/convert-object";
import {ArrowsUpDownIcon} from "@heroicons/react/20/solid";
import {useCurrencyFrom, useCurrencyTo, useInputFrom, useInputTo} from "src/widgets/main";

export const Main = () => {
    const [inputFrom, setInputFrom] = useState<number>(0);
    const [inputTo, setInputTo] = useState<number>(0);
    const [currencyFrom, setCurrencyFrom] = useState('USD');
    const [currencyTo, setCurrencyTo] = useState('EUR');
    const {data} = useAppSelector(state => state.currencyData)
    const mergedObject = Object.assign({}, ...convertArrayToObject(data));


    const {handleChangeInputFrom} = useInputFrom(currencyFrom,currencyTo,mergedObject,setInputFrom,setInputTo)
    const {handleChangeInputTo} = useInputTo(currencyTo,currencyFrom,mergedObject,setInputFrom,setInputTo)
    const {handleChangeCurrencyForm} = useCurrencyFrom( currencyTo , inputFrom, mergedObject , setCurrencyFrom , setInputTo)
    const {handleChangeCurrencyTo} = useCurrencyTo( currencyFrom , inputTo, mergedObject , setInputFrom , setCurrencyTo)

    function changeValueFromPlace(){
        setInputFrom(inputTo)
        setInputTo(inputFrom)
        setCurrencyFrom(currencyTo)
        setCurrencyTo(currencyFrom)

    }
    function clear(){
        setInputFrom(0)
        setInputTo(0)
    }



    return (
        <div className={'bg-[#e7c6ff] h-[250px] rounded-2xl'}>
            <div className={'mt-7'}>
                <Field
                    clear={clear}
                    value={inputFrom}
                    currency={currencyFrom}
                    onChangeCurrency={handleChangeCurrencyForm}
                    onChangeValue={handleChangeInputFrom}
                >
                    Введите количество и выберите валюту
                </Field>
                <Paragraph className={'flex w-[500px] justify-end mb-2'}>
                    <Button onClick={changeValueFromPlace} className={'flex'}>
                        <Paragraph className={'mr-5'}>
                            Поменять
                        </Paragraph>
                        <ArrowsUpDownIcon className={'w-6'}/>
                    </Button>
                </Paragraph>
                <Field
                    clear={clear}
                    value={inputTo}
                    currency={currencyTo}
                    onChangeCurrency={handleChangeCurrencyTo}
                    onChangeValue={handleChangeInputTo}
                >
                    Ваш результат:
                </Field>
            </div>
        </div>
    );
};

