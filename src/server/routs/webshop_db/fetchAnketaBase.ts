import { IAnketaBaseRepository } from '@/repository/anketaBase.repository'

export const fetchAnketaBase = async (): Promise<
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

export const fetchAnketaBaseNews = async (): Promise<
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
