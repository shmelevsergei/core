import {IAnketaDogovorRepository} from "@/repository/anketaDogovor.repository";

export const fetchAnketaDogovor = async ():Promise<IAnketaDogovorRepository[] | undefined> => {

    const url =`/api/administrator/anketa_dogovor_true`

    try {
        // Отправляем запрос
        const response = await fetch(url);
        if (response.ok) {
            return JSON.parse(await response.json())
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
        }
    }catch (error) {
        console.error("Error fetching data:", error);
    }
}