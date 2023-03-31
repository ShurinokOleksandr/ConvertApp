import React from "react";

export interface SharedProps {
    children:React.ReactNode;
    className?:string;
}

export interface CurrencyValue {
    rate:number;
    cc:string;
}