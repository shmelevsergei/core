import React from 'react'
import DistributorCard from './DistributorCard'
import rossko from '/public/rossko.png'
import autoEuro from '/public/auto_euro.png'
import autoRus from '/public/auto_rus.png'
import arkona from '/public/arkona.png'

const distributorData = [
    {
        name: 'РОССКО',
        image: rossko,
    },
    {
        name: 'AВТО-ЕВРО',
        image: autoEuro,
    },
    {
        name: 'AВТО-РУСЬ',
        image: autoRus,
    },
    {
        name: 'АРКОНА',
        image: arkona,
    },
]

const SalesDistributers = () => {
    return (
        <div>
            <h2 className="text-center text-[#020944] font-bold text-xl">
                ПРОДАЖИ по дистрибьюторам
            </h2>
            <div className="grid gap-4 grid-cols-4 mt-5">
                {distributorData.map((item, idx) => (
                    <DistributorCard
                        key={idx}
                        allMoney={0}
                        prevAllMoney={0}
                        allSto={0}
                        image={item.image}
                        name={item.name}
                        newsSto={0}
                        status={false}
                    />
                ))}
            </div>
        </div>
    )
}

export default SalesDistributers
