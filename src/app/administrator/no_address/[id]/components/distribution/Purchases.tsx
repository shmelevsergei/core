import React from 'react';

interface IPurchases {
    text: string | null
}

const Purchases = ({text}: IPurchases) => {
    return (
        <div className={'w-[200px] min-h-5 py-0.5 px-1 bg-[#E7E7E7] shadow-base'}>
            {text}
        </div>
    );
};

export default Purchases;