'use client'

import {
    createContext,
    Dispatch,
    FC,
    SetStateAction,
    useContext,
    useState,
} from 'react'
import { IQuestionnaire } from '@/types/questionnaire/create-a-request/questionnaire'

type QuestionnaireStateType = {
    isModalDownloadImages: boolean

    questionnaire: IQuestionnaire
}

const QuestionnaireStateContext = createContext<{
    state: QuestionnaireStateType
    setState: Dispatch<SetStateAction<QuestionnaireStateType>>
}>({
    state: {} as QuestionnaireStateType,
    setState: () => {},
})

interface IQuestionnaireStateProvider {
    children: React.ReactNode
}

export const QuestionnaireProvider: FC<IQuestionnaireStateProvider> = ({
    children,
}) => {
    const [state, setState] = useState<QuestionnaireStateType>(() => {
        return {
            isModalDownloadImages: false,
            questionnaire: {} as IQuestionnaire,
        }
    })

    return (
        <QuestionnaireStateContext.Provider value={{ state, setState }}>
            {children}
        </QuestionnaireStateContext.Provider>
    )
}

export const useQuestionnaireState = () => useContext(QuestionnaireStateContext)
