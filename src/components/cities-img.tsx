"use client"

import React, { useState } from 'react'
import sharm from '@/assets/egypt-sherm.jpg'
import aswan from '@/assets/egypt-aswan.jpg'
import alex from '@/assets/egypt-alex.jpg'
import Image from 'next/image'

import { motion } from 'framer-motion'

export default function CitiesImg() {
    const [hover, setHover] = useState({
        img1: false,
        img2: true,
        img3: false
    })

    const handleHover = (test: string) => {
        setHover({
            img1: false,
            img2: false,
            img3: false
        })
        setHover(prev => (
            { ...prev, [test]: true }
        ))
    }

    const handleRemoveHover = () => {
        setHover({
            img1: false,
            img2: true,
            img3: false
        })
    }

    return (
        <div className='flex flex-col items-center gap-6 h-[500px]'>

            <div
                onMouseEnter={() => handleHover('img1')}
                onMouseLeave={handleRemoveHover}
                className='relative'
            >

                {/* <div className='bg-white/40 absolute h-[3px] w-[100px] -left-27' /> */}
                {hover.img1 && <motion.h3
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: .2
                    }}
                    className='absolute bg-black/60 bottom-8 left-5  text-xl z-10 w-[180px] text-center rounded-b-full'>Sharm el sheikh</motion.h3>}
                <Image
                    src={sharm}
                    alt='sharm'
                    className='object-cover rounded-full border-4 border-white/80 cursor-pointer transition-all duration-200'
                    style={{
                        width: hover.img1 ? '220px' : '100px',
                        height: hover.img1 ? '220px' : '100px',
                        filter: hover.img1 ? 'brightness(1)' : 'brightness(.5)'
                    }}
                />
            </div>
            <div
                onMouseEnter={() => handleHover('img2')}
                onMouseLeave={handleRemoveHover}
                className='relative'
            >
                {hover.img2 && <motion.h3
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: .2
                    }}
                    className='absolute bg-black/60 bottom-8 left-5  text-xl z-10 w-[180px] text-center rounded-b-full'>Alexandria</motion.h3>}
                <Image
                    src={alex}
                    alt='alex'
                    className='object-cover rounded-full border-4 border-white/80 cursor-pointer transition-all duration-200'
                    style={{
                        width: hover.img2 ? '220px' : '100px',
                        height: hover.img2 ? '220px' : '100px',
                        filter: hover.img2 ? 'brightness(1)' : 'brightness(.5)'
                    }}
                />
            </div>
            <div
                onMouseEnter={() => handleHover('img3')}
                onMouseLeave={handleRemoveHover}
                className='relative'
            >
                {hover.img3 && <motion.h3
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: .2
                    }}
                    className='absolute bg-black/60 bottom-8 left-5  text-xl z-10 w-[180px] text-center rounded-b-full'>Aswan</motion.h3>}
                <Image
                    src={aswan}
                    alt='aswan'
                    className='object-cover rounded-full border-4 border-white/80 cursor-pointer transition-all duration-200'
                    style={{
                        width: hover.img3 ? '220px' : '100px',
                        height: hover.img3 ? '220px' : '100px',
                        filter: hover.img3 ? 'brightness(1)' : 'brightness(.5)'
                    }}
                />
            </div>

            {
                hover.img1 && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: .2
                            }}
                            className='border-6 w-[550px] h-[550px] rounded-full absolute -z-1  border-white/20 -mt-40 blur-[3px]' />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                            }}
                            className='border-6 w-[350px] h-[350px] rounded-full absolute -z-1  border-white/20 -mt-15 blur-[3px]' />
                    </>
                )
            }

            {
                hover.img2 && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: .4
                            }}
                            className='border-4 w-[550px] h-[550px] rounded-full absolute -z-1  border-white/20 -mt-8 blur-[3px]' />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: .2
                            }}
                            className='border-4 w-[350px] h-[350px] rounded-full absolute -z-1  border-white/20 mt-17 blur-[3px]' />
                    </>
                )
            }

            {
                hover.img3 && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: .4
                            }}
                            className='border-4 w-[550px] h-[550px] rounded-full absolute -z-1  border-white/20 mt-20 blur-[3px]' />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: .2
                            }}
                            className='border-4 w-[350px] h-[350px] rounded-full absolute -z-1  border-white/20 mt-46 blur-[3px]' />
                    </>
                )
            }

        </div >
    )
}
