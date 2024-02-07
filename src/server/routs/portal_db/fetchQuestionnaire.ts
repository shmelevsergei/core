import {IQuestionnaire} from "@/types/questionnaire/create-a-request/questionnaire";
import {NextResponse} from "next/server";

export async function fetchDataDistributor(data:IQuestionnaire) {

    try {
        const response = await fetch('/api/questionnaire/create-a-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return NextResponse.json(response)
        // return console.log('Fetch success', response)
    } catch (error) {
        console.error('Error fetching data:', error)
    }

}