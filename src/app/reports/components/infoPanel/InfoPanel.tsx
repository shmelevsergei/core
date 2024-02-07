'use client'
import Brands from '@/app/reports/components/infoPanel/Brands'
import Mont from '@/app/reports/components/mont/Mont'
import { useEffect, useState } from 'react'
import {
    fetchAnketaBase,
    fetchAnketaBaseNews,
} from '@/server/routs/webshop_db/fetchAnketaBase'
import { fetchAnketaDogovor } from '@/server/routs/webshop_db/fetchAnketaDogovor'
import { useAdministratorState } from '@/app/reports/store/administrator.context'
import AllBrands from '@/app/reports/components/infoPanel/AllBrands'
import { Skeleton } from '@/components/ui/skeleton'

const InfoPanel = () => {
    const [isLoading, setIsLoading] = useState(false)

    const {
        state: { totalSto, dogovorTrue, newsBrands, avarageOfLifts },
        setState,
    } = useAdministratorState()

    useEffect(() => {
        const data = async () => {
            const allBrands = await fetchAnketaBase()
            const newsBrands = await fetchAnketaBaseNews()
            const dogovorTrue = await fetchAnketaDogovor()

            return {
                allBrands,
                newsBrands,
                dogovorTrue,
            }
        }

        data().then(({ allBrands, dogovorTrue, newsBrands }) => {
            if (allBrands && dogovorTrue && newsBrands) {
                const avarageOfLifts =
                    allBrands?.reduce((acc, item) => {
                        return acc + item?.ABA_REMZONA_QTY
                    }, 0) / allBrands?.length

                setState((prevState) => ({
                    ...prevState,
                    totalSto: allBrands?.length || 0,
                    dogovorTrue: dogovorTrue?.length || 0,
                    newsBrands: newsBrands?.length || 0,
                    avarageOfLifts: avarageOfLifts || 0,
                }))
            }

            setIsLoading(true)
        })
    }, [])

    return (
        <div
            className={
                'flex justify-between bg-[#FEFFFE] shadow-base mt-3 py-2 px-3 min-h-32'
            }
        >
            {!isLoading ? (
                <div className={'flex flex-col gap-5'}>
                    <Skeleton className={'h-6 w-[350px]'} />
                    <Skeleton className={'h-6 w-[350px]'} />
                    <Skeleton className={'h-6 w-[365px]'} />
                </div> // <div className={'flex justify-center'}>Loading...</div>
            ) : (
                <AllBrands
                    allBrands={totalSto}
                    newsBrands={newsBrands}
                    dogovorTrue={dogovorTrue}
                    avarageOfLifts={avarageOfLifts}
                />
            )}

            <div className={'flex flex-col justify-between'}>
                <Brands />
                <Mont />
            </div>
        </div>
    )
}

export default InfoPanel
