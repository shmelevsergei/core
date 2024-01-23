'use client'
import {createContext, SetStateAction, useContext, Dispatch, FC, useState} from 'react';
import {DateRange} from "react-day-picker";

type AdministratorStateType = {
    currentDate: DateRange | undefined,
    updateContentInfo: boolean,
    prevOborot: number,
    oborot: number,
    totalSto: number,
    purchaseSto: number,
    prevPurchaseSto: number,
}

const AdministratorStateContext = createContext<{
    state: AdministratorStateType;
    setState: Dispatch<SetStateAction<AdministratorStateType>>
}>({
    state: {} as AdministratorStateType,
    setState: () => {},
});


interface IAdministratorStateProvider {
    children: React.ReactNode;
}
export const AdministratorProvider:FC<IAdministratorStateProvider> = ({children}) => {
    const [state, setState] = useState<AdministratorStateType>(() => {
        return {
            currentDate: {
                from: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
                to: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            },
            updateContentInfo: false,
            prevOborot: 0,
            oborot: 0,
            totalSto: 0,
            purchaseSto: 0,
            prevPurchaseSto: 0,
        }
    });
    return (
        <AdministratorStateContext.Provider value={{state, setState}}>
            {children}
        </AdministratorStateContext.Provider>
    )
};

export const useAdministratorState = () => useContext(AdministratorStateContext);