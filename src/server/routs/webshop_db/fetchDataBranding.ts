import { IAnketaBrandingRepository } from '@/repository/anketaBranding.repository'

const fetchAnketaBranding = async (): Promise<
    IAnketaBrandingRepository[] | undefined
> => {
    const url: string = `/api/administrator/anketa_branding`
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

export const fetchDataBranding = async () => {
    const dataBranding = await fetchAnketaBranding()

    const allBranded = dataBranding?.filter((data) => data.ABR_STATUS === true)

    const boxBranded = dataBranding?.filter(
        (data) =>
            data.ABR_KOROB_STATUS === true && data.ABR_VYVESKA_STATUS === false
    )
    const posterBranded = dataBranding?.filter(
        (data) =>
            data.ABR_VYVESKA_STATUS === true && data.ABR_KOROB_STATUS === false
    )

    const partialBranded =
        (boxBranded?.length || 0) + (posterBranded?.length || 0)

    const data = {
        allBranded: allBranded?.length || 0,
        partialBranded: partialBranded,
        boxBranded: boxBranded?.length || 0,
        posterBranded: posterBranded?.length || 0,
    }

    return data
}
