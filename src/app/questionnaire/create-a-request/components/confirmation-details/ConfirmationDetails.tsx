import React from 'react'
import Title from '@/app/questionnaire/create-a-request/components/Title'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import InputForm from '@/app/questionnaire/create-a-request/components/InputForm'

const ConfirmationDetails = () => {
    return (
        <div>
            <Title text={'Данные подтверждения'} />
            <div className={cn('grid grid-cols-3 gap-4 mt-4 px-1')}>
                <InputForm
                    id={'confirmation-login-1'}
                    placeholder={'Логин 1'}
                    type={'text'}
                    label={'Логин 1'}
                />
                <InputForm
                    id={'confirmation-login-2'}
                    placeholder={'Логин 2'}
                    type={'text'}
                    label={'Логин 2'}
                />
                <InputForm
                    id={'confirmation-lifts'}
                    placeholder={''}
                    type={'text'}
                    label={'Кол-во подъемников'}
                />
            </div>
        </div>
    )
}

export default ConfirmationDetails
