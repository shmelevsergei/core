'use client'
import Brands from '@/app/administrator/components/infoPanel/Brands'
import Mont from '@/app/administrator/components/mont/Mont'
import { useState } from 'react'
import { useAdministratorState } from '@/app/administrator/store/administrator.context'
import AllBrands from '@/app/administrator/components/infoPanel/AllBrands'
import { Skeleton } from '@/components/ui/skeleton'

const InfoPanel = () => {
    const [isLoading, setIsLoading] = useState(true)

    const {
        state: { allSto, offerSigned, newcomers, averageLifts },
        setState,
    } = useAdministratorState()

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
                </div>
            ) : (
                <AllBrands
                    allSto={allSto}
                    newcomers={newcomers}
                    offerSigned={offerSigned}
                    averageLifts={averageLifts}
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
