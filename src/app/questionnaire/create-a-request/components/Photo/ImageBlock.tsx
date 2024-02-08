import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { XCircle } from 'lucide-react'
import { useQuestionnaireState } from '@/app/questionnaire/store/questionnaire.context'

const ImageBlock = ({
    path,
    description,
    index,
}: {
    path: string
    description: string
    index: number
}) => {
    const { state, setState } = useQuestionnaireState()

    const handleRemoveClick = () => {
        if (state.questionnaire.images) {
            const updateImage = [...state.questionnaire.images]

            updateImage.splice(index, 1)

            setState((prevState) => ({
                ...prevState,
                questionnaire: {
                    ...prevState.questionnaire,
                    images: updateImage,
                },
            }))
        }
    }

    return (
        <Card className={cn('p-3 flex flex-col gap-1.5 relative w-[200px] h-[250px] justify-between')}>
            <Image src={path} alt={description} width={180} height={180} className={'max-w-[200px] max-h-[200px] overflow-hidden object-cover'} />
            <Label>{description}</Label>

            <button
                onClick={handleRemoveClick}
                className={'absolute -top-2 -right-2'}
            >
                <XCircle className={'bg-black text-white rounded-full'} />
            </button>
        </Card>
    )
}

export default ImageBlock
