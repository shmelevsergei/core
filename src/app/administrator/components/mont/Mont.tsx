'use client'
import React from "react";
import { TESelect } from "tw-elements-react";
import {montes} from "@/app/administrator/components/mont/montes";

type Data = {
    text: string,
    value: number
}
const SelectBasicExample = () => {
    const data:Data[] = montes


    return (
        <div className="flex justify-center">
            <div className="relative mb-3 md:w-96 pt-5">
                <TESelect data={data} className={'border-none'}/>
            </div>
        </div>
    );
}
export default SelectBasicExample