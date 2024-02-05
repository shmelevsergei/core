'use client'
import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useQuestionnaireState } from '@/app/questionnaire/store/questionnaire.context'
import { IImageProps } from '@/types/questionnaire/create-a-request/questionnaire'
import { XCircle } from 'lucide-react'

const DownloadImage = () => {
    const [file, setFile] = useState<File>()
    const [description, setDescription] = useState('')
    const [isShowModal, setIsShowModal] = useState<boolean>()
    const { state, setState } = useQuestionnaireState()

    function addImage(newImage: IImageProps) {
        setState((prevState) => ({
            ...prevState,
            questionnaire: {
                images: [...(prevState.questionnaire.images || []), newImage],
            },
            isModalDownloadImages: false,
        }))
    }

    const isImageFile = (file: File): boolean => {
        const imageTypes = ['image/jpeg', 'image/png', 'image/gif']
        return imageTypes.includes(file.type)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (file && isImageFile(file)) {
            const newImage: IImageProps = {
                path: URL.createObjectURL(file),
                description: description,
            }

            addImage(newImage)
            setFile(undefined)
            setDescription('')
        } else {
            console.log('Файл не является изображением')
        }
    }

    const handleCloseClick = () => {
        setState((prevState) => ({
            ...prevState,
            isModalDownloadImages: false,
        }))
    }

    useEffect(() => {
        setIsShowModal(state.isModalDownloadImages)
    }, [state.isModalDownloadImages])

    return (
        <>
            {isShowModal && (
                <Card
                    className={cn(
                        'absolute grid gap-5 max-w-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4'
                    )}
                >
                    <div className={'grid gap-5'}>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="picture">Изображение</Label>
                            <Input
                                id="picture"
                                type="file"
                                name="picture"
                                onChange={(e) => setFile(e.target.files?.[0])}
                            />
                            {file && !isImageFile(file) && (
                                <p className={'text-red-600 text-sm'}>
                                    Файл не является изображением
                                </p>
                            )}
                        </div>

                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="description">Описание</Label>
                            <Input
                                id="description"
                                type="text"
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder={'Описание фотографии'}
                                value={description}
                            />
                        </div>

                        <Button type={'submit'} onClick={handleSubmit}>
                            Добавить
                        </Button>
                    </div>

                    <button
                        onClick={handleCloseClick}
                        className={'absolute -top-2 -right-2'}
                    >
                        <XCircle
                            className={'bg-black text-white rounded-full'}
                        />
                    </button>
                </Card>
            )}
        </>
    )
}

export default DownloadImage
