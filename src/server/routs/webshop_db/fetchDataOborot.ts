import { IAnketaOborotRepository } from '@/repository/anketaOborot.repository'
import { cache } from 'react'

const fetchAnketaOborot = cache(
    async ({
        startDate,
        endDate,
    }: {
        startDate: Date | undefined
        endDate: Date | undefined
    }) => {
        if (startDate && endDate) {
            const formattedStartDate = encodeURIComponent(
                startDate.toISOString()
            )
            const formattedEndDate = encodeURIComponent(endDate.toISOString())

            const url = `/api/administrator/anketa_oborot?startDate=${formattedStartDate}&endDate=${formattedEndDate}`

            try {
                const response = await fetch(url)
                if (response.ok) {
                    return await response.json()
                } else {
                    console.error(
                        `Error: ${response.status} - ${response.statusText}`
                    )
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        } else {
            console.error('startDate and endDate must be defined')
        }
    }
)

export const fetchDataOborot = async ({
    startDate,
    endDate,
}: {
    startDate: Date | undefined
    endDate: Date | undefined
}) => {
    try {
        if (startDate && endDate) {
            const copyStartDate = new Date(startDate)
            copyStartDate.setMonth(startDate.getMonth() - 1)
            const copyEndDate = new Date(endDate)
            copyEndDate.setMonth(endDate.getMonth() - 1)
            const responseCurrentData = await fetchAnketaOborot({
                startDate,
                endDate,
            })
            const responsePrevData = await fetchAnketaOborot({
                startDate: copyStartDate,
                endDate: copyEndDate,
            })

            const currentData: IAnketaOborotRepository[] =
                await JSON.parse(responseCurrentData)
            const prevData: IAnketaOborotRepository[] =
                await JSON.parse(responsePrevData)

            const allMoneyData: number = currentData.reduce(
                (acc, item) => acc + item.ABO_OBOROT_ALL,
                0
            )
            const prevAllMoneyData: number = prevData.reduce(
                (acc, item) => acc + item.ABO_OBOROT_ALL,
                0
            )

            const allPurchaseStoNotNullData = currentData.filter(
                (item) => item.ABO_OBOROT_ALL > 0
            )
            const prevAllPurchaseStoNotNullData = prevData.filter(
                (item) => item.ABO_OBOROT_ALL > 0
            )

            const purchaseStoCountData = allPurchaseStoNotNullData.reduce(
                (acc, item) =>
                    acc +
                    item.ABO_COUNT_AE +
                    item.ABO_COUNT_ARKONA +
                    item.ABO_COUNT_AUTORUS +
                    item.ABO_COUNT_ROSSKO,
                0
            )
            const prevPurchaseStoCountData =
                prevAllPurchaseStoNotNullData.reduce(
                    (acc, item) =>
                        acc +
                        item.ABO_COUNT_AE +
                        item.ABO_COUNT_ARKONA +
                        item.ABO_COUNT_AUTORUS +
                        item.ABO_COUNT_ROSSKO,
                    0
                )

            const allRemzonaQtyData = allPurchaseStoNotNullData.reduce(
                (acc, item) => acc + item.ABO_ABA_REMZONA_QTY,
                0
            )
            const prevAllRemzonaQtyData = prevAllPurchaseStoNotNullData.reduce(
                (acc, item) => acc + item.ABO_ABA_REMZONA_QTY,
                0
            )

            const pointsToAwarded = currentData.reduce(
                (acc, item) => acc + item.ABO_SCORES_MONTH_PLAN,
                0
            )

            const data = {
                allMoney: allMoneyData,
                prevAllMoney: prevAllMoneyData,
                allPurchaseStoNotNull: allPurchaseStoNotNullData,
                prevAllPurchaseStoNotNull: prevAllPurchaseStoNotNullData,
                purchaseStoCount: purchaseStoCountData,
                prevPurchaseStoCount: prevPurchaseStoCountData,
                allRemzonaQty: allRemzonaQtyData,
                prevAllRemzonaQty: prevAllRemzonaQtyData,
                pointsToAwarded,
            }

            return data
        } else {
            console.log('not normal Date')
            throw new Error('Invalid date range')
        }
    } catch (error) {
        console.error('return Fetch oborot Error', error)
        throw error
    }
}
