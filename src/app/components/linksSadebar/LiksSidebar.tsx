"use client"
import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import Link from "next/link";

type LinkList = {
    href: string
    text: string
}

type Links = {
    activeElement: string
    id:string
    linkButton: string
    linksList: LinkList[]
}

export const LinksSidebar = ({links} : {links: Links}) => {
    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value: string) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };
    return (
        <>
            { links && (
                <div>
                    <h2 id={links.id}>
                        <button
                            className={`${
                                activeElement === links.activeElement} text-base ` }
                            type="button"
                            onClick={() => handleClick(links.activeElement)}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            {links.linkButton}
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === links.activeElement}
                        className="shadow-none !mt-2 pl-3.5"
                    >
                        <ul className="flex flex-col gap-2.5">
                            {
                                links.linksList.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href}>{link.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </TECollapse>
                </div>
            )
            }
        </>
    )
}

export default LinksSidebar