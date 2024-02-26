'use client'
import React, { useId, useRef, useState } from 'react'
import {
    AddressSuggestions,
    DaDataAddress,
    DaDataSuggestion,
} from 'react-dadata'
import { DADATA_API_KEY } from '@/server/lib/variables'
import { Label } from '@/components/ui/label'
import { useQuestionnaireState } from '@/app/administrator/questionnaire/store/questionnaire.context'

const InputAddressSto = ({ name }: { name?: string }) => {
    const addressRef = useRef<AddressSuggestions | null>(null)
    const [value, setValue] = useState<
        DaDataSuggestion<DaDataAddress> | undefined
    >()

    const { setState } = useQuestionnaireState()

    const apiKey: string = DADATA_API_KEY
    const id = useId()

    const handleInputChange = (
        newValue: DaDataSuggestion<DaDataAddress> | undefined
    ) => {
        setValue(newValue)

        if (newValue) {
            setState((prevState) => ({
                ...prevState,
                questionnaire: {
                    ...prevState.questionnaire,
                    data_sto: {
                        ...prevState.questionnaire.data_sto,
                        address: newValue.value,
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
                    address: newValue,
                },
            },
        }))
    }

    return (
        <div className={`grid w-full max-w-sm items-center gap-1.5`}>
            <Label htmlFor={id}>Адрес СТО</Label>
            <AddressSuggestions
                token={apiKey}
                value={value}
                onChange={handleInputChange}
                uid={id}
                minChars={3}
                ref={addressRef}
                inputProps={{
                    name: name,
                    id: id,
                    placeholder: 'Адрес СТО',
                    onBlur: handleManualInput,
                }}
                containerClassName={'input'}
                highlightClassName={'item'}
            />
        </div>
    )
}

export default InputAddressSto
