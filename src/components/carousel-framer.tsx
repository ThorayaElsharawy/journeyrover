"use client"

import React, { useState } from 'react'
import sharm from '@/assets/egypt-sherm.jpg'
import aswan from '@/assets/egypt-aswan.jpg'
import alex from '@/assets/egypt-alex.jpg'
import Image from 'next/image'

import { motion } from 'framer-motion'
import Container from './container'
import { FaArrowRight } from 'react-icons/fa'

const MotionImage = motion(Image)


const IMG = [sharm, aswan, alex, sharm, sharm]

export default function CarouselFramer() {
    const [posIndex, setPosIndex] = useState([0, 1, 2, 3, 4])

    const handleNext = () => {
        setPosIndex(prev => prev.map(el => (el + 1) % 5))
    }

    const positions = [
        'center',
        'prevLeft',
        'left',
        'right',
        'prevRight'
    ]
    const imgVarians = {
        center: { x: '0%', scale: 1, zIndex: 5, filter: 'brightness(1)'},
        prevLeft: { x: '-80%', scale: 0.7, zIndex: 2, filter: 'brightness(.6)' },
        left: { x: '-140%', scale: 0.5, zIndex: 1, filter: 'brightness(.4)' },
        right: { x: '140%', scale: 0.5, zIndex: 1, filter: 'brightness(.4)'  },
        prevRight: { x: '80%', scale: 0.7, zIndex: 2, filter: 'brightness(.6)' }
    }

    return (
        <div className='flex items-center justify-center flex-col h-[500px] relative w-full '>
            <button onClick={handleNext} className='text-white top-0 right-[30%] text-lg cursor-pointer mb-5 bg-white/10 p-4 rounded-full backdrop-blur-md'>
               <FaArrowRight />
            </button>
            <div className=' border m-auto flex items-center justify-center pt-15'>
                {IMG.map((img, i) => (
                    <MotionImage
                        key={i}
                        src={img}
                        alt='img'
                        className='rounded-xl'
                        initial='center'
                        animate={positions[posIndex[i]]}
                        variants={imgVarians}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'absolute', width: '30%', height: '500px' }}
                    />
                ))}
            </div>
        </div>
    )
}
