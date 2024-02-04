'use client'
import React, { useState } from 'react'
import { TECollapse } from 'tw-elements-react'
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

type LinkList = {
    href: string
    text: string
}

type Links = {
    activeElement: string
    id: string
    linkButton: string
    linksList: LinkList[]
}

export const LinksSidebar = ({ links }: { links: Links }) => {
    return (
        <>
            {links && (
                <Accordion type="single" collapsible>
                    <AccordionItem value={links.activeElement}>
                        <AccordionTrigger>{links.linkButton}</AccordionTrigger>
                        <AccordionContent
                            className={cn('pl-4 flex flex-col gap-2')}
                        >
                            {links.linksList.map((link, idx) => (
                                <Link key={idx} href={link.href}>
                                    {link.text}
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
