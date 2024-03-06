'use client'

import React, { useEffect } from 'react'
import { useAdministratorState } from '@/app/administrator/store/administrator.context'
import UiCard from '@/app/administrator/components/info/ui-card'

const OfferHasNotSing = () => {
    const [count, setCount] = React.useState(0)
    const [percent, setPercent] = React.useState('')
    const { state } = useAdministratorState()

    useEffect(() => {
        setCount(state.allSto - state.offerSigned)
        setPercent((100 - (state.offerSigned / state.allSto) * 100).toFixed(1))
    }, [state.allSto, state.offerSigned])

    return (
        <UiCard
            text={'Не подписали договор оферты'}
            count={count}
            percent={+percent}
            link={''}
        />
    )
}

export default OfferHasNotSing
