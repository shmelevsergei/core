import React from 'react'
import Title from '@/app/questionnaire/create-a-request/components/Title'
import InputForm from '@/app/questionnaire/create-a-request/components/InputForm'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const Distributor = () => {
    return (
        <>
            <Title text={'Дистрибьютер'} />
            <div className={cn('mt-4 px-1')}>
                <InputForm
                    id={'name'}
                    placeholder={'Название'}
                    type={'text'}
                    label={'Название'}
                />
            </div>
        </>
    )
}

export default Distributor
