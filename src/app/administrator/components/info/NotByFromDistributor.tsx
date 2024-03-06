'use client'

import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
import { useAdministratorState } from '@/app/administrator/store/administrator.context'

const NotByFromDistributor = () => {
    const [count, setCount] = useState(0)
    const [percent, setPercent] = useState('')
    const { state } = useAdministratorState()

    useEffect(() => {
        setCount(state.allSto - state.allPurchaseStoNotNull)
        setPercent(
            (100 - (state.allPurchaseStoNotNull / state.allSto) * 100).toFixed(
                1
            )
        )
    }, [state.allSto, state.allPurchaseStoNotNull])

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
