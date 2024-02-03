import React from 'react';
import Title from "@/app/questionnaire/create-a-request/components/Title";
import {cn} from "@/lib/utils";
import {Card} from "@/components/ui/card";
import InputForm from "@/app/questionnaire/create-a-request/components/InputForm";

const DistributorEmployee = () => {
    return (
        <>
            <Title text={'Сотрудник дистрибьютора'} />
             <div className={cn('mt-4 grid grid-cols-2 gap-5 px-1')}>
                 <InputForm id={'lastname-employee'} placeholder={'Фамилия'} type={'text'} label={'Фамилия'}/>
                 <InputForm id={'name-employee'} placeholder={'Имя'} type={'text'} label={'Имя'}/>
                 <InputForm id={'surname-employee'} placeholder={'Отчество'} type={'text'} label={'Отчество'}/>
                 <InputForm id={'phone-employee'} placeholder={'Контактный телефон'} type={'tel'} label={'Контактный телефон'}/>
                 <InputForm id={'mail-employee'} placeholder={'E-Mail'} type={'email'} label={'E-Mail'}/>
             </div>
        </>
    );
};

export default DistributorEmployee;