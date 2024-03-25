'use server'
import { prismaPortal } from '@/lib/db'
import { IQuestionnaire } from '@/types/questionnaire/create-a-request/questionnaire'
import { revalidatePath } from 'next/cache'
import { cache } from 'react'
import { ConfirmData, Status } from '../../../../prisma/generate/client2'

export const getQuestionnaire = cache(async () => {
    return await prismaPortal.questionnaire.findMany({
        include: {
            distributor_employee: true,
            inns: true,
            images: true,
            lifts: true,
            manager: true,
            signatoryManager: true,
            confirmData: true,
            data_sto: true,
        },
    })

})

export const getQuestionnaireById = cache(async (id: number) => {
    return await prismaPortal.questionnaire.findFirst({
        where: {
            id,
        },
        include: {
            distributor_employee: true,
            inns: true,
            images: true,
            lifts: true,
            manager: true,
            signatoryManager: true,
            confirmData: true,
            data_sto: true,
        },
    })
})

export const getQuestionnaireByDistr = cache(async (distr: string) => {
    return await prismaPortal.questionnaire.findMany({
        where: {
            distributor: distr,
        },
        include: {
            data_sto: true,
        },
    })
})

export type UpdateConfirmData = {
    lifts: number | number | undefined
    loginOne: string
    loginTwo: string
}

export type UpdateQuestionnaire = {
    id: number
    status: Status
    comment?: string
    confirmData?: UpdateConfirmData
}

export const updateQuestionnaire = async (data: UpdateQuestionnaire) => {
    await prismaPortal.questionnaire.update({
        where: {
            id: data.id,
        },
        data: {
            status: data.status,
            comment: data.comment,
            confirmData: {
                update: {
                    lifts: data.confirmData?.lifts,
                    loginOne: data.confirmData?.loginOne,
                    loginTwo: data.confirmData?.loginTwo,
                },
            },
        },
    })
}

export const createQuestionnaire = async (data: IQuestionnaire) => {
    try {
        const dataObject = await prismaPortal.questionnaire.create({
            data: {
                distributor: data.distributor,
                distributor_employee: {
                    create: {
                        name: data.distributor_employee.name,
                        surname: data.distributor_employee.surname,
                        lastname: data.distributor_employee.lastname,
                        email: data.distributor_employee.email,
                        phone: data.distributor_employee.phone,
                    },
                },
                data_sto: {
                    create: {
                        name: data.data_sto.name,
                        city: data.data_sto.city,
                        area: data.data_sto.area,
                        address: data.data_sto.address,
                        code_client_avtoevro:
                            data.data_sto.code_client_avtoevro,
                        code_client_avtorus: data.data_sto.code_client_avtorus,
                        code_client_rossko: data.data_sto.code_client_rossko,
                    },
                },
                confirmData: {
                    create: {
                        lifts: data.confirmData.lifts,
                        loginOne: data.confirmData.loginOne,
                        loginTwo: data.confirmData.loginTwo,
                    },
                },
                lifts: {
                    create: {
                        fourPostLift: data.lifts.fourPostLift,
                        pits: data.lifts.pits,
                        fourPostLiftTraverse: data.lifts.fourPostLiftTraverse,
                        pitsEquippedTraverse: data.lifts.pitsEquippedTraverse,
                        postAdditionalEquipment:
                            data.lifts.postAdditionalEquipment,
                        twoPostLiftScissors: data.lifts.twoPostLiftScissors,
                        postElectronicDiagnostic:
                            data.lifts.postElectronicDiagnostic,
                    },
                },
                images: {
                    createMany: {
                        data: data.images,
                    },
                },
                inns: {
                    createMany: {
                        data: data.inns,
                    },
                },
                manager: {
                    create: {
                        name: data.manager.name,
                        surname: data.manager.surname,
                        lastname: data.manager.lastname,
                        email: data.manager.email,
                        phone: data.manager.phone,
                    },
                },
                signatoryManager: {
                    create: {
                        name: data.signatoryManager.name,
                        surname: data.signatoryManager.surname,
                        lastname: data.signatoryManager.lastname,
                        email: data.signatoryManager.email,
                        phone: data.signatoryManager.phone,
                    },
                },
                status: data.status,
                comment: data.comment,
                created_date: new Date(),
                updated_date: new Date(),
            },
        })

        revalidatePath('/distributor/questionnaire/')
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}
