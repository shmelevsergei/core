export const fetchAnketaOborotFromDate = async ({
    startDate,
    endDate,
}: {
    startDate: Date | undefined
    endDate: Date | undefined
}) => {
    // Проверяем, что startDate и endDate определены
    if (startDate && endDate) {
        // Форматируем и кодируем параметры
        const formattedStartDate = encodeURIComponent(startDate.toISOString())
        const formattedEndDate = encodeURIComponent(endDate.toISOString())

        // Формируем URL с параметрами
        const url = `/api/administrator/anketa_oborot?startDate=${formattedStartDate}&endDate=${formattedEndDate}`

        try {
            // Отправляем запрос
            const response = await fetch(url)
            if (response.ok) {
                return await response.json()
            } else {
                console.error(
                    `Error: ${response.status} - ${response.statusText}`
                )
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    } else {
        console.error('startDate and endDate must be defined')
    }
}

export const fetchAnketaOborotPurchaseStoMoney = async ({
    startDate,
    endDate,
}: {
    startDate: Date | undefined
    endDate: Date | undefined
}) => {
    // const startDate = stateDateFrom;
    // const endDate = stateDateTo;

    // Проверяем, что startDate и endDate определены
    if (startDate && endDate) {
        // Форматируем и кодируем параметры
        const formattedStartDate = encodeURIComponent(startDate.toISOString())
        const formattedEndDate = encodeURIComponent(endDate.toISOString())

        // Формируем URL с параметрами
        const url = `/api/administrator/anketa_oborot_purchase_sto_money?startDate=${formattedStartDate}&endDate=${formattedEndDate}`

        try {
            // Отправляем запрос
            const response = await fetch(url)
            if (response.ok) {
                return await response.json()
            } else {
                console.error(
                    `Error: ${response.status} - ${response.statusText}`
                )
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    } else {
        console.error('startDate and endDate must be defined')
    }
}

export const fetchAnketaOborotPurchaseStoCount = async ({
    startDate,
    endDate,
}: {
    startDate: Date | undefined
    endDate: Date | undefined
}) => {
    // Проверяем, что startDate и endDate определены
    if (startDate && endDate) {
        // Форматируем и кодируем параметры
        const formattedStartDate = encodeURIComponent(startDate.toISOString())
        const formattedEndDate = encodeURIComponent(endDate.toISOString())

        // Формируем URL с параметрами
        const url = `/api/administrator/anketa_oborot_purchase_sto_count?startDate=${formattedStartDate}&endDate=${formattedEndDate}`

        try {
            // Отправляем запрос
            const response = await fetch(url)
            if (response.ok) {
                return await response.json()
            } else {
                console.error(
                    `Error: ${response.status} - ${response.statusText}`
                )
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    } else {
        console.error('startDate and endDate must be defined')
    }
}

export const fetchAnketaOborotRemzonaQty = async ({
    startDate,
    endDate,
}: {
    startDate: Date | undefined
    endDate: Date | undefined
}) => {
    // Проверяем, что startDate и endDate определены
    if (startDate && endDate) {
        // Форматируем и кодируем параметры
        const formattedStartDate = encodeURIComponent(startDate.toISOString())
        const formattedEndDate = encodeURIComponent(endDate.toISOString())

        // Формируем URL с параметрами
        const url = `/api/administrator/anketa_oborot_remzona_qty?startDate=${formattedStartDate}&endDate=${formattedEndDate}`

        try {
            // Отправляем запрос
            const response = await fetch(url)
            if (response.ok) {
                return await response.json()
            } else {
                console.error(
                    `Error: ${response.status} - ${response.statusText}`
                )
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    } else {
        console.error('startDate and endDate must be defined')
    }
}

export const fetchAnketaOborotNotByDistributor = async ({
    startDate,
    endDate,
}: {
    startDate: Date | undefined
    endDate: Date | undefined
}) => {
    if (startDate && endDate) {
        // Форматируем и кодируем параметры
        const formattedStartDate = encodeURIComponent(startDate.toISOString())
        const formattedEndDate = encodeURIComponent(endDate.toISOString())

        // Формируем URL с параметрами
        const url = `/api/administrator/anketa_oborot_not_by_distributor?startDate=${formattedStartDate}&endDate=${formattedEndDate}`

        try {
            // Отправляем запрос
            const response = await fetch(url)
            if (response.ok) {
                return await response.json()
            } else {
                console.error(
                    `Error: ${response.status} - ${response.statusText}`
                )
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    } else {
        console.error('startDate and endDate must be defined')
    }
}
