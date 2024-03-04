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
import { fetchOborot } from '@/server/routs/webshop_db/fetchDataOborot'

const Page = () => {
    const { state, setState } = useAdministratorState()
    const fetchDataCalled = useRef(false)

    const fetchData = async () => {
        try {
            if (!fetchDataCalled.current) {
                fetchDataCalled.current = true
                const { allSto, newcomers, offerSigned, averageLifts } =
                    await fetchDataBase()

                const { allMoney, prevAllMoney } = await fetchOborot({
                    startDate: state.currentDate?.from,
                    endDate: state.currentDate?.to,
                })

                if (allSto && newcomers && offerSigned) {
                    setState((prevState) => ({
                        ...prevState,
                        allSto: allSto.length,
                        newcomers: newcomers.length,
                        offerSigned: offerSigned.length,
                        averageLifts,
                        allMoney,
                        prevAllMoney,
                    }))
                }
            }
        } catch (error) {
            console.error('Error fetching DataBase')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main>
            <div className={'flex flex-col gap-4'}>
                <InfoPanel />
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
                </div>
            </div>
        </main>
    )
}

export default Page
