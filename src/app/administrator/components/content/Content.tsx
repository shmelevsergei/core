'use client'
import React, {useEffect, useState} from 'react';
import Card from "@/app/administrator/components/content/Card";
import {anketaOborot} from "@/actions/anketa_oborot";
import {formattedNumber} from "@/lib/formatNumber";
import {useAdministratorState} from "@/app/administrator/store/administrator.context";

const Content = () => {
    const {state} = useAdministratorState()
    const [oborot, setOborot] = useState(0)

    const fetchAnketaOborot = async () => {
        const startDate = state.currentDate?.from;
        const endDate = state.currentDate?.to;

        // Проверяем, что startDate и endDate определены
        if (startDate && endDate) {
            // Форматируем и кодируем параметры
            const formattedStartDate = encodeURIComponent(startDate.toISOString());
            const formattedEndDate = encodeURIComponent(endDate.toISOString());

            // Формируем URL с параметрами
            const url = `/api/administrator?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;

            // Отправляем запрос
            const response = await fetch(url);
            setOborot(await response.json())
            // const data = await response.json();

        } else {
            console.error("startDate and endDate must be defined");
        }
    };

    useEffect(() => {
        fetchAnketaOborot().then(() => {
            console.log('change date')
        })

    },[state.currentDate])


    const formattedOborot = formattedNumber(Math.round(oborot))

    return (
        <div className={'grid grid-cols-3 gap-y-3 gap-x-4 justify-center items-center px-3'}>
            <Card text={'Всего, руб. (динамика)'} count={formattedOborot} percent={'+-40%'} />
            <Card text={'Средняя закупка на 1 СТО, руб. (динамика)'} count={'455 000'} percent={'-+15%'} />
            <Card text={'Средняя закупка на 1 СТО, шт. (динамика)'} count={'455 000'} percent={'-+15%'} />
            <Card text={'Кол-во СТО с закупкой'} count={'3 478'} percent={'78%'} />
            <Card text={'Средняя закупка на 1 подъемник, руб. (динамика)'} count={'81 967'} percent={'-+15%'} />
            <Card text={'Средняя закупка на 1 подъемник, шт. (динамика)'} count={'685'} percent={'-+15%'} />
        </div>

    );
};

export default Content;