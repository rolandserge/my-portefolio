"use client"

import React from 'react'
import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi" 
import { WorkSliderBtnProps } from '@/types'

export default function WorkSliderBtns({ containerStyles, btnStyles, iconsStyles } : WorkSliderBtnProps) {

    const swiper = useSwiper()

    return (
        <div className={containerStyles}>
            <button 
                className={btnStyles}
                onClick={() => swiper.slidePrev()}
            >
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button
                className={btnStyles}
                onClick={() => swiper.slideNext()}
            >
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    )
}
