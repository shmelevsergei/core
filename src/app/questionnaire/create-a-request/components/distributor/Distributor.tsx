import React from 'react';
import Title from "@/app/questionnaire/create-a-request/components/Title";
import InputForm from "@/app/questionnaire/create-a-request/components/InputForm";
import {Card} from "@/components/ui/card";
import {cn} from "@/lib/utils";

const Distributor = () => {
    return (
        <>
            <Title text={'Дистрибьютер'} />
            <Card className={cn('p-4 mt-4 h-full')}>
                <InputForm id={'name'} placeholder={'Название'} type={'text'} label={'Название'}/>
            </Card>

        </>
    );
};

export default Distributor;