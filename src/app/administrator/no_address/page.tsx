import React from 'react'
import DataTable from '@/app/administrator/reports/no_address/components/table/DataTable'

const Page = () => {
    return (
        <main className={'p-5 overflow-y-auto'}>
            <h2 className={'text-[#020944] font-extrabold text-xl'}>
                СТО без адреса (в выгрузке имеется адрес доставки, но он не
                выбран для расчета объема)
            </h2>
            <DataTable />
        </main>
    )
}

export default Page
