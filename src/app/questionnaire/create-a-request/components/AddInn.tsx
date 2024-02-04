'use client'
import React, { useRef, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input, InputProps } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

const AddInn = () => {
    const [values, setValues] = useState<string[]>([])
    const [currentInput, setCurrentInput] = useState<string>('')

    const removeInput = (index: number) => {
        setValues((prevInputs) => prevInputs.filter((_, i) => i !== index))
    }

    const addInput = () => {
        if (currentInput.trim() !== '') {
            setValues((prevInputs) => [...prevInputs, currentInput])
            setCurrentInput('')
        }
    }

    return (
        <div>
            <Label className={'font-bold text-lg'}>ИНН</Label>
            <div className={'grid grid-cols-3 gap-4'}>
                {values.length &&
                    values.map((value, index) => (
                        <Card
                            key={index}
                            className={'flex gap-1 items-center pl-2'}
                        >
                            <p className={'w-[300px] font-medium'}>
                                ИНН-{index + 1}:{' '}
                                <span className={'font-normal'}>{value}</span>
                            </p>
                            <Button onClick={() => removeInput(index)}>
                                <Trash2 />
                            </Button>
                        </Card>
                    ))}
            </div>
            <div className={'mt-5'}>
                <Input
                    id={'inn-sto-input'}
                    name={`inn-sto-input`}
                    placeholder={`Введите ИНН`}
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    className={cn('max-w-[300px]')}
                />
                <Button onClick={addInput} className={'mt-2'}>
                    Добавить ИНН
                </Button>
            </div>
        </div>
    )
}

export default AddInn
