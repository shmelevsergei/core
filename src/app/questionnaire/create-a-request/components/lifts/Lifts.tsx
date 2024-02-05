import React from 'react'
import Title from '@/app/questionnaire/create-a-request/components/Title'
import { cn } from '@/lib/utils'
import InputForm from '@/app/questionnaire/create-a-request/components/InputForm'

const Lifts = () => {
    return (
        <div>
            <Title text={'Подъемники в анкете'} />
            <div className={cn('grid grid-cols-3 gap-4 mt-4 px-1')}>
                <InputForm
                    id={'lift-2'}
                    placeholder={''}
                    type={'text'}
                    label={'2-х стоечный подъемник (ножницы)'}
                />
                <InputForm
                    id={'lift-4'}
                    placeholder={''}
                    type={'text'}
                    label={'4-х стоечных подъемников'}
                />
                <InputForm
                    id={'lift-4-travers'}
                    placeholder={''}
                    type={'text'}
                    label={'4-х стоечных подъемников с траверсом'}
                />
                <InputForm
                    id={'lift-pit'}
                    placeholder={''}
                    type={'text'}
                    label={'Ямы'}
                />
                <InputForm
                    id={'lift-pit-travers'}
                    placeholder={''}
                    type={'text'}
                    label={'Ямы, оборудованные траверсом'}
                />
                <InputForm
                    id={'lift-post-diagnostic'}
                    placeholder={''}
                    type={'text'}
                    label={'Пост электронно-диагностических работ'}
                />
                <InputForm
                    id={'lift-post-equipment'}
                    placeholder={''}
                    type={'text'}
                    label={'Пост установки доп. оборудования'}
                />
            </div>
        </div>
    )
}

export default Lifts
