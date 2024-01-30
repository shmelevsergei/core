import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {cn} from "@/lib/utils";

const UiCompetition = () => {
    return (
        <Card className={cn('w-full h-full py-3 px-3 shadow-md')}>
            <CardHeader className={cn('p-0 uppercase font-semibold leading-[110%]')}>УЧАСТИЕ В ЕЖЕМЕСЯЧНОМ СОРЕВНОВАНИЕ</CardHeader>
            <CardContent className={cn('p-0')}>
                <div className={'text-[#FFFDFD] flex flex-col gap-2.5 mt-3'}>
                    <Card className={cn('h-10 w-full bg-[#6F78A9] flex justify-between items-center pr-7 pl-3 border-none text-white')}>
                        <span className={'text-[15px]'}>СТО</span> <span className={'text-2xl'}>250 (6%)</span>
                    </Card>
                    <Card className={cn('h-10 w-full bg-[#8FBA84] flex justify-between items-center pr-7 pl-3 border-none text-white')}>
                        <span className={'text-[15px]'}>РУКОВОДИТЕЛЬ</span> <span className={'text-2xl'}>1</span>
                    </Card>
                    <Card className={cn('h-10 w-full bg-[#FE6E43] flex justify-between items-center pr-7 pl-3 border-none text-white')}>
                        <span className={'text-[15px]'}>МАСТЕР-КОНСУЛЬТАНТ</span> <span className={'text-2xl'}>0</span>
                    </Card>
                </div>
            </CardContent>
        </Card>
    );
};

export default UiCompetition;