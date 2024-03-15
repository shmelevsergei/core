import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const DistributorCard = ({
    name,
    image,
    allSto,
    newsSto,
    allMoney,
    prevAllMoney,
    status = false,
}) => {
    return (
        <Card className={cn('py-3 px-3 shadow-md')}>
            <CardHeader
                className={cn('p-0 flex flex-row items-center justify-between')}
            >
                <div
                    className={`w-8 h-8 rounded ${status ? 'bg-green-500' : 'bg-red-500'}`}
                ></div>
                <div className="max-w-[150px] ">
                    <Image src={image} alt={name} />
                </div>
            </CardHeader>
            <CardContent className={cn('p-0 mt-5 ')}>
                <div className="flex justify-between">
                    <p>СТО/новички</p>
                    <p>
                        {allSto} / {newsSto}
                    </p>
                </div>
                <div className="flex justify-between mt-5">
                    <p>Всего, руб. </p>
                    <p>{allMoney}</p>
                </div>
                <div className="flex justify-between">
                    <p>(динамика)</p>

                    <p>
                        ({((allMoney - prevAllMoney) / allMoney) * 100 || 0}%)
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

export default DistributorCard
