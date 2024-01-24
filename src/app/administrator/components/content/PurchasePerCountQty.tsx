'use client'
import React, {useEffect, useState} from 'react';
import Card from './Card';
import {useAdministratorState} from "@/app/administrator/store/administrator.context";
import {formattedNumber} from "@/lib/formulas/formatNumber";

const PurchasePerCountQty = () => {
    const {state} = useAdministratorState()
    const [perCountQty, setPerCountQty] = useState(0)
    const [prevPerCountQty, setPrevPerCountQty] = useState(0)
    const [percent, setPercent] = useState(0)
    const [totalCountQty, setTotalCountQty] = useState(0)

    useEffect(() => {
        setPerCountQty(state.purchaseStoCount / state.remzonaQty)
        setPrevPerCountQty(state.prevPurchaseStoCount / state.remzonaQty)
    },[state.purchaseStoCount, state.prevPurchaseStoCount, state.remzonaQty])

    useEffect(() => {
        if (prevPerCountQty && perCountQty) {
            setPercent((perCountQty - prevPerCountQty) / prevPerCountQty * 100)
            setTotalCountQty(Math.round(perCountQty))
        }

    }, [prevPerCountQty, perCountQty])

    return (
        <Card text={'Средняя закупка на 1 подъемник, шт. (динамика)'} count={formattedNumber(totalCountQty)} percent={percent} />
    );
};

export default PurchasePerCountQty;