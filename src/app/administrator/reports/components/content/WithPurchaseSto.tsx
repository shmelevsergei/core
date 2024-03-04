'use client'

import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
import { useAdministratorState } from '../../store/administrator.context'
import { formattedNumber } from '@/lib/formulas/formatNumber'

const WithPurchaseSto = () => {
    const [purchaseSto, setPurchaseSto] = useState(0)
    const [prevPurchaseSto, setPrevPurchaseSto] = useState(0)

    const [percent, setPercent] = useState(0)
    const { state, setState } = useAdministratorState()

    const startDate = state?.currentDate?.from
    const endDate = state?.currentDate?.to
    // useEffect(() => {
    //     if (state.updateContentInfo) {
    //         const fetchPurchase = async () => {
    //             const result = await purchaseStoMoney({ startDate, endDate })
    //             if (!result) return
    //             setState((prevState) => ({
    //                 ...prevState,
    //                 purchaseSto: result.length,
    //             }))
    //             setPurchaseSto(result.length)
    //         }

    //         const fetchPrevPurchase = async () => {
    //             if (startDate && endDate) {
    //                 const startDateCopy = new Date(
    //                     startDate.setMonth(startDate.getMonth() - 1)
    //                 )
    //                 const endDateCopy = new Date(
    //                     endDate.setMonth(startDate.getMonth() - 1)
    //                 )

    //                 const result = await purchaseStoMoney({
    //                     startDate: startDateCopy,
    //                     endDate: endDateCopy,
    //                 })
    //                 if (!result) return
    //                 setState((prevState) => ({
    //                     ...prevState,
    //                     prevPurchaseSto: result.length,
    //                 }))
    //                 setPrevPurchaseSto(result.length)
    //             } else {
    //                 console.error('startDate and endDate must be defined')
    //             }
    //         }
    //         // fetchPrevPurchase()
    //         // fetchPurchase()
    //     }
    // }, [state.updateContentInfo])

    useEffect(() => {
        if (prevPurchaseSto && purchaseSto) {
            setPercent(
                ((purchaseSto - prevPurchaseSto) / prevPurchaseSto) * 100
            )
        }
    }, [prevPurchaseSto, purchaseSto])

    return (
        <UiCard
            text={'Кол-во СТО с закупкой'}
            count={formattedNumber(purchaseSto)}
            percent={percent}
        />
    )
}

export default WithPurchaseSto
