import { IAnketaSorevnovanieRepository } from '@/repository/anketaSorevnovanie.repository'

const fetchAnketaSorevnovanie = async (): Promise<
    IAnketaSorevnovanieRepository[] | undefined
> => {
    const url: string = `/api/administrator/anketa_sorevnovanie`
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

export const fetchDataSorevnovanie = async () => {
    const dataSorevnovanie = await fetchAnketaSorevnovanie()

    const supervisorList = dataSorevnovanie?.filter((data) => {
        return data.ASR_DOLJNOST.toString() == 'Руководитель'
    })
    const masterConsultantList = dataSorevnovanie?.filter((data) => {
        return data.ASR_DOLJNOST.toString() == 'Мастер-консультант'
    })

    const data = {
        totalParticipants: dataSorevnovanie?.length || 0,
        masterConsultant: masterConsultantList?.length || 0,
        supervisor: supervisorList?.length || 0,
    }

    return data
}
