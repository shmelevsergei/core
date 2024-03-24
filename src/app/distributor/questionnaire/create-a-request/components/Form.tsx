'use client'
import React, { useEffect, useState } from 'react'
import Distributor from '@/app/distributor/questionnaire/create-a-request/components/distributor/Distributor'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import DistributorEmployee from '@/app/distributor/questionnaire/create-a-request/components/distributor-employee/DistributorEmployee'
import DataSto from '@/app/distributor/questionnaire/create-a-request/components/data-sto/DataSto'
import ManagerDetails from '@/app/distributor/questionnaire/create-a-request/components/manager-details/ManagerDetails'
import Lifts from '@/app/distributor/questionnaire/create-a-request/components/lifts/Lifts'
import Comment from '@/app/distributor/questionnaire/create-a-request/components/comment/Comment'
import Photo from '@/app/distributor/questionnaire/create-a-request/components/Photo/Photo'
import { Button } from '@/components/ui/button'
import { useQuestionnaireState } from '@/app/distributor/questionnaire/store/questionnaire.context'
import { toast } from '@/components/ui/use-toast'
import { createQuestionnaire } from '../../../../shared/actions/questionnaireAction'

const Form = () => {
    const { state, setState } = useQuestionnaireState()
    const [isDisabled, setIsDisabled] = useState(false)
    const [isUpload, setIsUpload] = useState(false)
    const [apiDaData, setApiDaData] = useState('')

    const fetchFormData = async () => {
        return await createQuestionnaire(state.questionnaire)
    }

    const handleClick = async () => {
        setIsDisabled(true)

        const fetchResult = await fetchFormData()

        if (fetchResult.success) {
            setIsUpload(true)
        }
    }

    useEffect(() => {
        if (isUpload) {
            toast({
                description: 'Анкета успешно отправлена',
                duration: 3000,
            })

            setState((s) => ({
                ...s,
                questionnaire: {
                    ...s.questionnaire,
                    comment: '',
                    data_sto: {
                        ...s.questionnaire.data_sto,
                        address: '',
                        area: '',
                        city: '',
                        code_client_avtoevro: '',
                        code_client_avtorus: '',
                        code_client_rossko: '',
                        name: '',
                    },
                    distributor_employee: {
                        ...s.questionnaire.distributor_employee,
                        email: '',
                        lastname: '',
                        name: '',
                        phone: '',
                        surname: '',
                    },
                    images: [],
                    inns: [],
                    lifts: {
                        ...s.questionnaire.lifts,
                        fourPostLift: 0,
                        fourPostLiftTraverse: 0,
                        pits: 0,
                        pitsEquippedTraverse: 0,
                        postAdditionalEquipment: 0,
                        postElectronicDiagnostic: 0,
                        twoPostLiftScissors: 0,
                    },
                    manager: {
                        ...s.questionnaire.manager,
                        email: '',
                        lastname: '',
                        name: '',
                        phone: '',
                        surname: '',
                    },
                    signatoryManager: {
                        ...s.questionnaire.signatoryManager,
                        email: '',
                        lastname: '',
                        name: '',
                        phone: '',
                        surname: '',
                    },
                },
                images: [],
            }))

            setTimeout(() => {}, 1000)
            setIsDisabled(false)
            setIsUpload(false)
        }
    }, [isUpload])

    useEffect(() => {
        const apiData = process.env.NEXT_PUBLIC_DADATA_API_KEY
        if (!apiData) return

        setApiDaData(apiData)
    }, [])
    return (
        <form>
            <Distributor />
            <Separator className={cn('my-3 w-full')} />
            <DistributorEmployee />
            <Separator className={cn('my-3 w-full')} />
            <DataSto apiDaData={apiDaData} />
            <Separator className={cn('my-3 w-full')} />
            <ManagerDetails />
            <Separator className={cn('my-3 w-full')} />
            <Lifts />
            <Separator className={cn('my-3 w-full')} />
            <Comment />
            <Separator className={cn('my-3 w-full')} />
            <Photo />
            <Separator className={cn('my-3 w-full')} />
            <Button
                onClick={handleClick}
                disabled={isDisabled}
                className={cn(
                    'bg-blue-700 mx-auto w-max block mt-10 hover:bg-blue-600'
                )}
            >
                Отправить анкету
            </Button>
        </form>
    )
}

export default Form
