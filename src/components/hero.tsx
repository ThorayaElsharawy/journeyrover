"use client"
import Image from 'next/image'
import React from 'react'
import airplane from '@/assets/element-2.png'
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function Hero() {
    return (
        <section className='h-full relative lg:py-20 text-black'>
            <div className='grid md:grid-cols-[38%_1fr] items-center justify-between'>
                <div className='h-full py-10 lg:py-24 order-2 md:order-1'>
                    <motion.h3
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 10
                        }}
                        className='text-[40px] lg:text-[50px] font-bold -tracking-[2px]'>Discover the World&rsquo;s
                        <span className='text-[#dcbb87] px-2'>Hidden</span>
                        Wonders
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                            delay: .4
                        }}
                        className='mt-2 max-w-[400px]'>Find the unloue moments and niaden gems that ignite unforgettable experiences.
                        From rare encounters to remarkable destinations.
                        we nelo vou uncover the soark that turns every trip into a cherished story.</motion.p>
                </div>
                <div className='flex-1 pt-20 order-1 md:order-2'>
                    <MotionImage
                        id='hero'
                        src={airplane}
                        width={400}
                        height={400}
                        alt='airplane'
                        initial={{ scale: 0, x: -400 }}  // Start small
                        animate={{ scale: 1, x: -10 }}
                        transition={{ duration: 4 }}
                        className='w-[780px]'
                        onAnimationComplete={() => document.querySelector('#hero')?.classList.add('hero-img')}
                    />
                </div>
            </div>

        </section>
    )
}
