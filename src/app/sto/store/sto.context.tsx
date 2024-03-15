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

type StoStateType = {
    currentDate: DateRange | undefined
    updateContentInfo: boolean
    stoId: string
}

const StoStateContext = createContext<{
    state: StoStateType
    setState: Dispatch<SetStateAction<StoStateType>>
}>({
    state: {} as StoStateType,
    setState: () => {},
})

interface IStoStateProvider {
    children: React.ReactNode
}
export const StoProvider: FC<IStoStateProvider> = ({ children }) => {
    const [state, setState] = useState<StoStateType>(() => {
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
            stoId: '',
        }
    })
    return (
        <StoStateContext.Provider value={{ state, setState }}>
            {children}
        </StoStateContext.Provider>
    )
}

export const useStoState = () => useContext(StoStateContext)
