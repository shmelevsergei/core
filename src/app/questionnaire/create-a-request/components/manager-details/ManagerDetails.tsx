import React, { useEffect, useState } from 'react'
import Title from '@/app/questionnaire/create-a-request/components/Title'
import { cn } from '@/lib/utils'
import InputForm from '@/app/questionnaire/create-a-request/components/InputForm'
import InputPhone from '@/app/questionnaire/create-a-request/components/InputPhone'
import CheckBox from './CheckBox'
import {
    IDataManager,
    IDataSignatoryManager,
} from '@/types/questionnaire/create-a-request/questionnaire'

const ManagerDetails = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [disabled, setIsDisabled] = useState(false)

    const [dataManager, setDataManager] = useState<IDataManager>({
        name: '',
        surname: '',
        lastname: '',
        phone: '',
        email: '',
    })
    const [dataSignatoryManager, setDataSignatoryManager] =
        useState<IDataSignatoryManager>({
            name: '',
            surname: '',
            lastname: '',
            phone: '',
            email: '',
        })

    const handleCheckedChange = () => {
        setIsChecked(!isChecked)
    }

    const handleInputManagerChange = (field: string, e: any) => {
        setDataManager((prevData) => ({
            ...prevData,
            [field]: e.target.value,
        }))
    }

    const handleInputSignatoryManagerChange = (field: string, e: any) => {
        if (!disabled) {
            setDataSignatoryManager((prevData) => ({
                ...prevData,
                [field]: e.target.value,
            }))
        }
    }

    useEffect(() => {
        if (disabled) {
            setDataSignatoryManager((prevData) => ({
                ...prevData,
                name: dataManager.name,
                surname: dataManager.surname,
                lastname: dataManager.lastname,
                phone: dataManager.phone,
                email: dataManager.email,
            }))
        }
    }, [disabled, dataManager])

    useEffect(() => {
        setIsDisabled(!isChecked)
    }, [isChecked])

    return (
        <div>
            <Title text={'Данные руководителя / подписанта'} />
            <div className={cn('grid grid-cols-2 gap-4 mt-4 px-1')}>
                <div className={'flex flex-col gap-4'}>
                    <Title
                        text={'Руководитель СТО'}
                        className={cn('text-xl')}
                    />
                    <InputForm
                        id={'lastname-manager'}
                        placeholder={'Фамилия'}
                        type={'text'}
                        label={'Фамилия'}
                        onChange={(e) =>
                            handleInputManagerChange('lastname', e)
                        }
                    />
                    <InputForm
                        id={'name-manager'}
                        placeholder={'Имя'}
                        type={'text'}
                        label={'Имя'}
                        onChange={(e) => handleInputManagerChange('name', e)}
                    />
                    <InputForm
                        id={'surname-manager'}
                        placeholder={'Отчество'}
                        type={'text'}
                        label={'Отчество'}
                        onChange={(e) => handleInputManagerChange('surname', e)}
                    />
                    <InputPhone
                        name={'phone-manager'}
                        id={'phone-manager'}
                        label={'Телефон'}
                        placeholder={'+7 (999) 999 99 99'}
                        onChange={(e) => handleInputManagerChange('phone', e)}
                    />
                    <InputForm
                        id={'mail-manager'}
                        placeholder={'E-Mail'}
                        type={'email'}
                        label={'Адрес электронной почты'}
                        onChange={(e) => handleInputManagerChange('email', e)}
                    />
                    <CheckBox
                        className="mt-3"
                        checked={!isChecked}
                        onCheckedChange={handleCheckedChange}
                    />
                </div>
                <div className={'flex flex-col gap-4'}>
                    <Title
                        text={'Подписант'}
                        className={cn('text-xl')}
                        span={'*'}
                    />

                    <InputForm
                        id={'lastname-signatory-manager'}
                        placeholder={'Фамилия'}
                        type={'text'}
                        label={'Фамилия подписанта'}
                        disabled={disabled}
                        onChange={(e) =>
                            handleInputSignatoryManagerChange('lastname', e)
                        }
                        value={dataSignatoryManager.lastname}
                    />
                    <InputForm
                        id={'name-signatory-manager'}
                        placeholder={'Имя подписанта'}
                        type={'text'}
                        label={'Имя подписанта'}
                        disabled={disabled}
                        onChange={(e) =>
                            handleInputSignatoryManagerChange('name', e)
                        }
                        value={dataSignatoryManager.name}
                    />
                    <InputForm
                        id={'surname-signatory-manager'}
                        placeholder={'Отчество подписанта'}
                        type={'text'}
                        label={'Отчество подписанта'}
                        disabled={disabled}
                        onChange={(e) =>
                            handleInputSignatoryManagerChange('surname', e)
                        }
                        value={dataSignatoryManager.surname}
                    />
                    <InputPhone
                        name={'phone-signatory-manager'}
                        id={'phone-signatory-manager'}
                        label={'Телефон подписанта'}
                        placeholder={'+7 (999) 999 99 99'}
                        disabled={disabled}
                        onChange={(e) =>
                            handleInputSignatoryManagerChange('phone', e)
                        }
                        value={dataSignatoryManager.phone}
                    />
                    <InputForm
                        id={'mail-signatory-manager'}
                        placeholder={'E-Mail подписанта'}
                        type={'email'}
                        label={'Email подписанта'}
                        disabled={disabled}
                        onChange={(e) =>
                            handleInputSignatoryManagerChange('email', e)
                        }
                        value={dataSignatoryManager.email}
                    />
                    <p className={'text-red-600 text-xs pl-1 h-12 block mt-2'}>
                        * Будьте внимательны при заполнении -данные используется
                        для подписания договора оферты и получения доступа к
                        личному кабинету
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ManagerDetails
