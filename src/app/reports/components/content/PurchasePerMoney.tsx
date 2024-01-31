'use client'
import React, {useEffect, useState} from 'react';
import UiCard from "./ui-card";
import {useAdministratorState} from "@/app/reports/store/administrator.context";
import {formattedNumber} from "@/lib/formulas/formatNumber";



const PurchasePerMoney = () => {
    const {state} = useAdministratorState()
    const [perMoney, setPerMoney] = useState(0)
    const [prevPerMoney, setPrevPerMoney] = useState(0)
    const [percent, setPercent] = useState(0)
    const [totalMoney, setTotalMoney] = useState(0)

    useEffect(() => {
        setPerMoney(state?.oborot / state?.totalSto)
        setPrevPerMoney(state?.prevOborot / state?.totalSto)
    }, [state?.oborot, state?.prevOborot, state?.totalSto])

    useEffect(() => {
        if (prevPerMoney && perMoney) {
            setPercent((perMoney - prevPerMoney) / prevPerMoney * 100)
            setTotalMoney(Math.round(perMoney))
        }
    }, [prevPerMoney, perMoney])

    return (
        <UiCard text={'Средняя закупка на 1 СТО, руб. (динамика)'} count={formattedNumber(totalMoney) } percent={percent} />
    );
};

export default PurchasePerMoney;