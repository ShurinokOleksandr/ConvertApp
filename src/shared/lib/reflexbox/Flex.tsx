import React from 'react';
import {SharedProps} from "src/shared";

export const Flex = ({className,children}:SharedProps) => {
    return (
        <div className={`flex ` + className}>
            {children}
        </div>
    );
};

