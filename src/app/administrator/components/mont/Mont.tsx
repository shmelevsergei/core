'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useAdministratorState } from '@/app/administrator/store/administrator.context'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'

const Mont = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const { state, setState } = useAdministratorState()

    const clickHandler = () => {
        setState((prevState) => {
            return {
                ...prevState,
                updateContentInfo: true,
            }
        })
        setIsButtonDisabled(true)
    }
    useEffect(() => {
        if (!state.updateContentInfo) {
            setIsButtonDisabled(false)
        }
    }, [state.updateContentInfo])

    return (
        <div className="ml-auto flex items-center gap-1">
            <SelectMonth />
            <SelectYear />
            <Button
                className={''}
                onClick={() => clickHandler()}
                disabled={isButtonDisabled}
            >
                Выбрать период
            </Button>
        </div>
    )
}
export default Mont
