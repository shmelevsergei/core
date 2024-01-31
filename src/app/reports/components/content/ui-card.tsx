
import React from 'react';
import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card";
import {cn} from "@/lib/utils";

const UiCard = ({text, count, percent}: {text: string, count: number | string, percent: number}) => {

    const isPercentNaN = isNaN(percent);
    const percentValue = isPercentNaN ? 0 : percent;

    return (

        <Card className={cn('flex items-center gap-5 w-full h-full py-3 px-3 shadow-md')}>
            <CardHeader className={cn('max-w-[120px] p-0')}>
                <CardDescription >{text}</CardDescription>
            </CardHeader>
            <CardContent className={cn('p-0 ')}>
                <p className={'font-semibold text-2xl'}>{count}</p>
                <p className={`${percentValue < 0 ? 'text-[#f00]' : ''}`}>{
                    percentValue < 0 ? `(${percentValue.toFixed(2)}%)` : `(+${percentValue.toFixed(2)}%)`
                }</p>
            </CardContent>
        </Card>

    );
};


export default UiCard;