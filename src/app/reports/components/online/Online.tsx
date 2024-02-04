import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const Online = () => {
    return (
        <Card
            className={cn(
                ' font-semibold p-3 shadow-md flex flex-col text-center justify-center'
            )}
        >
            <CardHeader
                className={cn(
                    'p-0 uppercase font-semibold leading-[110%] text-xl'
                )}
            >
                НА САЙТЕ:
            </CardHeader>
            <CardContent className={cn('p-0 text-2xl')}>
                <p>256 (5,8%)</p>
            </CardContent>
        </Card>
    )
}

export default Online
