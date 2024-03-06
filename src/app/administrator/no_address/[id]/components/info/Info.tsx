import React from 'react'
import {
    dataInfo,
    DataInfo,
} from '@/app/administrator/no_address/[id]/components/info/dataInfo'

const Info = ({ id }: { id: string }) => {
    const data: DataInfo = dataInfo
    return (
        <div className={'flex gap-24 text-xl'}>
            <div>
                <h2 className={' font-extrabold '}>{data.name}</h2>
                <p className={'mt-2 font-medium'}>{id}</p>
            </div>
            <div className={'flex gap-8'}>
                <div>
                    <p className={' font-extrabold'}>Адрес СТО</p>
                    <p>{data.city} </p>
                </div>
                <div>
                    <address className={'not-italic'}>{data.address}</address>
                </div>
            </div>
        </div>
    )
}

export default Info
