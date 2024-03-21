import React from 'react'
import Title from './Title'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import SubTitle from './SubTitle'

const FormDataAccepted = ({ lifts }: { lifts: number }) => {
    return (
        <>
            <Title title={'Данные подтверждения'} />
            <div className={cn('grid grid-cols-3 gap-4 mt-4 px-1')}>
                <div className="pb-3">
                    <SubTitle subTitle="Логин 1" />
                    <Input
                        placeholder={'Логин 1'}
                        type={'text'}
                        name={'confirmation-login-1'}
                    />
                </div>
                <div className="pb-3">
                    <SubTitle subTitle="Логин 2" />
                    <Input
                        name={'confirmation-login-2'}
                        placeholder={'Логин 2'}
                        type={'text'}
                    />
                </div>
                <div className="pb-3">
                    <SubTitle subTitle="Кол-во подъемников" />
                    <Input
                        name={'confirmation-lifts'}
                        placeholder={'Кол-во подъемников'}
                        type={'text'}
                        value={lifts}
                    />
                </div>
            </div>
        </>
    )
}

export default FormDataAccepted
