"use client"

import { links } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Nav() {

    const pathname = usePathname()

    return (
        <nav className='flex gap-8'>
            { links.map((link, index) => (
                <Link 
                    key={index}
                    href={link.path}
                    className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}
