'use client'
import React, {useEffect, useState} from 'react';
import {fetchAnketaBase, fetchAnketaBaseNews} from "@/lib/routs/fetchAnketaBase";
import {IAnketaBaseRepository} from "@/repository/anketaBase.repository";
import {fetchAnketaDogovor} from "@/lib/routs/fetchAnketaDogovor";
import {IAnketaDogovorRepository} from "@/repository/anketaDogovor.repository";
import { useAdministratorState } from "@/app/administrator/store/administrator.context";
import {formattedNumber} from "@/lib/formulas/formatNumber";




const AllBrands = () => {
    const [allBrands, setAllBrands] = useState<IAnketaBaseRepository[]>([])
    const [newsBrands, setNewsBrands] = useState<IAnketaBaseRepository[]>([])
    const [dogovorTrue, setDogovorTrue] = useState<IAnketaDogovorRepository[]>([])
    const { setState} = useAdministratorState()

    const fetchAllBrands = async () => {
        const response = await fetchAnketaBase();

        const data = await JSON.parse(response);

        setState(prevState => ({
            ...prevState,
            totalSto: data.length
        }))
        setAllBrands(data);
    }

    const fetchAllBrandsNews = async () => {
        const response = await fetchAnketaBaseNews();

        const data = await JSON.parse(response);
        setNewsBrands(data);
    }
    const fetchDogovorTrue = async () => {
        const response = await fetchAnketaDogovor();

        const data = await JSON.parse(response);
        setState(prevState => ({
            ...prevState,
            dogovorTrue: data.length
        }))
        setDogovorTrue(data);
    }

    useEffect(() => {
        fetchAllBrands()
        fetchAllBrandsNews()
        fetchDogovorTrue()

    },[])

    return (
        <div className={'text-[#020944] text-xl flex flex-col gap-3'}>
            <p className={' font-extrabold'}>ВСЕГО СТО - {formattedNumber(allBrands?.length)} (новички - {formattedNumber(newsBrands?.length)})</p>
            <p className={'font-medium'}>
                Оферта подписана
                - {formattedNumber(dogovorTrue.length)} ({((dogovorTrue.length / allBrands.length) * 100).toFixed(1)}%) </p>
            <p className={'font-medium'}>Среднее кол-во подъемников - {
               ((allBrands.reduce((acc, item) => {
                    return acc + item.ABA_REMZONA_QTY
                },0)) / allBrands.length).toFixed(2)
            }</p>
        </div>

    )
};

export default AllBrands;