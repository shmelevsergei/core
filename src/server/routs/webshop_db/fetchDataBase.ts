import { IAnketaBaseRepository } from '@/repository/anketaBase.repository'
import { IAnketaDogovorRepository } from '@/repository/anketaDogovor.repository'

const fetchAnketaBase = async (): Promise<
    IAnketaBaseRepository[] | undefined
> => {
    const url: string = `/api/administrator/anketa_base`
    try {
        const response = await fetch(url)
        if (response.ok) {
            return JSON.parse(await response.json())
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`)
        }
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

const fetchAnketaBaseNews = async (): Promise<
    IAnketaBaseRepository[] | undefined
> => {
    const url: string = `/api/administrator/anketa_base_news`
    try {
        const response = await fetch(url)
        if (response.ok) {
            return JSON.parse(await response.json())
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`)
        }
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

const fetchAnketaDogovorTrue = async (): Promise<
    IAnketaDogovorRepository[] | undefined
> => {
    const url = `/api/administrator/anketa_dogovor_true`

    try {
        const response = await fetch(url)
        if (response.ok) {
            return JSON.parse(await response.json())
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`)
        }
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

export const fetchDataBase = async () => {
    const allStoData = await fetchAnketaBase()
    const newcomersData = await fetchAnketaBaseNews()
    const offerSignedData = await fetchAnketaDogovorTrue()
    const averageLiftsData = allStoData?.reduce(
        (acc, item) => acc + item.ABA_REMZONA_QTY,
        0
    )

    const data = {
        allSto: allStoData,
        newcomers: newcomersData,
        offerSigned: offerSignedData,
        averageLifts:
            averageLiftsData && allStoData
                ? averageLiftsData / allStoData?.length
                : 0,
    }

    return data
}
