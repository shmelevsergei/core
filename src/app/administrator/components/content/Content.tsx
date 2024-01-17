import React from 'react';
import Card from "@/app/administrator/components/content/Card";

const Content = () => {
    return (
        <div className={'grid grid-cols-3 gap-y-3 gap-x-4 justify-center items-center px-3'}>
            <Card text={'Всего, руб. (динамика)'} count={'1 250 356'} percent={'+-40%'} />
            <Card text={'Средняя закупка на 1 СТО, руб. (динамика)'} count={'455 000'} percent={'-+15%'} />
            <Card text={'Средняя закупка на 1 СТО, шт. (динамика)'} count={'455 000'} percent={'-+15%'} />
            <Card text={'Кол-во СТО с закупкой'} count={'3 478'} percent={'78%'} />
            <Card text={'Средняя закупка на 1 подъемник, руб. (динамика)'} count={'81 967'} percent={'-+15%'} />
            <Card text={'Средняя закупка на 1 подъемник, шт. (динамика)'} count={'685'} percent={'-+15%'} />
        </div>

    );
};

export default Content;