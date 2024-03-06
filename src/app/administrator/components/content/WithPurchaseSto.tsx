'use client'

import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
import { useAdministratorState } from '../../store/administrator.context'
import { formattedNumber } from '@/lib/formulas/formatNumber'

const WithPurchaseSto = () => {
    const [percent, setPercent] = useState(0)
    const { state } = useAdministratorState()

    useEffect(() => {
        if (
            state.allPurchaseStoNotNull > 0 &&
            state.prevAllPurchaseStoNotNull > 0
        ) {
            setPercent(
                ((state.allPurchaseStoNotNull -
                    state.prevAllPurchaseStoNotNull) /
                    state.prevAllPurchaseStoNotNull) *
                    100
            )
        }
    }, [state.prevAllPurchaseStoNotNull, state.allPurchaseStoNotNull])

    return (
        <UiCard
            text={'Кол-во СТО с закупкой'}
            count={formattedNumber(state.allPurchaseStoNotNull)}
            percent={percent}
        />
    )
}

export default WithPurchaseSto
