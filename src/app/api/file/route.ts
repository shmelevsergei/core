import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'
import {unlink, writeFile, readFile} from 'fs/promises'


export async function DELETE(req: NextRequest) {
    const path = await req.json();

    if (!path) {
        return NextResponse.json({ success: false, error: 'Missing filePath' }, { status: 400});
    }

    await unlink(path);

    return NextResponse.json({});
}


export async function GET(req: NextRequest) {
    try {

        const { searchParams} = new URL(req.url)
        const name = searchParams.get('fileName')
        if (!name) {
            return NextResponse.json({ success: false, error: 'Missing filePath' }, { status: 400});
        }

        const projectPath = process.cwd()

        const filePath = join(projectPath, 'uploads', name)

        const fileContent = await readFile(filePath)

        return NextResponse.json(fileContent, {
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': `attachment; filename="${name}"`,
            }
        })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
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

        const projectPath = process.cwd()

        const writePath = join(projectPath, 'uploads', fileName);

        await writeFile(writePath, buffer)

        const response =  { success: true, path: writePath, fileName }

        return NextResponse.json(response)
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500});
    }

}
