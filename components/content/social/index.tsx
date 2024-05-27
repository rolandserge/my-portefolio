import { socials } from '@/constants'
import Link from 'next/link'
import React from 'react'

interface SocialItemProps {
    containerStyles: string;
    iconStyles: string;
}

export default function Social({ containerStyles, iconStyles } : SocialItemProps) {

    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                const Icons = item.icon
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className={iconStyles}
                    >
                        <Icons />
                    </Link>
            )})}
        </div>
    )
}
