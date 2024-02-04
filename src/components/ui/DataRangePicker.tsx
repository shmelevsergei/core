'use client'

import { HTMLAttributes, useEffect, useState } from 'react'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'
import { ru } from 'date-fns/locale/ru'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { useAdministratorState } from '@/app/reports/store/administrator.context'

interface IDatePickerWithRange {
    className?: HTMLAttributes<HTMLDivElement>
    changeDate?: boolean
}

export default function DatePickerWithRange({
    className,
}: IDatePickerWithRange) {
    const [date, setDate] = useState<DateRange | undefined>()

    const { state, setState } = useAdministratorState()

    useEffect(() => {
        setDate({
            from: state.currentDate?.from,
            to: state.currentDate?.to,
        })
    }, [])

    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            currentDate: date,
        }))
    }, [date])

    return (
        <div className={cn('grid gap-2', className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={'outline'}
                        className={cn(
                            'w-[300px] justify-start text-left font-normal',
                            !date && 'text-muted-foreground'
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, 'LLL dd, y', {
                                        locale: ru,
                                    })}{' '}
                                    -{' '}
                                    {format(date.to, 'LLL dd, y', {
                                        locale: ru,
                                    })}
                                </>
                            ) : (
                                format(date.from, 'LLL dd, y', { locale: ru })
                            )
                        ) : (
                            <span>ВЫБРАТЬ ПЕРИОД</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
