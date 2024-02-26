'use client'

import React, { useEffect, useState } from 'react'
import UiCard from './ui-card'
import { useAdministratorState } from '../../store/administrator.context'
import { fetchAnketaOborotPurchaseStoMoney } from '@/server/routs/webshop_db/fetchAnketaOborot'
import { IAnketaBaseRepository } from '@/repository/anketaBase.repository'
import { formattedNumber } from '@/lib/formulas/formatNumber'

const WithPurchaseSto = () => {
    const [purchaseSto, setPurchaseSto] = useState<IAnketaBaseRepository[]>([])
    const [prevPurchaseSto, setPrevPurchaseSto] = useState<
        IAnketaBaseRepository[]
    >([])

    const [percent, setPercent] = useState(0)
    const { state, setState } = useAdministratorState()

    const startDate = state?.currentDate?.from
    const endDate = state?.currentDate?.to
    useEffect(() => {
        if (state.updateContentInfo) {
            const fetchPurchase = async () => {
                const result = await fetchAnketaOborotPurchaseStoMoney({
                    startDate,
                    endDate,
                })

                const data = await JSON.parse(result)

                setState((prevState) => ({
                    ...prevState,
                    purchaseSto: data.length,
                }))
                setPurchaseSto(data)
            }

            const fetchPrevPurchase = async () => {
                if (startDate && endDate) {
                    const startDateCopy = new Date(startDate)
                    const endDateCopy = new Date(endDate)

                    startDateCopy.setMonth(startDateCopy.getMonth() - 1)
                    endDateCopy.setMonth(endDateCopy.getMonth() - 1)

                    const result = await fetchAnketaOborotPurchaseStoMoney({
                        startDate: startDateCopy,
                        endDate: endDateCopy,
                    })
                    const data = await JSON.parse(result)

                    setState((prevState) => ({
                        ...prevState,
                        prevPurchaseSto: data.length,
                    }))
                    setPrevPurchaseSto(data)
                } else {
                    console.error('startDate and endDate must be defined')
                }
            }
            fetchPrevPurchase()
            fetchPurchase()
        }
    }, [state.updateContentInfo])

    useEffect(() => {
        if (prevPurchaseSto && purchaseSto) {
            setPercent(
                ((purchaseSto.length - prevPurchaseSto.length) /
                    prevPurchaseSto.length) *
                    100
            )
        }
    }, [prevPurchaseSto, purchaseSto])

    return (
        <UiCard
            text={'Кол-во СТО с закупкой'}
            count={formattedNumber(purchaseSto.length)}
            percent={percent}
        />
    )
}

export default WithPurchaseSto
