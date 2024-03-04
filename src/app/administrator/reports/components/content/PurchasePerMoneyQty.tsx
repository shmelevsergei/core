'use client'
import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
// import { oborotRemzonaQty } from '@/server/routs/webshop_db/fetchAnketaOborot'
import { useAdministratorState } from '../../store/administrator.context'
import { formattedNumber } from '@/lib/formulas/formatNumber'

const PurchasePerMoneyQty = () => {
    const { state, setState } = useAdministratorState()
    const [perMoneyQty, setPerMoneyQty] = useState(0)
    const [prevPerMoneyQty, setPrevPerMoneyQty] = useState(0)
    const [percent, setPercent] = useState(0)
    const [totalMoneyQty, setTotalMoneyQty] = useState(0)

    const startDate = state?.currentDate?.from
    const endDate = state?.currentDate?.to

    // useEffect(() => {
    //     if (state.updateContentInfo) {
    //         const fetchPurchase = async () => {
    //             const result = await oborotRemzonaQty({
    //                 startDate,
    //                 endDate,
    //             })
    //             if (!result) return
    //             setState((prevState) => ({
    //                 ...prevState,
    //                 remzonaQty: result,
    //             }))

    //             setPerMoneyQty(result)
    //         }

    //         const fetchPrevPurchase = async () => {
    //             if (startDate && endDate) {
    //                 const startDateCopy = new Date(startDate)
    //                 const endDateCopy = new Date(endDate)

    //                 startDateCopy.setMonth(startDateCopy.getMonth() - 1)
    //                 endDateCopy.setMonth(endDateCopy.getMonth() - 1)

    //                 const result = await oborotRemzonaQty({
    //                     startDate: startDateCopy,
    //                     endDate: endDateCopy,
    //                 })
    //                 if (!result) return
    //                 setState((prevState) => ({
    //                     ...prevState,
    //                     prevRemzonaQty: result,
    //                 }))

    //                 setPrevPerMoneyQty(result)
    //             } else {
    //                 console.error('startDate and endDate must be defined')
    //             }
    //         }
    //         // fetchPrevPurchase()
    //         // fetchPurchase()
    //     }
    // }, [state.updateContentInfo])

    // useEffect(() => {
    //     if (perMoneyQty && prevPerMoneyQty) {
    //         setPercent(
    //             ((perMoneyQty - prevPerMoneyQty) / prevPerMoneyQty) * 100
    //         )
    //         setTotalMoneyQty(Math.round(state?.oborot / perMoneyQty))
    //     }
    // }, [perMoneyQty, prevPerMoneyQty])
    return (
        <UiCard
            text={'Средняя закупка на 1 подъемник, руб. (динамика)'}
            count={formattedNumber(totalMoneyQty)}
            percent={percent}
        />
    )
}

export default PurchasePerMoneyQty
