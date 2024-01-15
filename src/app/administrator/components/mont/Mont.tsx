'use client'
import React from "react";
import { TESelect } from "tw-elements-react";
import {montes} from "@/app/administrator/components/mont/montes";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

type Data = {
    text: string,
    value: number
}
const SelectBasicExample = () => {
    const data:Data[] = montes


    return (
        <div className="ml-auto">
            <Select>
                <SelectTrigger className="w-max">
                    <SelectValue placeholder="ВЫБРАТЬ ПЕРИОД" />
                </SelectTrigger>
                <SelectContent>
                    {
                        data.map(item => (
                            <SelectItem key={item.value} value={item.text}>{item.text}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>

        </div>
    );
}
export default SelectBasicExample