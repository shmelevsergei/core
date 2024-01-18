import React from 'react';
import Card from "@/app/administrator/components/content/Card";
import {anketaOborot} from "@/api/anketa_oborot";
import {formattedNumber} from "@/lib/formatNumber";



const Content = async () => {

    const data = await anketaOborot.getAnketaOborot();

    const oborot = data.reduce((acc, item) => {
       return acc + item.ABO_OBOROT_ALL
    },0)



    const formattedOborot = formattedNumber(Math.round(oborot));

    console.log(formattedOborot);
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