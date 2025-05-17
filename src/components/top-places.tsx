"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Vietnam from "@/assets/Vietnam.jpg"
import Croatia from "@/assets/Croatia.jpg"
import Turkey from "@/assets/Turkey.jpg"
import Australia from "@/assets/Australia.jpg"
import { IoAirplaneSharp } from 'react-icons/io5';
import { motion } from "framer-motion";

const ORIGINAL_DESTIS = [
    { id: 1, img: Vietnam, place: "Golden Bridge, Bà Nà Hills", country: "Vietnam" },
    { id: 2, img: Croatia, place: "Old Town of Dubrovnik", country: "Croatia" },
    { id: 3, img: Turkey, place: "Sultan Ahmed Mosque", country: "Turkey" },
    { id: 4, img: Australia, place: "Sydney Harbour Bridge", country: "Australia" },
    { id: 5, img: Australia, place: "Great Barrier Reef", country: "Australia" },
    { id: 6, img: Australia, place: "Uluru", country: "Australia" },
];

export default function TopPlaces() {
    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent(prev => prev === 0 ? ORIGINAL_DESTIS.length - 4 : prev - 1)
    }

    const nextSlide = () => {
        setCurrent(prev => prev === ORIGINAL_DESTIS.length - 4 ? 0 : prev + 1)
    }


    return (
        <div className="my-10">
            <h2 className="font-bold text-3xl">Top Places</h2>
            <div className='space-x-10 text-center py-5'>
                <motion.button
                    onClick={prevSlide}
                    whileTap={{ scale: 0.9 }}
                    className='cursor-pointer border-1 border-[#dcbb87] p-1.5 rounded-full rotate-180 hover:bg-[#dcbb87] group transition-all'>
                    <IoAirplaneSharp className="text-[#dcbb87] group-hover:text-white transition-all" />
                </motion.button>
                <motion.button
                    onClick={nextSlide}
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    className='cursor-pointer border-1 border-[#dcbb87] p-1.5 rounded-full hover:bg-[#dcbb87] group transition-all'>
                    <IoAirplaneSharp className="text-[#dcbb87] group-hover:text-white transition-all" />
                </motion.button>
            </div>
            <div className='overflow-hidden'>
                <div
                    className='flex gap-5 relative'
                    style={{
                        transform: `translateX(-${current * 300}px)`,
                        transition:'transform 0.3s ease-in-out'
                    }}
                >
                    {ORIGINAL_DESTIS.map((dest, index) => (
                        <div
                            key={`${dest.id}-${index}`}
                            className='flex flex-col min-w-[280px]'
                        >
                            <Image
                                src={dest.img}
                                width={200}
                                height={200}
                                alt={dest.place}
                                className="w-full h-[350px] object-cover rounded-4xl" />
                            <div>
                                <p className="mt-2 font-semibold">{dest.place}</p>
                                <small className="text-sm text-black/70">{dest.country}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
