import React from 'react'
import Title from '@/app/distributor/questionnaire/create-a-request/components/Title'
import { cn } from '@/lib/utils'
import InputForm from '@/app/distributor/questionnaire/create-a-request/components/InputForm'
import { useQuestionnaireState } from '@/app/distributor/questionnaire/store/questionnaire.context'

const ConfirmationDetails = () => {
    const { setState } = useQuestionnaireState()

    const handleInputChange = (
        field: string,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = e.target.value

        setState((prevState) => ({
            ...prevState,
            questionnaire: {
                ...prevState.questionnaire,
                confirmData: {
                    ...prevState.questionnaire.confirmData,
                    loginOne: newValue,
                    loginTwo: newValue,
                    lifts: +newValue,
                },
            },
        }))
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowedKeys = [
            'Backspace',
            'Delete',
            'ArrowLeft',
            'ArrowRight',
            'Tab',
        ]

        if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
            e.preventDefault()
        }
    }
    return (
        <div>
            <Title text={'Данные подтверждения'} />
            <div className={cn('grid grid-cols-3 gap-4 mt-4 px-1')}>
                <InputForm
                    id={'confirmation-login-1'}
                    placeholder={'Логин 1'}
                    type={'text'}
                    label={'Логин 1'}
                    onChange={(e) => handleInputChange('loginOne', e)}
                />
                <InputForm
                    id={'confirmation-login-2'}
                    placeholder={'Логин 2'}
                    type={'text'}
                    label={'Логин 2'}
                    onChange={(e) => handleInputChange('loginTwo', e)}
                />
                <InputForm
                    id={'confirmation-lifts'}
                    placeholder={''}
                    type={'text'}
                    label={'Кол-во подъемников'}
                    onChange={(e) => handleInputChange('lifts', e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
            </div>
        </div>
    )
}

export default ConfirmationDetails
