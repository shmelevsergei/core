import React from 'react'
import { getQuestionnaire } from '../fetchAction'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { formateDate } from '@/server/lib/functions'

const Page = async () => {
    const data = await getQuestionnaire()

    const sentData = data.filter((item) => item.status === 'sent')

    return (
        <div>
            <h2 className="text-2xl text-center font-bold">Анкеты в очереди</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Название СТО</TableHead>
                        <TableHead className="text-right">
                            Дата отправки
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sentData.map((item, idx) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">
                                {idx + 1}
                            </TableCell>
                            <TableCell>{item.data_sto?.name}</TableCell>
                            <TableCell className="text-right">
                                {formateDate(item.created_date)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Page
