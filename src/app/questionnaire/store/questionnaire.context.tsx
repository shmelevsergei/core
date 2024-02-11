'use client'

import {
    createContext,
    Dispatch,
    FC,
    SetStateAction,
    useContext,
    useState,
} from 'react'
import {
    IConfirmData,
    IDataManager, IDataSignatoryManager,
    IDataSto,
    IDistributorEmployee, IImageClient,
    IImageProps,
    IInn, ILifts,
} from '@/types/questionnaire/create-a-request/questionnaire'

type QuestionnaireStateType = {
    isModalDownloadImages: boolean
    questionnaire: {
        images: IImageProps[]
        inns: IInn[]
        distributor: string
        distributor_employee: IDistributorEmployee
        data_sto: IDataSto
        lifts: ILifts
        manager: IDataManager
        signatoryManager: IDataSignatoryManager
        confirmData: IConfirmData
        status: 'draft' | 'accepted' | 'rejected' | 'sent'
        comment: string
    }
    images: IImageClient[]
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
            questionnaire: {
                images: [],
                inns: [],
                confirmData: {
                    lifts: 0,
                    loginTwo: '',
                    loginOne: ''
                },
                distributor: 'название дитрибьютера',
                lifts: {
                    postElectronicDiagnostic: 0,
                    twoPostLiftScissors: 0,
                    postAdditionalEquipment: 0,
                    pitsEquippedTraverse: 0,
                    fourPostLiftTraverse: 0,
                    pits: 0,
                    fourPostLift: 0
                },
                manager: {
                    phone: '',
                    email: '',
                    lastname: '',
                    surname: '',
                    name: ''
                },
                distributor_employee: {
                    phone: '',
                    lastname: '',
                    surname: '',
                    name: '',
                    email: '',
                },
                signatoryManager: {
                    phone: '',
                    email: '',
                    lastname: '',
                    surname: '',
                    name: ''
                },
                data_sto: {
                    city: '',
                    name: '',
                    code_client_rossko: '',
                    code_client_avtorus: '',
                    address: '',
                    code_client_avtoevro: '',
                    area: ''
                },
                status: "sent",
                comment: '',

            },
            images: []
        }
    })

    return (
        <QuestionnaireStateContext.Provider value={{ state, setState }}>
            {children}
        </QuestionnaireStateContext.Provider>
    )
}

export const useQuestionnaireState = () => useContext(QuestionnaireStateContext)
