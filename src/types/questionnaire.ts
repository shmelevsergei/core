export interface IQuestionnaire {
    id: number
    distributor: string
    distributor_employee: IDistributorEmployee[]
    data_sto: IDataSto[]
    inn: IInn[]
    status: 'draft' | 'accepted' | 'rejected' | 'sent'
}

export interface IDistributorEmployee {
    id: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaire?: number
}

export interface IDataSto {
    id: number
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
    id: number
    inn: string
    questionnaire?: number
}
