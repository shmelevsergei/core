import { IAnketaScoresRepository } from '@/repository/anketaScores.repository'

const fetchAnketaScores = async (): Promise<
    IAnketaScoresRepository[] | undefined
> => {
    const url: string = `/api/administrator/anketa_scores`
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

export const fetchDataScores = async () => {
    const dataScores = await fetchAnketaScores()

    const totalScores = dataScores?.reduce(
        (acc, data) => acc + data.ANS_SCORES,
        0
    )

    const data = {
        totalScores: totalScores || 0,
    }

    return data
}
