import React from 'react'
import Info from '@/app/administrator/no_address/[id]/components/info/Info'
import Distribution from '@/app/administrator/no_address/[id]/components/distribution/Distribution'
import Purchases from '@/app/administrator/no_address/[id]/components/distribution/Purchases'

const Page = ({ params }: { params: { id: string } }) => {
    return (
        <main className={'p-5 text-[#020944]'}>
            <Info id={params.id} />

            <div className={'flex w-full gap-10'}>
                <div className={'mt-4 flex flex-col gap-4 w-full'}>
                    <Distribution
                        title={'Авто-Евро'}
                        addresses={[' ', ' ', ' ']}
                    />
                    <Distribution
                        title={'АВТОРУСЬ'}
                        addresses={[' ', ' ', ' ']}
                    />
                    <Distribution
                        title={'Аркона'}
                        addresses={[' ', ' ', ' ']}
                    />
                    <Distribution
                        title={'РОССКО'}
                        addresses={[' ', ' ', ' ']}
                    />
                </div>

                <div className={'shrink-0 mt-4'}>
                    <h2 className={'text-xl font-extrabold'}>
                        Объем закупок, руб.
                    </h2>
                    <div className={'flex flex-col gap-11'}>
                        <div className={'mt-4 flex flex-col gap-2'}>
                            <Purchases text={''} />
                            <Purchases text={''} />
                            <Purchases text={''} />
                        </div>
                        <div className={'mt-4 flex flex-col gap-2'}>
                            <Purchases text={''} />
                            <Purchases text={''} />
                            <Purchases text={''} />
                        </div>
                        <div className={'mt-4 flex flex-col gap-2'}>
                            <Purchases text={''} />
                            <Purchases text={''} />
                            <Purchases text={''} />
                        </div>
                        <div className={'mt-4 flex flex-col gap-2'}>
                            <Purchases text={''} />
                            <Purchases text={''} />
                            <Purchases text={''} />
                        </div>
                    </div>

                    <button
                        className={
                            'text-white text-xl uppercase font-extrabold bg-[#056C22] shadow-base py-3 min-w-[200px] mt-10'
                        }
                    >
                        ПРИМЕНИТЬ
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Page
