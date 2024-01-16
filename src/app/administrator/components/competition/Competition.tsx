import React from 'react';

const Competition = () => {
    return (
        <div className={'p-3 bg-[#F6F6F6] shadow-base'}>
            <h2 className={'text-sm font-bold text-[#000]'}>УЧАСТИЕ В ЕЖЕМЕСЯЧНОМ СОРЕВНОВАНИЕ</h2>
            <div className={'text-[#FFFDFD] flex flex-col gap-2.5'}>
                <div className={'h-10 w-full bg-[#6F78A9] flex justify-between items-center pr-7 pl-3'}>
                    <span className={'text-[15px]'}>СТО</span> <span className={'text-2xl'}>250 (6%)</span>
                </div>
                <div className={'h-10 w-full bg-[#8FBA84] flex justify-between items-center pr-7 pl-3'}>
                    <span className={'text-[15px]'}>РУКОВОДИТЕЛЬ</span> <span className={'text-2xl'}>1</span>
                </div>
                <div className={'h-10 w-full bg-[#FE6E43] flex justify-between items-center pr-7 pl-3'}>
                    <span className={'text-[15px]'}>МАСТЕР-КОНСУЛЬТАНТ</span> <span className={'text-2xl'}>0</span>
                </div>
            </div>


        </div>
    );
};

export default Competition;