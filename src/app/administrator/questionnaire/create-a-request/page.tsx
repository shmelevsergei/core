'use client'
import React from 'react'
import { cn } from '@/lib/utils'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import DownloadImage from '@/app/administrator/questionnaire/create-a-request/components/Photo/DownloadImage'
import { QuestionnaireProvider } from '@/app/administrator/questionnaire/store/questionnaire.context'
import Form from '@/app/administrator/questionnaire/create-a-request/components/Form'
import { Toaster } from '@/components/ui/toaster'

const Page = () => {
    return (
        <main>
            <QuestionnaireProvider>
                <Card className={cn('p-4 h-[calc(100vh-100px)]')}>
                    <ScrollArea className={cn('h-full pr-4')}>
                        <Form />
                    </ScrollArea>
                </Card>
                <DownloadImage />
            </QuestionnaireProvider>
            <Toaster />
        </main>
    )
}

export default Page
