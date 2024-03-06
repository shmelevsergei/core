'use client'
import {
    createContext,
    SetStateAction,
    useContext,
    Dispatch,
    FC,
    useState,
} from 'react'
import { DateRange } from 'react-day-picker'

type DistributorStateType = {
    currentDate: DateRange | undefined
    updateContentInfo: boolean
    distributorId: string
}

const DistributorStateContext = createContext<{
    state: DistributorStateType
    setState: Dispatch<SetStateAction<DistributorStateType>>
}>({
    state: {} as DistributorStateType,
    setState: () => {},
})

interface IDistributorStateProvider {
    children: React.ReactNode
}
export const DistributorProvider: FC<IDistributorStateProvider> = ({
    children,
}) => {
    const [state, setState] = useState<DistributorStateType>(() => {
        return {
            currentDate: {
                from: new Date(
                    new Date().getFullYear(),
                    new Date().getMonth() - 1,
                    1
                ),
                to: new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    1
                ),
            },
            updateContentInfo: true,
            distributorId: '',
        }
    })
    return (
        <DistributorStateContext.Provider value={{ state, setState }}>
            {children}
        </DistributorStateContext.Provider>
    )
}

export const useDistributorState = () => useContext(DistributorStateContext)
