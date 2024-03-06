'use client'
import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
import { useAdministratorState } from '@/app/administrator/store/administrator.context'
import { formattedNumber } from '@/lib/formulas/formatNumber'

const PurchasePerCountQty = () => {
    const { state } = useAdministratorState()
    const [perCountQty, setPerCountQty] = useState(0)
    const [prevPerCountQty, setPrevPerCountQty] = useState(0)
    const [percent, setPercent] = useState(0)
    const [totalCountQty, setTotalCountQty] = useState(0)

    useEffect(() => {
        setPerCountQty(state.purchaseStoCount / state.allRemzonaQty)
        setPrevPerCountQty(state.prevPurchaseStoCount / state.prevAllRemzonaQty)
    }, [
        state.purchaseStoCount,
        state.prevPurchaseStoCount,
        state.allRemzonaQty,
        state.prevAllRemzonaQty,
    ])

    useEffect(() => {
        if (prevPerCountQty && perCountQty) {
            setPercent(
                ((perCountQty - prevPerCountQty) / prevPerCountQty) * 100
            )
            setTotalCountQty(Math.round(perCountQty))
        }
    }, [prevPerCountQty, perCountQty])

    return (
        <UiCard
            text={'Средняя закупка на 1 подъемник, шт. (динамика)'}
            count={formattedNumber(totalCountQty)}
            percent={percent}
        />
    )
}

export default PurchasePerCountQty
