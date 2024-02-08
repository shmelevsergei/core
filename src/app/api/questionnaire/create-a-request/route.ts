import {questionnaire} from "@/server/actions/portal_db/questionnaire";
import {NextRequest, NextResponse} from "next/server";
import {IUploadQuestionnaire} from "@/types/questionnaire/create-a-request/questionnaire";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const requestBody = await req.json();
        await questionnaire.createQuestionnaire(requestBody);

        const response: IUploadQuestionnaire = {
            success: true,
            requestBody
        }

        return NextResponse.json(response)
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({success: false, res});
    }
}
