import React from 'react'
import Title from '@/app/questionnaire/create-a-request/components/Title'
import { cn } from '@/lib/utils'
import InputForm from '@/app/questionnaire/create-a-request/components/InputForm'
import {useQuestionnaireState} from "@/app/questionnaire/store/questionnaire.context";

const Lifts = () => {

    const { setState} = useQuestionnaireState()
    const handleInputChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value


        if (/^\d*$/.test(newValue) || newValue === '') {
            setState(prevState => ({
                ...prevState,
                questionnaire: {
                    ...prevState.questionnaire,
                    lifts: {
                        ...prevState.questionnaire.lifts,
                        [field]: newValue === '' ? 0 : +newValue,
                    }
                }
            }))
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

        if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <div>
            <Title text={'Подъемники в анкете'} />
            <div className={cn('grid grid-cols-3 gap-4 mt-4 px-1')}>
                <InputForm
                    id={'lift-2'}
                    placeholder={''}
                    type={'text'}
                    label={'2-х стоечный подъемник (ножницы)'}
                    onChange={(e) => handleInputChange('twoPostLiftScissors', e)}
                    onKeyDown={(e) => handleKeyDown(e)}

                />
                <InputForm
                    id={'lift-4'}
                    placeholder={''}
                    type={'text'}
                    label={'4-х стоечных подъемников'}
                    onChange={(e) => handleInputChange('fourPostLift', e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <InputForm
                    id={'lift-4-travers'}
                    placeholder={''}
                    type={'text'}
                    label={'4-х стоечных подъемников с траверсом'}
                    onChange={(e) => handleInputChange('fourPostLiftTraverse', e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <InputForm
                    id={'lift-pit'}
                    placeholder={''}
                    type={'text'}
                    label={'Ямы'}
                    onChange={(e) => handleInputChange('pits', e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <InputForm
                    id={'lift-pit-travers'}
                    placeholder={''}
                    type={'text'}
                    label={'Ямы, оборудованные траверсом'}
                    onChange={(e) => handleInputChange('pitsEquippedTraverse', e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <InputForm
                    id={'lift-post-diagnostic'}
                    placeholder={''}
                    type={'text'}
                    label={'Пост электронно-диагностических работ'}
                    onChange={(e) => handleInputChange('postElectronicDiagnostic', e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <InputForm
                    id={'lift-post-equipment'}
                    placeholder={''}
                    type={'text'}
                    label={'Пост установки доп. оборудования'}
                    onChange={(e) => handleInputChange('postAdditionalEquipment', e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
            </div>
        </div>
    )
}

export default Lifts
