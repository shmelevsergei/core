'use client'
import React, {useState} from "react";
import DatePickerWithRange from "@/components/ui/DataRangePicker";
import {Button} from "@/components/ui/button";
import {useAdministratorState} from "@/app/administrator/store/administrator.context";

const Mont = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const {setState} =useAdministratorState();

    const clickHandler = () => {
        setState(prevState => ({
            ...prevState,
            updateContentInfo: true
        }))
        if (!isButtonDisabled) {
            setIsButtonDisabled(true);

            setTimeout(() => {
                setIsButtonDisabled(false);
                setState(prevState => ({
                    ...prevState,
                    updateContentInfo: false
                }))

            }, 2000);
        }
    }

    return (
        <div className="ml-auto flex items-center gap-1">
            <DatePickerWithRange />
            <Button className={''} onClick={() => clickHandler()} disabled={isButtonDisabled}>Выбрать период</Button>
        </div>
    );
}
export default Mont