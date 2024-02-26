'use client'

import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
import { useAdministratorState } from '@/app/administrator/reports/store/administrator.context'

const NotByFromDistributor = () => {
    const [count, setCount] = useState(0)
    const [percent, setPercent] = useState('')
    const { state } = useAdministratorState()

    useEffect(() => {
        setCount(state.totalSto - state.purchaseSto)
        setPercent(
            (100 - (state.purchaseSto / state.totalSto) * 100).toFixed(1)
        )
    }, [state.totalSto, state.purchaseSto])

    return (
        <UiCard
            text={'Не закупают ни у одного дистрибьютора'}
            count={count}
            link={''}
            percent={+percent}
        />
    )
}

export default NotByFromDistributor
