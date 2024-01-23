export const fetchAnketaDogovor = async () => {

    const url =`/api/administrator/anketa_dogovor_true`

    try {
        // Отправляем запрос
        const response = await fetch(url);
        if (response.ok) {
            return await response.json()
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
        }
    }catch (error) {
        console.error("Error fetching data:", error);
    }
}