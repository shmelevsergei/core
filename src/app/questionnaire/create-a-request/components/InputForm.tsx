'use client'
import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Card} from "@/components/ui/card";
const InputForm = ({id, label, placeholder, type} : {id:string, label?:string, placeholder:string, type:string}) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={id}>{label}</Label>
            <Input type={type} id={id} placeholder={placeholder} />



        </div>
    );
};

export default InputForm;