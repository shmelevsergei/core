import { NextRequest, NextResponse } from 'next/server'
import { join, resolve } from 'path'
import { writeFile } from 'node:fs/promises'

export async function POST(req: NextRequest) {
    const data = await req.formData()
    const file: File | null = data.get('file') as unknown as File
    const description: string = data.get('description') as unknown as string

    if (!file) {
        return NextResponse.json({ success: false })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const projectFolderPath = resolve(process.cwd())
    const path = join(projectFolderPath, 'public/downloads/images', file.name)

    await writeFile(path, buffer)

    return NextResponse.json({ success: true })
}
