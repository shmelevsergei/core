import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Administrator = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <Button asChild>
                <Link href={'/administrator/reports'}>Панель управления</Link>
            </Button>
        </main>
    )
}

export default Administrator
