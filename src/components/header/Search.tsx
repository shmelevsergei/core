import React from 'react';
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

const Search = () => {
    return (
            <Input type={'text'} placeholder={'НАЙТИ СТО'} className={cn('mr-2 max-w-[250px]')}/>
        )
};

export default Search;