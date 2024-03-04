'use client'
import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
// import { oborotPurchaseStoCount } from '@/server/routs/webshop_db/fetchAnketaOborot'
import { useAdministratorState } from '../../store/administrator.context'

const PurchasePerCount = () => {
    const { state, setState } = useAdministratorState()
    const [perCount, setPerCount] = useState(0)
    const [prevPerCount, setPrevPerCount] = useState(0)
    const [percent, setPercent] = useState(0)
    const [totalCount, setTotalCount] = useState(0)

    const startDate = state?.currentDate?.from
    const endDate = state?.currentDate?.to

    // useEffect(() => {
    //     if (state.updateContentInfo) {
    //         const fetchPurchase = async () => {
    //             const result = await oborotPurchaseStoCount({
    //                 startDate,
    //                 endDate,
    //             })
    //             if (!result) return

    //             setState((prevState) => ({
    //                 ...prevState,
    //                 purchaseStoCount: result,
    //             }))
    //             setPerCount(result)
    //         }

    //         const fetchPrevPurchase = async () => {
    //             if (startDate && endDate) {
    //                 const startDateCopy = new Date(startDate)
    //                 const endDateCopy = new Date(endDate)

    //                 startDateCopy.setMonth(startDateCopy.getMonth() - 1)
    //                 endDateCopy.setMonth(endDateCopy.getMonth() - 1)

    //                 const result = await oborotPurchaseStoCount({
    //                     startDate: startDateCopy,
    //                     endDate: endDateCopy,
    //                 })

    //                 if (!result) return
    //                 setState((prevState) => ({
    //                     ...prevState,
    //                     prevPurchaseStoCount: result,
    //                 }))

    //                 setPrevPerCount(result)
    //             } else {
    //                 console.error('startDate and endDate must be defined')
    //             }
    //         }
    //         // fetchPrevPurchase()
    //         // fetchPurchase()
    //     }
    // }, [state.updateContentInfo])

    // useEffect(() => {
    //     if (prevPerCount && perCount) {
    //         setPercent(((perCount - prevPerCount) / prevPerCount) * 100)
    //         setTotalCount(Math.round(perCount / state.totalSto))
    //     }
    // }, [prevPerCount, perCount, state.totalSto])

    return (
        <UiCard
            text={'Средняя закупка на 1 СТО, шт. (динамика)'}
            count={totalCount}
            percent={percent}
        />
    )
}

export default PurchasePerCount
