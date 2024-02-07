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

import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import DownloadImage from '@/app/questionnaire/create-a-request/components/Photo/DownloadImage'
import {
    QuestionnaireProvider,
    useQuestionnaireState,
} from '@/app/questionnaire/store/questionnaire.context'
import { Button } from '@/components/ui/button'
import Form from "@/app/questionnaire/create-a-request/components/Form";

const Page = () => {


    return (
        <main>
            <QuestionnaireProvider>
                <Card className={cn('p-4 h-[calc(100vh-100px)]')}>
                    <ScrollArea className={cn('h-full pr-4')}>
                        <Form/>
                    </ScrollArea>
                </Card>
                <DownloadImage />
            </QuestionnaireProvider>
        </main>
    )
}

export default Page
