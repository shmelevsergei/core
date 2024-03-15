'use client'
import { IBranding } from '@/types/administrator/branding'
import { ICompetitions } from '@/types/administrator/competitions'
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
    prevAllPurchaseStoNotNull: number
    allMoney: number
    prevAllMoney: number
    purchaseStoCount: number
    prevPurchaseStoCount: number
    allRemzonaQty: number
    prevAllRemzonaQty: number
    branding: IBranding
    competitions: ICompetitions
    totalScores: number
    pointsToAwarded: number
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
            prevAllPurchaseStoNotNull: 0,
            allMoney: 0,
            prevAllMoney: 0,
            purchaseStoCount: 0,
            prevPurchaseStoCount: 0,
            allRemzonaQty: 0,
            prevAllRemzonaQty: 0,
            branding: {
                allBranded: 0,
                boxBranded: 0,
                partialBranded: 0,
                posterBranded: 0,
            },
            competitions: {
                masterConsultant: 0,
                supervisor: 0,
                totalParticipants: 0,
            },
            totalScores: 0,
            pointsToAwarded: 0,
        }
    })
    return (
        <AdministratorStateContext.Provider value={{ state, setState }}>
            {children}
        </AdministratorStateContext.Provider>
    )
}

export const useAdministratorState = () => useContext(AdministratorStateContext)
