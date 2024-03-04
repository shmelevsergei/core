'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useAdministratorState } from '@/app/administrator/reports/store/administrator.context'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'

const Mont = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const { setState } = useAdministratorState()

    const clickHandler = () => {
        setState((prevState) => ({
            ...prevState,
            updateContentInfo: true,
        }))
        if (!isButtonDisabled) {
            setIsButtonDisabled(true)

            setTimeout(() => {
                setIsButtonDisabled(false)
                setState((prevState) => ({
                    ...prevState,
                    updateContentInfo: false,
                }))
            }, 2000)
        }
    }

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
