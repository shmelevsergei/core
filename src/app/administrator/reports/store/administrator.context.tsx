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
    prevOborot: number
    oborot: number
    totalSto: number
    dogovorTrue: number
    newsBrands: number
    purchaseSto: number
    avarageOfLifts: number
    prevPurchaseSto: number
    purchaseStoCount: number
    prevPurchaseStoCount: number
    remzonaQty: number
    prevRemzonaQty: number
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
            prevOborot: 0,
            oborot: 0,
            totalSto: 0,
            dogovorTrue: 0,
            newsBrands: 0,
            purchaseSto: 0,
            avarageOfLifts: 0,
            prevPurchaseSto: 0,
            purchaseStoCount: 0,
            prevPurchaseStoCount: 0,
            remzonaQty: 0,
            prevRemzonaQty: 0,
        }
    })
    return (
        <AdministratorStateContext.Provider value={{ state, setState }}>
            {children}
        </AdministratorStateContext.Provider>
    )
}

export const useAdministratorState = () => useContext(AdministratorStateContext)