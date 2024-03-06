import React from 'react'
import Title from '@/app/distributor/questionnaire/create-a-request/components/Title'
import InputForm from '@/app/distributor/questionnaire/create-a-request/components/InputForm'
import { cn } from '@/lib/utils'
import { useDistributorState } from '@/app/distributor/store/distributor.context'

const Distributor = () => {
    const { state } = useDistributorState()

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
                    value={state.distributorId}
                    disabled={true}
                />
            </div>
        </>
    )
}

export default Distributor
