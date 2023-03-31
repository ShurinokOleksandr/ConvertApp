import React from 'react';
import {SharedProps} from "src/shared";


export const Heading = ({children,className}:SharedProps) => {
    return (
        <h1 className={className}>
            {children}
        </h1>
    );
};

