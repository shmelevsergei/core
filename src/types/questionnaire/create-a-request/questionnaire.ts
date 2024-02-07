export interface IQuestionnaire {
    id?: number
    distributor: string
    distributor_employee: IDistributorEmployee
    data_sto: IDataSto
    inns: IInn[]
    images: IImageProps[]
    lifts: ILifts
    manager: IDataManager
    signatoryManager: IDataSignatoryManager
    confirmData: IConfirmData
    comment?: string
    createdDate?: Date
    updatedDate?: Date

    status: 'draft' | 'accepted' | 'rejected' | 'sent'
}

export interface IDistributorEmployee {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaire?: number
}

export interface IDataSto {
    id?: number
    name: string
    city: string
    area: string
    address: string
    code_client_avtoevro: string
    code_client_avtorus: string
    code_client_rossko: string
    questionnaire?: number
}

export interface IInn {
    id?: number
    inn: string
    questionnaire?: number
}

export interface IImageProps {
    id?: number
    description: string
    path: string
}

export interface IDataManager {
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
}

export interface IDataSignatoryManager {
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
}

export interface ILifts {
    id?: number
    twoPostLiftScissors: number
    fourPostLift: number
    fourPostLiftTraverse: number
    pits: number
    pitsEquippedTraverse: number
    postElectronicDiagnostic: number
    postAdditionalEquipment: number
}
export interface IConfirmData {
    id?: number
    loginOne: string
    loginTwo: string
    lifts: number
}
