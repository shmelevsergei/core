import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { XCircle } from 'lucide-react'
import { useQuestionnaireState } from '@/app/questionnaire/store/questionnaire.context'
import {useNavigate} from "react-router";
import {useRouter} from "next/navigation";

const ImageBlock = ({
    description,
    index,
    path,
    fileName,
    blobPath
}: {
    description: string
    index: number
    path: string
    fileName?: string
    blobPath: string
}) => {
    const { state, setState } = useQuestionnaireState()
    const router = useRouter()

    const removeFileServer = async(path: string) => {
        await fetch('/api/file', {
            body: JSON.stringify(
                    path
                ),
            method: 'DELETE',
        })
    }

    const handleRemoveClick = async (e:any) => {
        e.preventDefault()
        router.refresh()

        if (state.questionnaire.images && path) {
            const updateImageServer = [...state.questionnaire.images]
            const updateImageClient = [...state.images]

            updateImageServer.splice(index, 1)
            updateImageClient.splice(index, 1)

            setState((prevState) => ({
                ...prevState,
                questionnaire: {
                    ...prevState.questionnaire,
                     images: updateImageServer
                },
                images: updateImageClient

            }))
            await removeFileServer(path)
        }
    }



    return (
        <Card className={cn('p-3 flex flex-col gap-1.5 relative w-[200px] h-[250px] justify-between')}>
            <Image src={blobPath} alt={description} width={180} height={180} className={'max-w-[200px] max-h-[200px] overflow-hidden object-cover'} />
            <Label>{description}</Label>

            <button
                onClick={e => handleRemoveClick(e)}
                className={'absolute -top-2 -right-2'}
            >
                <XCircle className={'bg-black text-white rounded-full'} />
            </button>
        </Card>
    )
}

export default ImageBlock
