import React from 'react';
import {Flex, Heading} from "src/shared";
import Paragraph from "src/shared/ui/paragraph/Paragraph";
import {useAppSelector} from "src/store/hooks";
import {convertArrayToObject} from "src/shared/lib/convert-object";
import {findValueByKey} from "src/shared/lib/findValue";



export const Header = () => {
    const {data} = useAppSelector(state => state.currencyData)
    const convertObj = convertArrayToObject(data)
    return (
        <div className={'w-full bg-[#e7c6ff] h-[130px] rounded-xl px-5 py-2'}>
            <Heading className={'font-semibold h-[30%] text-xl mb-2'}>
                Актуальный курс валют к UAH
            </Heading>
            <Flex className={'w-full h-[50%] justify-between items-center'}>
                <Paragraph className={'bg-[#eff1f5] px-3 py-2 rounded-2xl'}>
                    1 USD = {findValueByKey("USD",convertObj)} UAH
                </Paragraph>
                <Paragraph className={'bg-[#eff1f5] px-3 py-2 rounded-2xl'}>
                    1 EUR = {findValueByKey("EUR",convertObj)} UAH
                </Paragraph>
                <Paragraph className={'bg-[#eff1f5] px-3 py-2 rounded-2xl'}>
                    1 PLN = {findValueByKey("PLN",convertObj)} UAH
                </Paragraph>
            </Flex>
        </div>
    );
};

