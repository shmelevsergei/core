'use client'

import React, {useEffect, useState} from 'react';
import Card from './Card';
import {fetchAnketaOborotPurchaseStoCount, fetchAnketaOborotPurchaseStoMoney} from "@/lib/routs/fetchAnketaOborot";
import { useAdministratorState } from '../../store/administrator.context';

const PurchasePerCount = () => {
    const {state} = useAdministratorState()
    const [perCount, setPerCount] = useState(0)
    const [prevPerCount, setPrevPerCount] = useState(0)

    const startDate = state?.currentDate?.from;
    const endDate = state?.currentDate?.to;

    useEffect(() => {
        if (state.updateContentInfo) {
            const fetchPurchase = async () => {
                const result = await fetchAnketaOborotPurchaseStoMoney({startDate, endDate})

                const data = await JSON.parse(result);

                setPerCount(data)
            }

            const fetchPrevPurchase = async () => {
                if (startDate && endDate) {

                    const startDateCopy = new Date(startDate);
                    const endDateCopy = new Date(endDate);

                    startDateCopy.setMonth(startDateCopy.getMonth() - 1);
                    endDateCopy.setMonth(endDateCopy.getMonth() - 1);

                    const result = await fetchAnketaOborotPurchaseStoMoney({
                        startDate: startDateCopy,
                        endDate: endDateCopy,
                    });
                    const data = await JSON.parse(result);

                    setPrevPerCount(data);
                } else {
                    console.error("startDate and endDate must be defined");
                }
            };
            fetchPrevPurchase()
            fetchPurchase()
        }


    }, [state.updateContentInfo])

    return (
        <Card text={'Средняя закупка на 1 СТО, шт. (динамика)'} count={perCount} percent={0} />
    );
};

export default PurchasePerCount;