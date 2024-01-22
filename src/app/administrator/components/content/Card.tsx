
import React from 'react';

const Card = ({text, count, percent}: {text: string, count:string | number, percent:string}) => {
    return (
        <div className={'flex bg-[#F6F6F6] shadow-base h-24 w-full gap-6 text-[#000] px-3 items-center justify-self-center'}>
            <p className={'w-[125px] text-sm '}>{text}</p>
            <div className={'flex flex-col gap-2'}>
                <p className={'text-2xl leading-[100%]'}>{count}</p>
                <p className={'text-sm leading-[100%]'}>({percent})</p>
            </div>
        </div>
    );
};

export default Card;