import React from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useAdministratorState } from '../../store/administrator.context'
import { formattedNumber } from '@/lib/formulas/formatNumber'

const Points = () => {
    const {
        state: { totalScores, pointsToAwarded },
    } = useAdministratorState()
    return (
        <Card
            className={cn(
                'p-3 flex flex-col gap-5 text-sm font-bold shadow-md'
            )}
        >
            <p>Баллов на остатке - {formattedNumber(totalScores)}</p>
            <p>Баллов к начислению - {formattedNumber(pointsToAwarded)}</p>
        </Card>
    )
}

export default Points
