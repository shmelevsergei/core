'use client'
import Divider from '@/components/ui/divider'
import { cn } from '@/lib/utils'
import InfoPanel from './components/infoPanel/InfoPanel'
import Content from './components/content/Content'
import Info from './components/info/Info'
import Branding from './components/branding/Branding'
import Competition from './components/competition/Competition'
import Points from './components/points/Points'
import Online from './components/online/Online'
import { useAdministratorState } from './store/administrator.context'
import { useEffect, useRef } from 'react'
import { fetchDataBase } from '@/server/routs/webshop_db/fetchDataBase'
import { fetchDataOborot } from '@/server/routs/webshop_db/fetchDataOborot'
import { fetchDataBranding } from '@/server/routs/webshop_db/fetchDataBranding'
import { fetchDataSorevnovanie } from '@/server/routs/webshop_db/fetchDataSorevnovanie'
import { fetchDataScores } from '@/server/routs/webshop_db/fetchDataScores'
import SalesDistributers from './components/salesDistributers/SalesDistributers'

const Page = () => {
    const { state, setState } = useAdministratorState()
    const fetchDataCalled = useRef(false)

    const fetchData = async () => {
        try {
            if (!fetchDataCalled.current) {
                fetchDataCalled.current = true
                const { allSto, newcomers, offerSigned, averageLifts } =
                    await fetchDataBase()

                const {
                    allBranded,
                    boxBranded,
                    partialBranded,
                    posterBranded,
                } = await fetchDataBranding()

                const { totalParticipants, masterConsultant, supervisor } =
                    await fetchDataSorevnovanie()

                const { totalScores } = await fetchDataScores()

                const {
                    allMoney,
                    prevAllMoney,
                    allPurchaseStoNotNull,
                    prevAllPurchaseStoNotNull,
                    purchaseStoCount,
                    prevPurchaseStoCount,
                    allRemzonaQty,
                    prevAllRemzonaQty,
                    pointsToAwarded,
                } = await fetchDataOborot({
                    startDate: state.currentDate?.from,
                    endDate: state.currentDate?.to,
                })

                if (allSto && newcomers && offerSigned) {
                    setState((prevState) => ({
                        ...prevState,
                        allSto: allSto.length,
                        newcomers: newcomers.length,
                        offerSigned: offerSigned.length,
                        allPurchaseStoNotNull: allPurchaseStoNotNull.length,
                        prevAllPurchaseStoNotNull:
                            prevAllPurchaseStoNotNull.length,
                        averageLifts,
                        allMoney,
                        prevAllMoney,
                        purchaseStoCount,
                        prevPurchaseStoCount,
                        allRemzonaQty,
                        prevAllRemzonaQty,
                        branding: {
                            ...prevState.branding,
                            allBranded: allBranded,
                            boxBranded: boxBranded,
                            partialBranded: partialBranded,
                            posterBranded: posterBranded,
                        },
                        competitions: {
                            ...prevState.competitions,
                            totalParticipants: totalParticipants,
                            supervisor: supervisor,
                            masterConsultant: masterConsultant,
                        },
                        totalScores,
                        pointsToAwarded,
                    }))
                }
            }
            fetchDataCalled.current = false
        } catch (error) {
            console.error('Error fetching DataBase')
        }
    }

    useEffect(() => {
        fetchData().then(() =>
            setState((prevState) => ({
                ...prevState,
                updateContentInfo: false,
            }))
        )
    }, [state.updateContentInfo])

    return (
        <main>
            <div className={'h-full'}>
                <InfoPanel />

                <div className="pt-5 flex flex-col gap-5 overflow-auto h-[500px]">
                    <Content />
                    <Info />
                    <div className={'px-3'}>
                        <div className={'grid grid-cols-3 gap-3'}>
                            <Branding />
                            <Competition />
                            <div className={'grid grid-rows-2 gap-3'}>
                                <Points />
                                <Online />
                            </div>
                        </div>
                        <Divider className={cn('my-5')} />
                        <SalesDistributers />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page
