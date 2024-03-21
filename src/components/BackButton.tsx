'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
    const router = useRouter()

    return (
        <Button
            variant={'link'}
            onClick={() => router.back()}
            className={cn('text-lg flex gap-2')}
        >
            <ArrowLeft /> Назад
        </Button>
    )
}
export default BackButton
