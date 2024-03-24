import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'
import { unlink, writeFile, readFile, stat, mkdir } from 'fs/promises'

export async function DELETE(req: NextRequest) {
    const path = await req.json()

    if (!path) {
        return NextResponse.json(
            { success: false, error: 'Missing filePath' },
            { status: 400 }
        )
    }

    const delePathImage = process.cwd()

    await unlink(`${delePathImage}/public/${path}`)

    return NextResponse.json({})
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const name = searchParams.get('fileName')
        if (!name) {
            return NextResponse.json(
                { success: false, error: 'Missing filePath' },
                { status: 400 }
            )
        }

        const projectPath = process.cwd()

        const filePath = join(projectPath, 'public', name)

        const fileContent = await readFile(filePath)

        return NextResponse.json(fileContent, {
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': `attachment; filename="${name}"`,
            },
        })
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function POST(req: NextRequest) {
    const data = await req.formData()
    const file: File | null = (data.get('file') as File) || null

    const buffer = Buffer.from(await file.arrayBuffer())

    const relativeUploadDir = '/uploads/'

    const uploadDir = join(process.cwd(), 'public', relativeUploadDir)

    console.log(uploadDir)

    try {
        await stat(uploadDir)
    } catch (e: any) {
        if (e.code === 'ENOENT') {
            await mkdir(uploadDir, { recursive: true })
        } else {
            console.error(
                'Error while trying to create directory when uploading a file\n',
                e
            )
            return NextResponse.json(
                { error: 'Something went wrong.' },
                { status: 500 }
            )
        }
    }

    try {
        const now = new Date()
        const timeStamp = now.toISOString().replace(/[-T:]/g, '').split('.')[0]
        const fileName = `${timeStamp}-${file.name}`

        await writeFile(`${uploadDir}/${fileName}`, buffer)

        const fileUrl = `${relativeUploadDir}${fileName}`
        const response = {
            success: true,
            path: fileUrl,
            fileName,
        }

        return NextResponse.json(response)
    } catch (e: any) {
        console.error('Error while trying to upload a file\n', e)
        return NextResponse.json(
            { error: 'Something went wrong.' },
            { status: 500 }
        )
    }
}
