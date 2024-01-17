import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {dataTable, DatsTable} from "@/app/administrator/no_address/components/table/datsTable";
import Link from "next/link";



const DataTable = () => {
    const data:DatsTable[] = dataTable
    return (

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">№ п.п</TableHead>
                        <TableHead>Наименование</TableHead>
                        <TableHead>Идентификатор</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data.map(({name, id}, idx) => (
                            <TableRow key={id}>
                                <TableCell className="font-medium">{idx + 1}</TableCell>
                                <TableCell>{name}</TableCell>
                                <TableCell>
                                    <Link href={`/administrator/no_address/${id}`}>{id}</Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>


    );
};

export default DataTable;