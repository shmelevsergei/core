import React from 'react'
import OfferHasNotSing from '@/app/administrator/components/info/OfferHasNotSing'
import NotByFromDistributor from './NotByFromDistributor'

const Info = () => {
    return (
        <div className={'grid grid-cols-2 gap-3 px-3'}>
            <OfferHasNotSing />
            <NotByFromDistributor />
        </div>
    )
}

export default Info
