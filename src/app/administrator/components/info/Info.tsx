import React from 'react';
import Card from "@/app/administrator/components/info/Card";

const Info = () => {
    return (
        <div className={'grid grid-cols-2 gap-3 px-3'}>
            <Card text={'Не подписали договор оферты'} count={'741'} percent={'9%'} link={''}/>
            <Card text={'Не закупают ни у одного дистрибьютора'} count={'741'} percent={'9%'} link={''}/>
        </div>
    );
};

export default Info;