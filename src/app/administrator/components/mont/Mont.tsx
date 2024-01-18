'use client'
import React from "react";
import {montes} from "@/app/administrator/components/mont/montes";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import DatePickerWithRange from "@/components/ui/DataRangePicker";

type Data = {
    text: string,
    value: number
}
const Mont = () => {
    const data:Data[] = montes


    return (
        <div className="ml-auto flex items-center gap-1">
            <p className={'font-black text-[#000] uppercase'}>ВЫБРАТЬ ПЕРИОД: </p>
            <DatePickerWithRange/>

        </div>
    );
}
export default Mont