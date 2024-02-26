'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import Title from '@/app/questionnaire/create-a-request/components/Title'
import { cn } from '@/lib/utils'
import InputForm from '@/app/questionnaire/create-a-request/components/InputForm'
import { Separator } from '@/components/ui/separator'
import AddInn from '@/app/questionnaire/create-a-request/components/AddInn'
import InputCitySto from '@/app/questionnaire/create-a-request/components/data-sto/InputCitySto'
import InputAreaSto from '@/app/questionnaire/create-a-request/components/data-sto/InputAreaSto'
import InputAddressSto from '@/app/questionnaire/create-a-request/components/data-sto/InputAddressSto'
import {useQuestionnaireState} from "@/app/questionnaire/store/questionnaire.context";

const DataSto = () => {
    const {state, setState} = useQuestionnaireState()

    const handleInputChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prevState => ({
            ...prevState,
            questionnaire: {
                ...prevState.questionnaire,
                data_sto: {
                    ...prevState.questionnaire.data_sto,
                    [field]: e.target.value
                }
            }
        }))
    }

    return (
        <>
            <Title text={'Данные СТО'} />
            <div className={cn('mt-4  px-1')}>
                <div className={'grid grid-cols-2 gap-5'}>
                    <InputForm
                        id={'name-sto'}
                        placeholder={'Название СТО'}
                        type={'text'}
                        label={'Название СТО'}
                        onChange={(e) => handleInputChange('name', e)}
                    />
                    <InputCitySto />
                    <InputAreaSto />
                    <InputAddressSto />
                    <InputForm
                        id={'code-avtoevro-sto'}
                        placeholder={'Код клиента АВТО-ЕВРО'}
                        type={'text'}
                        label={'Код клиента АВТО-ЕВРО'}
                        onChange={(e) => handleInputChange('code_client_avtoevro', e)}

                    />
                    <InputForm
                        id={'code-avtorus-sto'}
                        placeholder={'Код клиента АВТОРУСЬ'}
                        type={'text'}
                        label={'Код клиента АВТОРУСЬ'}
                        onChange={(e) => handleInputChange('code_client_avtorus', e)}
                    />
                    <InputForm
                        id={'code-rossko-sto'}
                        placeholder={'Код клиента РОССКО'}
                        type={'text'}
                        label={'Код клиента РОССКО'}
                        onChange={(e) => handleInputChange('code_client_rossko', e)}
                    />
                </div>
                <Separator className={'my-5'} />
                <AddInn />
            </div>
        </>
    )
}

export default DataSto
