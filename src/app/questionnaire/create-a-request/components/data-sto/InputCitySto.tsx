'use client'
import React, { useEffect, useId, useRef, useState } from 'react'
import {
    AddressSuggestions,
    DaDataAddress,
    DaDataSuggestion,
} from 'react-dadata'
import { DADATA_API_KEY } from '@/server/lib/variables'
import { Label } from '@/components/ui/label'

const InputCitySto = () => {
    const cityRef = useRef<AddressSuggestions | null>(null)
    const [value, setValue] = useState<
        DaDataSuggestion<DaDataAddress> | undefined
    >()
    const [city, setCity] = useState<HTMLInputElement | null>(null)

    const apiKey: string = DADATA_API_KEY
    const id = useId()

    useEffect(() => {
        if (cityRef) {
            console.log(cityRef.current?.props.value?.value)
        }
    })

    return (
        <div className={`grid w-full max-w-sm items-center gap-1.5`}>
            <Label htmlFor={id}>Город</Label>
            <AddressSuggestions
                token={apiKey}
                value={value}
                onChange={setValue}
                uid={id}
                minChars={3}
                ref={cityRef}
                inputProps={{ name: 'city', id: id, placeholder: 'Город' }}
                containerClassName={'input'}
                highlightClassName={'item'}
            />
        </div>
    )
}

export default InputCitySto
