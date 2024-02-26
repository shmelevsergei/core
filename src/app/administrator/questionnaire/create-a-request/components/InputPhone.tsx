import React, { forwardRef, useState } from 'react'
import {
    InputMask,
    MaskEventDetail,
    MaskEventHandler,
    Modify,
} from '@react-input/mask'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

interface CustomInputProps {
    label: string
    name: string
    placeholder: string
    id: string
    disabled?: boolean
    onChange?: (e: any) => void
    value?: string
}

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    (
        { label, name, placeholder, id, disabled, onChange, value },
        forwardedRef
    ) => {
        return (
            <div className={`grid w-full max-w-sm items-center gap-1.5`}>
                <Label htmlFor={id}>{label}</Label>
                <Input
                    id={id}
                    ref={forwardedRef}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }
)

interface InputPhoneProps {
    name?: string
    label: string
    placeholder: string
    id: string
    disabled?: boolean
    onChange?: (e: any) => void
    value?: string
}

const InputPhone = ({
    name,
    label,
    placeholder,
    id,
    disabled,
    onChange,
    value,
}: InputPhoneProps) => {
    const [detail, setDetail] = useState<MaskEventDetail | null>(null)

    // Or `event: MaskEvent`
    const handleMask: MaskEventHandler = (event) => {
        setDetail(event.detail)
    }

    const modify: Modify = (input) => {
        return {
            mask: input[0] === '0' ? '+_ (___) ___-__-__' : undefined,
        }
    }

    return (
        <InputMask
            component={CustomInput as React.ComponentType<any>}
            mask={'+7 (___)-___-__-__'}
            replacement={{ _: /\d/ }}
            modify={modify}
            onMask={handleMask}
            label={label}
            name={name}
            placeholder={placeholder}
            id={id}
            disabled={disabled}
            onChange={onChange}
            value={value}
        />
    )
}

export default InputPhone
