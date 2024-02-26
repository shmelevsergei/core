import React from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const Points = () => {
    return (
        <Card
            className={cn(
                'p-3 flex flex-col gap-5 text-sm font-bold shadow-md'
            )}
        >
            <p>Баллов на остатке - 27 695 725</p>
            <p>Баллов к начислению - 27 695 725</p>
        </Card>
    )
}

export default Points
