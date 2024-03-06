'use client'
import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'

import { useAdministratorState } from '../../store/administrator.context'

const PurchasePerCount = () => {
    const { state } = useAdministratorState()

    const [percent, setPercent] = useState(0)
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        if (state.prevPurchaseStoCount > 0) {
            setPercent(
                ((state.purchaseStoCount - state.prevPurchaseStoCount) /
                    state.prevPurchaseStoCount) *
                    100
            )
            setTotalCount(
                Math.round(state.purchaseStoCount / state.allPurchaseStoNotNull)
            )
        }
    }, [
        state.prevPurchaseStoCount,
        state.purchaseStoCount,
        state.allPurchaseStoNotNull,
    ])

    return (
        <UiCard
            text={'Средняя закупка на 1 СТО, шт. (динамика)'}
            count={totalCount ? totalCount : 0}
            percent={percent}
        />
    )
}

export default PurchasePerCount
