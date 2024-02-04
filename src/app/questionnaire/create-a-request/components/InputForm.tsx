'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface InputFormProps {
    id: string
    label?: string
    placeholder: string
    type: string
    disabled?: boolean
    onChange?: () => void
}

// eslint-disable-next-line react/display-name
const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
    ({ id, label, placeholder, type, disabled, onChange }, ref) => {
        return (
            <div className={`grid w-full max-w-sm items-center gap-1.5`}>
                <Label htmlFor={id}>{label}</Label>
                <Input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    ref={ref}
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
        )
    }
)

export default InputForm
