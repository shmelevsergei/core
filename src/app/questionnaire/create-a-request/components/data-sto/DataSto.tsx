import React from 'react';
import Title from "@/app/questionnaire/create-a-request/components/Title";
import {Card} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import InputForm from "@/app/questionnaire/create-a-request/components/InputForm";
import {Separator} from "@/components/ui/separator";
import {Label} from "@/components/ui/label";
import AddInn from "@/app/questionnaire/create-a-request/components/AddInn";

const DataSto = () => {
    return (
        <>
           <Title text={'Данные СТО'} />
            <Card className={cn('p-4 mt-4 overflow-y-auto')}>
                <div className={'grid grid-cols-2 gap-5'}>
                    <InputForm id={'name-sto'} placeholder={'Название СТО'} type={'text'} label={'Название СТО'}/>
                    <InputForm id={'city-sto'} placeholder={'Город'} type={'text'} label={'Город'}/>
                    <InputForm id={'area-sto'} placeholder={'Область'} type={'text'} label={'Область'}/>
                    <InputForm id={'address-sto'} placeholder={'Адрес СТО'} type={'text'} label={'Адрес СТО'}/>
                    <InputForm id={'code-avtoevro-sto'} placeholder={'Код клиента АВТО-ЕВРО'} type={'text'} label={'Код клиента АВТО-ЕВРО'}/>
                    <InputForm id={'code-avtorus-sto'} placeholder={'Код клиента АВТОРУСЬ'} type={'text'} label={'Код клиента АВТОРУСЬ'}/>
                    <InputForm id={'code-rossko-sto'} placeholder={'Код клиента РОССКО'} type={'text'} label={'Код клиента РОССКО'}/>
                </div>
                <Separator className={'my-5'}/>
                <AddInn />
            </Card>
        </>
    );
};

export default DataSto;