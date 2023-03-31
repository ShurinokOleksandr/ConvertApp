import React from 'react';
import {SharedProps} from "../../api";

const Paragraph = ({className,children}:SharedProps) => {
    return (
        <p className={className}>
            {children}
        </p>
    );
};

export default Paragraph;