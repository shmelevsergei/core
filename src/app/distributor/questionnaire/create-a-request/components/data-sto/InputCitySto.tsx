'use client'
import React, { useEffect, useId, useRef, useState } from 'react'
import {
    AddressSuggestions,
    DaDataAddress,
    DaDataSuggestion,
} from 'react-dadata'
import { Label } from '@/components/ui/label'
import { useQuestionnaireState } from '@/app/distributor/questionnaire/store/questionnaire.context'

const InputCitySto = ({
    name,
    apiDaData,
}: {
    name?: string
    apiDaData: string
}) => {
    const cityRef = useRef<AddressSuggestions | null>(null)
    const [value, setValue] = useState<
        DaDataSuggestion<DaDataAddress> | undefined
    >()
    const { setState } = useQuestionnaireState()

    const id = useId()

    const handleInputChange = (
        newValue: DaDataSuggestion<DaDataAddress> | undefined
    ) => {
        if (newValue) {
            setState((prevState) => ({
                ...prevState,
                questionnaire: {
                    ...prevState.questionnaire,
                    data_sto: {
                        ...prevState.questionnaire.data_sto,
                        city: newValue.value,
                    },
                },
            }))
        }
    }

    const handleManualInput = (e: React.FocusEvent<HTMLInputElement>) => {
        const newValue = e.target.value

        setState((prevState) => ({
            ...prevState,
            questionnaire: {
                ...prevState.questionnaire,
                data_sto: {
                    ...prevState.questionnaire.data_sto,
                    city: newValue,
                },
            },
        }))
    }

    useEffect(() => {})

    return (
        <div className={`grid w-full max-w-sm items-center gap-1.5`}>
            <Label htmlFor={id}>Город</Label>
            <AddressSuggestions
                token={apiDaData}
                onChange={handleInputChange}
                value={value}
                uid={id}
                minChars={3}
                ref={cityRef}
                inputProps={{
                    name: name,
                    id: id,
                    placeholder: 'Город',
                    onBlur: handleManualInput,
                }}
                containerClassName={'input'}
                highlightClassName={'item'}
            />
        </div>
    )
}

export default InputCitySto
