'use client'
import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
import { useAdministratorState } from '../../store/administrator.context'
import { formattedNumber } from '@/lib/formulas/formatNumber'

const PurchasePerMoneyQty = () => {
    const { state } = useAdministratorState()
    const [percent, setPercent] = useState(0)
    const [totalMoneyQty, setTotalMoneyQty] = useState(0)

    useEffect(() => {
        if (state.allRemzonaQty > 0 && state.prevAllRemzonaQty > 0) {
            const perMoneyQty = state.allMoney / state.allRemzonaQty
            const prevPerMoneyQty = state.prevAllMoney / state.prevAllRemzonaQty

            setPercent(
                ((perMoneyQty - prevPerMoneyQty) / prevPerMoneyQty) * 100
            )

            setTotalMoneyQty(Math.round(perMoneyQty))
        }
    }, [
        state.allMoney,
        state.allRemzonaQty,
        state.prevAllMoney,
        state.prevAllRemzonaQty,
    ])
    return (
        <UiCard
            text={'Средняя закупка на 1 подъемник, руб. (динамика)'}
            count={formattedNumber(totalMoneyQty)}
            percent={percent}
        />
    )
}

export default PurchasePerMoneyQty
