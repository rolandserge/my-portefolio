"use client"

import { stats } from '@/constants'
import React from 'react'
import CountUp from "react-countup"

export default function Stats() {

    return (
        <section className='pt-4 pb-12'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
                        >
                            <CountUp
                                end={stat.num}
                                duration={5}
                                delay={2}
                                className='text-4xl xl:text-6xl font-semibold'
                            />
                            <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                {stat.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
