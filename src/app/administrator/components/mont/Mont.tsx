'use client'
import React, {useState} from "react";
import DatePickerWithRange from "@/components/ui/DataRangePicker";
import {Button} from "@/components/ui/button";

const Mont = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [changeDate, setChangeDate] = useState(false)

    const clickHandler = () => {
        if (!isButtonDisabled) {
            setIsButtonDisabled(true);

            setTimeout(() => {
                setIsButtonDisabled(false);
                setChangeDate(false);
            }, 2000);
        }
        if (!changeDate) {
            setChangeDate(true);
        }
    }

    return (
        <div className="ml-auto flex items-center gap-1">
            <DatePickerWithRange changeDate={changeDate}/>
            <Button className={''} onClick={() => clickHandler()} disabled={isButtonDisabled}>Выбрать период</Button>
        </div>
    );
}
export default Mont