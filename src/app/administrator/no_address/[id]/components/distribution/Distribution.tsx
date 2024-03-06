import React from 'react'

interface IDistribution {
    title: string
    addresses?: String[] | null
}

const Distribution = ({ title, addresses }: IDistribution) => {
    return (
        <div>
            <h2 className={'text-xl font-extrabold'}>{title}</h2>
            <div className={'flex flex-col gap-2 mt-4'}>
                {addresses?.map((address, idx) => (
                    <button
                        key={idx}
                        className={
                            'min-h-5 shadow-base bg-[#E7E7E7] text-left py-0.5 px-2'
                        }
                    >
                        {address}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Distribution
