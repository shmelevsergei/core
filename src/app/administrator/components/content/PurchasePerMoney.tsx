'use client'
import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
import { useAdministratorState } from '@/app/administrator/store/administrator.context'
import { formattedNumber } from '@/lib/formulas/formatNumber'

const PurchasePerMoney = () => {
    const { state } = useAdministratorState()

    const [percent, setPercent] = useState(0)
    const [totalMoney, setTotalMoney] = useState(0)

    useEffect(() => {
        if (
            state.allPurchaseStoNotNull > 0 &&
            state.prevAllPurchaseStoNotNull > 0
        ) {
            const perMoney = state.allMoney / state.allPurchaseStoNotNull
            const prevPerMoney =
                state.prevAllMoney / state.prevAllPurchaseStoNotNull
            setPercent(((perMoney - prevPerMoney) / prevPerMoney) * 100)
            setTotalMoney(Math.round(perMoney))
        }
    }, [
        state.allMoney,
        state.prevAllMoney,
        state.allPurchaseStoNotNull,
        state.prevAllPurchaseStoNotNull,
    ])

    return (
        <UiCard
            text={'Средняя закупка на 1 СТО, руб. (динамика)'}
            count={formattedNumber(totalMoney)}
            percent={percent}
        />
    )
}

export default PurchasePerMoney
