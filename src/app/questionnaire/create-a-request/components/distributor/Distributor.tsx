import React from 'react'
import Title from '@/app/questionnaire/create-a-request/components/Title'
import InputForm from '@/app/questionnaire/create-a-request/components/InputForm'
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
                    name={'distributor'}
                    value={'название дитрибьютера'}
                    disabled={true}
                />
            </div>
        </>
    )
}

export default Distributor
