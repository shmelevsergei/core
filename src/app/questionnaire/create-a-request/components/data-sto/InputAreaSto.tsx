'use client'
import React, { useEffect, useId, useRef, useState } from 'react'
import {
    AddressSuggestions,
    DaDataAddress,
    DaDataSuggestion,
} from 'react-dadata'
import { DADATA_API_KEY } from '@/server/lib/variables'
import { Label } from '@/components/ui/label'
import {useQuestionnaireState} from "@/app/questionnaire/store/questionnaire.context";

const InputAreaSto = ({name}:{name?:string}) => {
    const areaRef = useRef<AddressSuggestions | null>(null)
    const [value, setValue] = useState<
        DaDataSuggestion<DaDataAddress> | undefined
    >()
    const { setState} = useQuestionnaireState()

    const apiKey: string = DADATA_API_KEY
    const id = useId()

    const handleInputChange = (newValue: DaDataSuggestion<DaDataAddress>| undefined) => {

        if (newValue) {
            setState(prevState => ({
             ...prevState,
                questionnaire: {
                 ...prevState.questionnaire,
                    data_sto: {
                     ...prevState.questionnaire.data_sto,
                        area: newValue.value
                    }
                }
            }))
        }
    }

    return (
        <div className={`grid w-full max-w-sm items-center gap-1.5`}>
            <Label htmlFor={id}>Область</Label>
            <AddressSuggestions
                token={apiKey}
                onChange={handleInputChange}
                value={value}
                uid={id}
                ref={areaRef}
                minChars={3}
                inputProps={{ name: name, id: id, placeholder: 'Область' }}
                containerClassName={'input'}
                highlightClassName={'item'}
            />
        </div>
    )
}

export default InputAreaSto
