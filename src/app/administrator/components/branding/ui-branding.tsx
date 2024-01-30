import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {cn} from "@/lib/utils";

const UiBranding = () => {
    return (
        <Card className={cn('w-full h-full py-3 px-3 shadow-md')}>
            <CardHeader className={cn('p-0 uppercase font-semibold')}>Брендировано</CardHeader>
            <CardContent className={cn('p-0')}>
                <p className={'mt-8 flex gap-4'}>
                    <span className={'w-[180px] block'}>Брендировано </span><span
                    className={'font-semibold'}>741 (17%)</span>
                </p>
                <div className={'mt-8'}>
                    <p className={'text-sm flex gap-4'}><span className={'w-[180px] block'}>Частично брендировано</span>
                        <span className={'font-semibold'}>82 (4,8%)</span></p>
                    <p className={'text-sm flex gap-4'}><span
                        className={'w-[180px] block italic text-right'}>короб</span> <span className={'font-semibold'}>69 (1,6%)</span>
                    </p>
                    <p className={'text-sm flex gap-4'}><span
                        className={'w-[180px] block italic text-right'}>плакат</span> <span className={'font-semibold'}>143 (3,2%)</span>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default UiBranding;