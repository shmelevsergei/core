'use client'
import React, { useEffect } from 'react'
import { IUserData } from '../page'
import { useDistributorState } from './store/distributor.context'

const DistributorPage = () => {
    const { state, setState } = useDistributorState()
    useEffect(() => {
        const localData = localStorage.getItem('login')

        if (!localData) return
        const userName: IUserData = JSON.parse(localData)

        setState((prevState) => ({
            ...prevState,
            distributorId: userName.user,
        }))
    }, [])

    return <div>Distributor</div>
}

export default DistributorPage
