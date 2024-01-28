'use client'

import React, {useEffect} from 'react';
import Card from "@/app/administrator/components/info/Card";
import {useAdministratorState} from "@/app/administrator/store/administrator.context";

const OfferHasNotSing = () => {
    const [count, setCount] = React.useState(0);
    const [percent, setPercent] = React.useState('');
    const {state} = useAdministratorState()

    useEffect(() => {
        setCount(state.totalSto - state.dogovorTrue)
        setPercent((100 -((state.dogovorTrue / state.totalSto) * 100)).toFixed(1))

    }, [state.totalSto, state.dogovorTrue])

    return (
        <Card text={'Не подписали договор оферты'} count={count} percent={+percent} link={''}/>
    );
};

export default OfferHasNotSing;