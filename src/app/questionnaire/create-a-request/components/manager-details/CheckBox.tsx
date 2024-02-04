import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import React from 'react'

export default function CheckBox({
    className,
    checked,
    onCheckedChange,
}: {
    className: string
    checked: boolean
    onCheckedChange: (isChecked: boolean) => void
}) {
    const handleSetIsChecked = () => {
        onCheckedChange(checked)
    }

    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <Checkbox
                id="terms"
                checked={checked}
                onCheckedChange={handleSetIsChecked}
            />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Руководитель СТО и подписант являются одним лицом
            </label>
        </div>
    )
}
