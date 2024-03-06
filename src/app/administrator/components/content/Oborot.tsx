'use client'
import React, { useEffect, useState } from 'react'
import { formattedNumber } from '@/lib/formulas/formatNumber'
import { useAdministratorState } from '@/app/administrator/store/administrator.context'
import UiCard from './ui-card'

const Oborot = () => {
    const { state } = useAdministratorState()
    const [oborot, setOborot] = useState(0)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        setOborot(state.allMoney)
    }, [state.allMoney])

    useEffect(() => {
        if (state.prevAllMoney && state.allMoney) {
            setPercent(
                ((state.allMoney - state.prevAllMoney) / state.prevAllMoney) *
                    100
            )
        }
    }, [state.prevAllMoney, state.allMoney])

    return (
        <UiCard
            text={'Всего, руб. (динамика)'}
            count={formattedNumber(Math.round(oborot))}
            percent={percent}
        />
    )
}

export default Oborot
