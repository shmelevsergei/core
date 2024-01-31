import {Card, CardContent, CardDescription, CardHeader} from '@/components/ui/card';
import React from 'react';
import {cn} from "@/lib/utils";
import Link from "next/link";

interface IUiCardProps {
    text: string;
    count: number | string;
    percent: number;
    link: string;
}

const UiCard = ({text, count, percent, link}:IUiCardProps) => {
    return (
        <Card className={cn('flex items-center gap-10 w-full h-full py-3 px-3 bg-red-100 shadow-md border-none')}>
            <CardHeader className={cn('max-w-[250px] p-0')}>
                <CardDescription className={cn('text-base text-black font-medium')}>{text}</CardDescription>
            </CardHeader>
            <CardContent className={cn('p-0 flex flex-col')}>
                <div>
                    <p className={'shrink-0 font-semibold '}>{count} ({
                        !isNaN(percent)? percent : '0'
                    }%)</p>
                </div>
                <Link href={link}>(перейти к списку)</Link>
            </CardContent>
        </Card>
    );
};

export default UiCard;