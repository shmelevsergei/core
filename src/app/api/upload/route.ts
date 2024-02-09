import { NextRequest, NextResponse } from 'next/server'
import { join, resolve, sep } from 'path'
import { writeFile } from 'fs/promises'
import {UploadImages} from "@/types/questionnaire/create-a-request/uploadImages";


export async function POST(req: NextRequest) {
    const data = await req.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
        return NextResponse.json({ success: false })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const projectFolderPath = resolve(process.cwd())

    const now = new Date()
    const timeStamp = now.toISOString().replace(/[-T:]/g, '').split('.')[0]
    const fileName = `${timeStamp}-${file.name}`
    // const writePath = join(projectFolderPath, '/public/downloads/images', fileName)
    // const path = join('downloads/images', fileName)
    const writePath = join(projectFolderPath, 'public', 'downloads', 'images', fileName);

    await writeFile(writePath, buffer)


    const path = join('downloads', 'images', fileName).split(sep).join('/');
    const response: UploadImages =  { success: true, path }

    return NextResponse.json(response)
}
