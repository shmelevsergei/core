'use client'

import React, {useEffect} from 'react';
import {useAdministratorState} from "@/app/reports/store/administrator.context";
import UiCard from "@/app/reports/components/info/ui-card";

const OfferHasNotSing = () => {
    const [count, setCount] = React.useState(0);
    const [percent, setPercent] = React.useState('');
    const {state} = useAdministratorState()

    useEffect(() => {
        setCount(state.totalSto - state.dogovorTrue)
        setPercent((100 -((state.dogovorTrue / state.totalSto) * 100)).toFixed(1))

    }, [state.totalSto, state.dogovorTrue])

    return (
        <UiCard text={'Не подписали договор оферты'} count={count} percent={+percent} link={''} />
    );
};

export default OfferHasNotSing;