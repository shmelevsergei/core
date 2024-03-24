import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { formateDate } from '@/server/lib/functions'
import { getQuestionnaire } from '@/app/shared/actions/questionnaireAction'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Page = async () => {
    const data = await getQuestionnaire()

    const sentData = data.filter((item) => item.status === 'rejected')

    return (
        <div>
            <h2 className="text-2xl text-center font-bold pt-5">
                Отклонённые анкеты
            </h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Дистрибьютер</TableHead>
                        <TableHead>Название СТО</TableHead>
                        <TableHead>Дата отправки</TableHead>
                        <TableHead className="text-right">Подробнее</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sentData.map((item, idx) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">
                                {idx + 1}
                            </TableCell>
                            <TableCell>{item.distributor}</TableCell>
                            <TableCell>{item.data_sto?.name}</TableCell>
                            <TableCell>
                                {formateDate(item.created_date)}
                            </TableCell>
                            <TableCell className="text-right">
                                <Button asChild>
                                    <Link
                                        href={`/administrator/questionnaire/${+item.id}`}
                                    >
                                        Подробнее
                                    </Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Page
