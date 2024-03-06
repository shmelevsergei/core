import React from 'react'

import { formattedNumber } from '@/lib/formulas/formatNumber'

interface IAllBrandsProps {
    allSto: number
    newcomers: number
    offerSigned: number
    averageLifts: number
}

const AllBrands = ({
    allSto,
    newcomers,
    offerSigned,
    averageLifts,
}: IAllBrandsProps) => {
    return (
        <div className={'text-[#020944] text-xl flex flex-col gap-3'}>
            <p className={' font-extrabold'}>
                ВСЕГО СТО - {formattedNumber(allSto)} (новички -{' '}
                {formattedNumber(newcomers)})
            </p>
            <p className={'font-medium'}>
                Оферта подписана - {formattedNumber(offerSigned)} (
                {allSto !== 0 ? ((offerSigned / allSto) * 100).toFixed(1) : 0}%){' '}
            </p>
            <p className={'font-medium'}>
                Среднее кол-во подъемников - {averageLifts.toFixed(2)}
            </p>
        </div>
    )
}

export default AllBrands
