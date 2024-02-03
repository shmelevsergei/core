import React from 'react';

import {formattedNumber} from "@/lib/formulas/formatNumber";

interface IAllBrandsProps {
    allBrands: number
    newsBrands: number
    dogovorTrue: number
    avarageOfLifts: number
}

const AllBrands = ({allBrands, newsBrands, dogovorTrue, avarageOfLifts}:IAllBrandsProps) => {

    return (
        <div className={'text-[#020944] text-xl flex flex-col gap-3'}>
            <p className={' font-extrabold'}>ВСЕГО СТО - {formattedNumber(allBrands)} (новички - {formattedNumber(newsBrands)})</p>
            <p className={'font-medium'}>
                Оферта подписана
                - {formattedNumber(dogovorTrue)} ({((dogovorTrue / allBrands) * 100).toFixed(1)}%) </p>
            <p className={'font-medium'}>Среднее кол-во подъемников - {
               (avarageOfLifts).toFixed(2)
            }</p>
        </div>

    )
};

export default AllBrands;