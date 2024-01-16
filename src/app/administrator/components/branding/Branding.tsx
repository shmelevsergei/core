import React from 'react';

const Branding = () => {
    return (
        <div className={'text-sm bg-[#F6F6F6] shadow-base p-3'}>
            <h2 className={'text-sm uppercase font-semibold'}>БРЕНДИРОВАНИЕ</h2>
            <p className={'mt-8 flex gap-4'}>
                <span className={'w-[180px] block'}>Брендировано </span><span className={'font-semibold'}>741 (17%)</span>
            </p>
            <div className={'mt-8'}>
                <p className={'text-sm flex gap-4'}><span className={'w-[180px] block'}>Частично брендировано</span> <span className={'font-semibold'}>82 (4,8%)</span></p>
                <p className={'text-sm flex gap-4'}><span className={'w-[180px] block italic text-right'}>короб</span> <span className={'font-semibold'}>69 (1,6%)</span></p>
                <p className={'text-sm flex gap-4'}><span className={'w-[180px] block italic text-right'}>плакат</span> <span className={'font-semibold'}>143 (3,2%)</span></p>
            </div>
        </div>
    );
};

export default Branding;