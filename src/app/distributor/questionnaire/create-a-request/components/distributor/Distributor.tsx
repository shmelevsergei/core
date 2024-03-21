import React, { useEffect, useState } from 'react'
import Title from '@/app/distributor/questionnaire/create-a-request/components/Title'
import InputForm from '@/app/distributor/questionnaire/create-a-request/components/InputForm'
import { cn } from '@/lib/utils'
import { getCookies } from '@/components/form/cookiesAction'
import { useQuestionnaireState } from '../../../store/questionnaire.context'

const Distributor = () => {
    const [name, setName] = useState('')
    const { setState } = useQuestionnaireState()

    useEffect(() => {
        const getName = async () => {
            const cookieData = await getCookies()

            if (cookieData) {
                setName(cookieData.name)
                setState((prevState) => ({
                    ...prevState,
                    questionnaire: {
                        ...prevState.questionnaire,
                        distributor: cookieData.name,
                    },
                }))
            }
        }

        getName()
    }, [])
    return (
        <>
            <Title text={'Дистрибьютор'} />
            <div className={cn('mt-4 px-1')}>
                <InputForm
                    id={'name'}
                    placeholder={'Название'}
                    type={'text'}
                    label={'Название'}
                    name={'distributor'}
                    value={name}
                    disabled={true}
                />
            </div>
        </>
    )
}

export default Distributor
