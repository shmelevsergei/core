import React from 'react'
import { getQuestionnaire, getQuestionnaireByDistr } from '../../../shared/actions/questionnaireAction'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { formateDate } from '@/server/lib/functions'
import { getCookies } from '@/components/form/cookiesAction'
import { revalidatePath } from 'next/cache'

const Page = async () => {
    const distr = await getCookies()
    const data = await getQuestionnaireByDistr(distr?.name)

    const sentData = data.filter((item) => item.status === 'accepted')
    revalidatePath('/')

    return (
        <div>
            <h2 className="text-2xl text-center font-bold">
                Согласованные анкеты
            </h2>

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
                                {formateDate(item.updated_date)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Page
