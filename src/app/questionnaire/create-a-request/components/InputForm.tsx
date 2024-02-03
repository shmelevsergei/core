'use client'
import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// eslint-disable-next-line react/display-name
const InputForm = React.forwardRef<HTMLInputElement, {id: string, label?: string, placeholder: string, type: string, onChange?: () => void}>(({id, label, placeholder, type, onChange}, ref) => {

    return (
        <div className={`grid w-full max-w-sm items-center gap-1.5`}>
            <Label htmlFor={id}>{label}</Label>
            <Input type={type} id={id} placeholder={placeholder} ref={ref} onChange={onChange} />
        </div>
    )
})

export default InputForm;