'use client'
import React, { useId, useRef, useState } from 'react'
import {
    AddressSuggestions,
    DaDataAddress,
    DaDataSuggestion,
} from 'react-dadata'
import { Label } from '@/components/ui/label'
import { useQuestionnaireState } from '@/app/distributor/questionnaire/store/questionnaire.context'

const InputAreaSto = ({
    name,
    apiDaData,
}: {
    name?: string
    apiDaData: string
}) => {
    const areaRef = useRef<AddressSuggestions | null>(null)
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
                        area: newValue.value,
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
                    area: newValue,
                },
            },
        }))
    }

    return (
        <div className={`grid w-full max-w-sm items-center gap-1.5`}>
            <Label htmlFor={id}>Область</Label>
            <AddressSuggestions
                token={apiDaData}
                onChange={handleInputChange}
                value={value}
                uid={id}
                ref={areaRef}
                minChars={3}
                inputProps={{
                    name: name,
                    id: id,
                    placeholder: 'Область',
                    onBlur: handleManualInput,
                }}
                containerClassName={'input'}
                highlightClassName={'item'}
            />
        </div>
    )
}

export default InputAreaSto
