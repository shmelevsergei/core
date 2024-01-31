import React from 'react';
import Title from "@/app/questionnaire/create-a-request/components/Title";
import {Card} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import InputForm from "@/app/questionnaire/create-a-request/components/InputForm";

const ManagerDetails = () => {
    return (
        <div>
           <Title text={'Данные руководителя'} />
            <Card className={cn('grid grid-cols-3 gap-4 p-4 mt-4')}>
                <InputForm id={'lastname-manager'} placeholder={'Фамилия'} type={'text'} label={'Фамилия'}/>
                <InputForm id={'name-manager'} placeholder={'Имя'} type={'text'} label={'Имя'}/>
                <InputForm id={'surname-manager'} placeholder={'Отчество'} type={'text'} label={'Отчество'}/>
                <InputForm id={'phone-manager'} placeholder={'Tелефон'} type={'tel'} label={'Контактный телефон'}/>
                <InputForm id={'mail-manager'} placeholder={'E-Mail'} type={'email'} label={'Адрес электронной почты'}/>
                <InputForm id={'lastname-signatory-manager'} placeholder={'Фамилия'} type={'text'} label={'Фамилия подписанта'}/>
                <InputForm id={'name-signatory-manager'} placeholder={'Имя подписанта'} type={'text'} label={'Имя подписанта'}/>
                <InputForm id={'surname-signatory-manager'} placeholder={'Отчество подписанта'} type={'text'} label={'Отчество подписант'}/>
                <InputForm id={'phone-signatory-manager'} placeholder={'Телефон подписанта'} type={'tel'} label={'Телефон подписанта'}/>
                <InputForm id={'mail-signatory-manager'} placeholder={'E-Mail подписанта'} type={'email'} label={'Email подписанта'}/>

            </Card>
        </div>
    );
};

export default ManagerDetails;