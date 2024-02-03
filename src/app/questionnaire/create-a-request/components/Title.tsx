import React from 'react';
import {cn} from "@/lib/utils";


const Title = ({text, className, span}:{text:string, className?: string, span?:string}) => {
    return (
        <h1 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0', className)}>{span}{text}</h1>
    );
};

export default Title;