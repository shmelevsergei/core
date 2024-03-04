import {
    Select as SelectUiMonth,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { useAdministratorState } from '../../store/administrator.context'

const montes = [
    { text: 'Январь', value: 0 },
    { text: 'Февраль', value: 1 },
    { text: 'Март', value: 2 },
    { text: 'Апрель', value: 3 },
    { text: 'Май', value: 4 },
    { text: 'Июнь', value: 5 },
    { text: 'Июль', value: 6 },
    { text: 'Август', value: 7 },
    { text: 'Сентябрь', value: 8 },
    { text: 'Октябрь', value: 9 },
    { text: 'Ноябрь', value: 10 },
    { text: 'Декабрь', value: 11 },
]

const SelectMonth = () => {
    const [selectMont, setSelectMont] = useState(
        () => `${new Date().getMonth() - 1}`
    )
    const { state, setState } = useAdministratorState()

    const currentYear = state.currentDate?.from?.getFullYear()

    const handleValueChange = (value: string) => {
        setSelectMont(value)

        if (!currentYear) return
        setState((prevState) => ({
            ...prevState,
            currentDate: {
                from: new Date(currentYear, +value, 1),
                to: new Date(currentYear, +value + 1, 1),
            },
        }))
    }

    return (
        <SelectUiMonth
            onValueChange={handleValueChange}
            defaultValue={selectMont}
        >
            <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Выбрать месяц" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {montes.map((mont) => (
                        <SelectItem key={mont.value} value={`${mont.value}`}>
                            {mont.text}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </SelectUiMonth>
    )
}

export default SelectMonth
