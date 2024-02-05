'use client'
import React, { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Distributor from '@/app/questionnaire/create-a-request/components/distributor/Distributor'
import DistributorEmployee from '@/app/questionnaire/create-a-request/components/distributor-employee/DistributorEmployee'
import DataSto from '@/app/questionnaire/create-a-request/components/data-sto/DataSto'
import ManagerDetails from '@/app/questionnaire/create-a-request/components/manager-details/ManagerDetails'
import Lifts from '@/app/questionnaire/create-a-request/components/lifts/Lifts'
import ConfirmationDetails from '@/app/questionnaire/create-a-request/components/confirmation-details/ConfirmationDetails'
import Comment from '@/app/questionnaire/create-a-request/components/comment/Comment'
import Photo from '@/app/questionnaire/create-a-request/components/Photo/Photo'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import DownloadImage from '@/app/questionnaire/create-a-request/components/Photo/DownloadImage'
import {
    QuestionnaireProvider,
    useQuestionnaireState,
} from '@/app/questionnaire/store/questionnaire.context'
import { Button } from '@/components/ui/button'

const Page = () => {
    const { state } = useQuestionnaireState()
    const [isDisabled, setIsDisabled] = useState(false)
    const handleClick = (e: any) => {
        e.preventDefault()
        setIsDisabled(true)
        console.log(state.questionnaire)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsDisabled(false)
        }, 1000)
    }, [isDisabled])

    return (
        <main>
            <QuestionnaireProvider>
                <Card className={cn('p-4 h-[calc(100vh-100px)]')}>
                    <ScrollArea className={cn('h-full pr-4')}>
                        <Distributor />
                        <Separator className={cn('my-3 w-full')} />
                        <DistributorEmployee />
                        <Separator className={cn('my-3 w-full')} />
                        <DataSto />
                        <Separator className={cn('my-3 w-full')} />
                        <ManagerDetails />
                        <Separator className={cn('my-3 w-full')} />
                        <Lifts />
                        <Separator className={cn('my-3 w-full')} />
                        <ConfirmationDetails />
                        <Separator className={cn('my-3 w-full')} />
                        <Comment />
                        <Separator className={cn('my-3 w-full')} />
                        <Photo />
                        <Separator className={cn('my-3 w-full')} />
                        <Button
                            onClick={handleClick}
                            disabled={isDisabled}
                            className={cn(
                                'bg-blue-700 mx-auto w-max block mt-10 hover:bg-blue-600'
                            )}
                        >
                            Отправить анкету
                        </Button>
                    </ScrollArea>
                </Card>
                <DownloadImage />
            </QuestionnaireProvider>
        </main>
    )
}

export default Page
