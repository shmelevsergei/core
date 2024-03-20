import React from 'react'
import type { Metadata } from 'next'
import { QuestionnaireProvider } from './store/questionnaire.context'

export const metadata: Metadata = {
    title: 'GROUPAUTO | EVERYCAR',
    description: 'Анкеты',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <QuestionnaireProvider>
            <div className={'h-full p-4'}>{children}</div>
        </QuestionnaireProvider>
    )
}
