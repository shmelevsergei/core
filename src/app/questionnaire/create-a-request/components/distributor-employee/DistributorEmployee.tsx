'use client'
import React from 'react'
import Title from '@/app/questionnaire/create-a-request/components/Title'
import { cn } from '@/lib/utils'

import InputForm from '@/app/questionnaire/create-a-request/components/InputForm'
import InputPhone from '../InputPhone'
import {useQuestionnaireState} from "@/app/questionnaire/store/questionnaire.context";

const DistributorEmployee = () => {
    const { setState} = useQuestionnaireState()

    const handleInputChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prevState => ({
            ...prevState,
            questionnaire: {
                ...prevState.questionnaire,
                distributor_employee: {
                    ...prevState.questionnaire.distributor_employee,
                    [field]: e.target.value
                }
            }
        }))
    }

    return (
        <>
            <Title text={'Сотрудник дистрибьютора'} />
            <div className={cn('mt-4 grid grid-cols-2 gap-5 px-1')}>
                <InputForm
                    id={'lastname-employee'}
                    placeholder={'Фамилия'}
                    type={'text'}
                    label={'Фамилия'}
                    onChange={(e) => handleInputChange('lastname', e)}
                />
                <InputForm
                    id={'name-employee'}
                    placeholder={'Имя'}
                    type={'text'}
                    label={'Имя'}
                    onChange={(e) => handleInputChange('name', e)}
                />
                <InputForm
                    id={'surname-employee'}
                    placeholder={'Отчество'}
                    type={'text'}
                    label={'Отчество'}
                    onChange={(e) => handleInputChange('surname', e)}
                />
                <InputPhone
                    id={'phone-employee'}
                    label={'Контактный телефон'}
                    placeholder={'+7 (999) 999 99 99'}
                    onChange={(e) => handleInputChange('phone', e)}
                />
                <InputForm
                    id={'mail-employee'}
                    placeholder={'E-Mail'}
                    type={'email'}
                    label={'E-Mail'}
                    onChange={(e) => handleInputChange('email', e)}
                />
            </div>
        </>
    )
}

export default DistributorEmployee
