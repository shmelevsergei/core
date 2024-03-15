import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { IBranding } from '@/types/administrator/branding'

const UiBranding = ({
    dataBranding,
}: {
    dataBranding: { branding: IBranding; allSto: number }
}) => {
    const { branding, allSto } = dataBranding
    const { allBranded, boxBranded, partialBranded, posterBranded } = branding

    return (
        <Card className={cn('w-full h-full py-3 px-3 shadow-md')}>
            <CardHeader className={cn('p-0 uppercase font-semibold')}>
                Брендировано
            </CardHeader>
            <CardContent className={cn('p-0')}>
                <p className={'mt-8 flex gap-4'}>
                    <span className={'w-[180px] block'}>Брендировано </span>
                    <span className={'font-semibold'}>
                        {allBranded} (
                        {Math.round((allBranded / allSto) * 100 || 0)}%)
                    </span>
                </p>
                <div className={'mt-8'}>
                    <p className={'text-sm flex gap-4'}>
                        <span className={'w-[180px] block'}>
                            Частично брендировано
                        </span>
                        <span className={'font-semibold'}>
                            {partialBranded} (
                            {Math.round(
                                (partialBranded / allBranded) * 100 || 0
                            )}
                            %)
                        </span>
                    </p>
                    <p className={'text-sm flex gap-4'}>
                        <span className={'w-[180px] block italic text-right'}>
                            короб
                        </span>{' '}
                        <span className={'font-semibold'}>
                            {boxBranded} (
                            {Math.round((boxBranded / allBranded) * 100 || 0)}
                            %)
                        </span>
                    </p>
                    <p className={'text-sm flex gap-4'}>
                        <span className={'w-[180px] block italic text-right'}>
                            плакат
                        </span>{' '}
                        <span className={'font-semibold'}>
                            {posterBranded} (
                            {Math.round(
                                (posterBranded / allBranded) * 100 || 0
                            )}
                            %)
                        </span>
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

export default UiBranding
