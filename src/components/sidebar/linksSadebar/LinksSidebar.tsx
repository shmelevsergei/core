'use client'
import React from 'react'
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { IQuestionnaire } from '@/types/questionnaire/create-a-request/questionnaire'
import { Questionnaire } from '../../../../prisma/generate/client2'

type LinkList = {
    href: string
    text: string
    status?: string
}

type Links = {
    activeElement: string
    id: string
    linkButton: string
    linksList: LinkList[]
}

export const LinksSidebar = ({
    links,
    questionnaireData,
}: {
    links: Links
    questionnaireData?: Questionnaire[]
}) => {
    const sent = questionnaireData?.filter((item) => item.status === 'sent')
    const draft = questionnaireData?.filter((item) => item.status === 'draft')
    const accepted = questionnaireData?.filter(
        (item) => item.status === 'accepted'
    )
    const rejected = questionnaireData?.filter(
        (item) => item.status === 'rejected'
    )

    return (
        <>
            {links && (
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value={links.activeElement}
                        className={cn('border-b-0')}
                    >
                        <AccordionTrigger
                            className={cn(
                                'flex gap-2 items-center pb-0 pt-0 hover:no-underline text-base justify-between text-left'
                            )}
                        >
                            {links.linkButton}
                        </AccordionTrigger>
                        <AccordionContent
                            className={cn('pl-4 flex flex-col gap-2 pt-2')}
                        >
                            {links.linksList.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="flex gap-2"
                                >
                                    {link.text}
                                    <div>
                                        {link.status == 'sent' && sent?.length}
                                        {link.status == 'draft' &&
                                            draft?.length}
                                        {link.status == 'accepted' &&
                                            accepted?.length}
                                        {link.status == 'rejected' &&
                                            rejected?.length}
                                    </div>
                                </Link>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
        </>
    )
}

export default LinksSidebar
