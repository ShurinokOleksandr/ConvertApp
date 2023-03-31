import React from 'react';
import {SharedProps} from "src/shared";

interface ButtonProps extends SharedProps{
    onClick?: () => void
}
export const Button = ({children,className,onClick}:ButtonProps) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

