import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export default async function Home() {

  const dats = await client.gA_ANKETA_BASE.findMany();

  console.log(dats[1])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
