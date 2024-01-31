'use client'
import React, {useEffect, useState} from 'react';
import UiCard from "@/app/reports/components/content/ui-card";
import {useAdministratorState} from "@/app/reports/store/administrator.context";
import {fetchAnketaOborotFromDate} from "@/server/routs/fetchAnketaOborot";
import {formattedNumber} from "@/lib/formulas/formatNumber";

const Oborot = () => {

    const {state, setState} = useAdministratorState()
    const [oborot, setOborot] = useState(0)
    const [prevOborot, setPrevOborot] = useState(0)
    const [percent, setPercent] = useState(0)

    const startDate = state.currentDate?.from;
    const endDate = state.currentDate?.to;
    const fetchOborot = async () => {
        const result = await fetchAnketaOborotFromDate({startDate, endDate})

        setState(prevState => ({
            ...prevState,
            oborot: result

        }))
        setOborot(result)
    }


    const fetchPreviousOborot = async () => {
        if (startDate && endDate) {

            const startDateCopy = new Date(startDate);
            const endDateCopy = new Date(endDate);

            startDateCopy.setMonth(startDateCopy.getMonth() - 1);
            endDateCopy.setMonth(endDateCopy.getMonth() - 1);

            const result = await fetchAnketaOborotFromDate({
                startDate: startDateCopy,
                endDate: endDateCopy,
            });
            setState(prevState => ({
                ...prevState,
                prevOborot: result

            }))
            setPrevOborot(result);
        } else {
            console.error("startDate and endDate must be defined");
        }
    };

    useEffect(() => {

        if(state.updateContentInfo) {
            fetchPreviousOborot()
            fetchOborot()
        }

    },[state.updateContentInfo])

    useEffect(() => {
        if (prevOborot && oborot) {
            setPercent((oborot - prevOborot) / prevOborot * 100)
        }
    }, [prevOborot, oborot])

    return (
        <UiCard text={'Всего, руб. (динамика)'} count={formattedNumber(Math.round(oborot))} percent={percent} />
    );
};

export default Oborot;