import Link from "next/link";


import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()
export default async function Home() {

    const dats = await client.gA_ANKETA_BASE.findMany();

    console.log(dats[1])


    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*<Link href={'/administrator'}>ID: {dats}</Link>*/}
        <ul>
            {
                dats.map(data => (

                    <li key={data.ABA_ID}>
                        <p>ID: {data.ABA_ID}</p>
                        <p>INN: {data.ABA_INN}</p>
                        <p>PHONE: {data.ABA_PHONE}</p>
                    </li>
                ))
            }
        </ul>
    </main>
  )
}
