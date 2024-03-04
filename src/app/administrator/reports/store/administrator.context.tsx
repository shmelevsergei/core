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

type AdministratorStateType = {
    currentDate: DateRange | undefined
    updateContentInfo: boolean
    offerSigned: number
    allSto: number
    newcomers: number
    averageLifts: number
    allPurchaseStoNotNull: number
    allMoney: number
    prevAllMoney: number
}

const AdministratorStateContext = createContext<{
    state: AdministratorStateType
    setState: Dispatch<SetStateAction<AdministratorStateType>>
}>({
    state: {} as AdministratorStateType,
    setState: () => {},
})

interface IAdministratorStateProvider {
    children: React.ReactNode
}
export const AdministratorProvider: FC<IAdministratorStateProvider> = ({
    children,
}) => {
    const [state, setState] = useState<AdministratorStateType>(() => {
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
            offerSigned: 0,
            allSto: 0,
            newcomers: 0,
            averageLifts: 0,
            allPurchaseStoNotNull: 0,
            allMoney: 0,
            prevAllMoney: 0,
        }
    })
    return (
        <AdministratorStateContext.Provider value={{ state, setState }}>
            {children}
        </AdministratorStateContext.Provider>
    )
}

export const useAdministratorState = () => useContext(AdministratorStateContext)
