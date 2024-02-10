import { NextRequest, NextResponse } from 'next/server'
import { join, resolve, sep } from 'path'
import {unlink, writeFile} from 'fs/promises'
import {UploadImages} from "@/types/questionnaire/create-a-request/uploadImages";
import {PATH_DOWNLOAD_IMAGE} from "@/server/lib/variables";


export async function DELETE(req: NextRequest) {
    const path = await req.json();

    if (!path) {
        return NextResponse.json({ success: false, error: 'Missing fileName' }, { status: 400});
    }
    // console.log(json)

    await unlink(path);

    return NextResponse.json({});
}



export async function POST(req: NextRequest) {
    try {
        const data = await req.formData()
        const file: File | null = data.get('file') as unknown as File

        if (!file) {
            return NextResponse.json({ success: false })
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const now = new Date()
        const timeStamp = now.toISOString().replace(/[-T:]/g, '').split('.')[0]
        const fileName = `${timeStamp}-${file.name}`

        const writePath = join('/', 'images', fileName);

        await writeFile(writePath, buffer)

        const response =  { success: true, path: writePath, fileName }

        return NextResponse.json(response)
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500});
    }

}
