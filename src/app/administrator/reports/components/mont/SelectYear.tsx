import {
    Select as SelectUiYears,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { useAdministratorState } from '../../store/administrator.context'

const lastYears = 3

const getYears = (lastYears: number) => {
    const currentYear = new Date().getFullYear()
    const yearsArray = []

    for (let i = 0; i < lastYears; i++) {
        yearsArray.push(currentYear - i)
    }
    return yearsArray
}

const years = getYears(lastYears)

const SelectYear = () => {
    const [selectYear, setSelectYear] = useState(
        () => `${new Date().getFullYear()}`
    )
    const { state, setState } = useAdministratorState()

    const currentMonth = state.currentDate?.from?.getMonth()

    const handleValueChange = (value: string) => {
        setSelectYear(value)

        if (!currentMonth) return
        setState((prevState) => ({
            ...prevState,
            currentDate: {
                from: new Date(+value, +currentMonth, 1),
                to: new Date(+value, +currentMonth + 1, 1),
            },
        }))
    }

    return (
        <SelectUiYears
            onValueChange={handleValueChange}
            defaultValue={selectYear}
        >
            <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Выбрать год" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {years.map((year, idx) => (
                        <SelectItem key={idx} value={`${year}`}>
                            {year}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </SelectUiYears>
    )
}

export default SelectYear
