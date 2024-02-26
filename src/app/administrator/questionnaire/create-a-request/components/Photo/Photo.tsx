'use client'

import React, { useEffect, useState } from 'react'
import Title from '@/app/administrator/questionnaire/create-a-request/components/Title'
import { Button } from '@/components/ui/button'
import ImageBlock from '@/app/administrator/questionnaire/create-a-request/components/Photo/ImageBlock'

import { cn } from '@/lib/utils'
import { useQuestionnaireState } from '@/app/administrator/questionnaire/store/questionnaire.context'

const Photo = () => {
    const { state, setState } = useQuestionnaireState()

    const handleClick = (e: any) => {
        e.preventDefault()
        setState((prevState) => ({
            ...prevState,
            isModalDownloadImages: true,
        }))
    }

    return (
        <div className={'px-1 grid gap-3'}>
            <Title text={'Фотографии'} />
            <div className={'flex flex-wrap gap-2'}>
                {state.images.map((image, idx) => (
                    <ImageBlock
                        key={idx}
                        index={idx}
                        description={image.description}
                        path={image.path}
                        blobPath={image.blobPath}
                    />
                ))}
            </div>

            <Button className={cn('w-max')} onClick={handleClick}>
                Добавить фотографию
            </Button>
        </div>
    )
}

export default Photo