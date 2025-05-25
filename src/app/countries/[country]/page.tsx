import Container from '@/components/container'
import React from 'react'

import sharm from '@/assets/egypt-sherm.jpg'
import aswan from '@/assets/egypt-aswan.jpg'
import alex from '@/assets/egypt-alex.jpg'
import logo from '../../../../public/logo.png'

import Image from 'next/image'
import { MdSunny } from 'react-icons/md';
import { FaDirections, FaMapPin } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { LuArrowBigLeft, LuArrowBigRight } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'

export async function generateMetadata({ params }: { params: { country: string } }) {
    return {
        title: `${(params.country).toUpperCase()} | Journey Rover`
    };
}

type Tparams = Promise<{ country: string }>

export default async function Page({ params }: { params: Tparams }) {
    const { country } = await params
    return (
        <div>
            <div className='relative w-screen overflow-hidden'>
                <div className='bg-[url(../assets/egypt1.jpg)] bg-no-repeat bg-cover absolute inset-0 -z-1 brightness-20' />

                <Container className='flex flex-col mt-10'>
                    <nav className='p-4 text-white flex items-center justify-between bg-white/5 rounded-4xl backdrop-blur-2xl'>
                        <div className='flex items-center gap-2'>
                            <Image src={logo} alt='logo' width={40}></Image>
                            <h2 className='text-2xl font-bold font-poetsen'>JourneyRover</h2>
                        </div>
                        <ul className='flex gap-4 uppercase me-5'>
                            <li>Home</li>
                            <li>DESTINATIONS</li>
                            <li>travel styles</li>
                            <li>blog</li>
                        </ul>
                    </nav>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center text-white m-auto w-full h-full py-27'>
                        <div className='space-y-8'>
                            <div className='p-4 px-8 text-xl bg-white/10 max-w-max rounded-md backdrop-blur-3xl'>
                                <p className='flex items-center '>
                                    <MdSunny className='text-[#cf6f14]' />
                                    <span className='mx-1'>28°C</span>  - Sunny</p>
                                <p>Cairo, May 24</p>
                            </div>
                            <div className='text-5xl uppercase space-y-2 font-bold font-poetsen'>
                                <h2>Discover</h2>
                                <h1>egypt (<span className='text-yellow-700 px-1'>Africa</span>)</h1>
                            </div>
                            <p className='text-xl max-w-md'>Progressive nation with futuristic architecture, diverse culture, economic growth, desert wonders, and a strong global presence.</p>
                        </div>
                        <div className='relative'>
                            <div className='flex gap-8 items-center'>
                                <div className='min-w-[350px]'>
                                    <small className='font-bold pb-2 inline-block'>Sharm El-Sheikh</small>
                                    <Image src={sharm} alt='sharm' className='h-[500px] rounded-xl' />
                                </div>
                                <div className='min-w-[250px]'>
                                    <small className='font-bold pb-1 inline-block text-white/50'>Aswan</small>
                                    <Image src={aswan} alt='sherm' className='h-[350px] brightness-70 rounded-xl' />
                                </div>
                                <div className='min-w-[250px]'>
                                    <small className='font-bold pb-1 inline-block text-white/50'>Alexandria</small>
                                    <Image src={alex} alt='alex' className='h-[350px] brightness-70 rounded-xl' />
                                </div>
                            </div>
                            <div className='flex gap-4 items-center justify-between mt-20 w-full'>
                                <button className='p-3 bg-white/10 rounded-full cursor-pointer'><LuArrowBigLeft className=' text-white/50' /></button>
                                <button className='p-3 bg-white/10 rounded-full cursor-pointer'><LuArrowBigRight className='' /></button>
                                <div className='w-full bg-white/30 h-[1px]' />
                                <p className='text-[#cf6f14] text-xl'>01</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* <div className='grid grid-cols-3 w-full'>
                <div className='bg-gray-300 py-20'>
                    <GrLocation />
                    <div>
                        <p>Africa</p>
                        <p>Cairo</p>
                        <p>Arabic</p>
                    </div>
                </div>
                <div className='bg-[#eb9c5c]'></div>
                <div className='bg-[#084b60]'></div>
            </div> */}


            {/* <Container>
                <div className='grid grid-cols-2 gap-4 relative mt-20'>
                    <div id='Nature' className='w-full relative h-[400px] cursor-pointer  duration-300 transition-all'>
                        <div className='bg-[url(../assets/nature.jpg)] bg-no-repeat h-full w-full bg-cover bg-center rounded-4xl absolute z-0 brightness-50' />
                        <div className='relative z-10 text-white m-auto flex items-center justify-center flex-col gap-3 h-full'>
                            <h1 className='text-[60px] font-semibold font-sans'>Nature</h1>
                            <p className='max-w-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, ratione.</p>
                        </div>
                    </div>
                    <div id='Mountains' className='w-full relative h-[400px]'>
                        <div className='bg-[url(../assets/mountains.jpg)] bg-no-repeat h-full w-full bg-cover bg-top rounded-4xl absolute z-0 brightness-60' />
                        <div className='relative z-10 text-white m-auto flex items-center justify-center flex-col gap-3 h-full'>
                            <h1 className='text-[60px] font-semibold font-sans'>Mountains</h1>
                            <p className='max-w-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, ratione.</p>
                        </div>
                    </div>
                    <div id='Desert' className='w-full relative h-[400px]'>
                        <div className='bg-[url(../assets/desert.jpg)] bg-no-repeat h-full w-full bg-cover bg-top rounded-4xl absolute z-0 brightness-60' />
                        <div className='relative z-10 text-white m-auto flex items-center justify-center flex-col gap-3 h-full'>
                            <h1 className='text-[60px] font-semibold font-sans'>Desert</h1>
                            <p className='max-w-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, ratione.</p>
                        </div>
                    </div>
                    <div id='Coast' className='w-full relative h-[400px]'>
                        <div className='bg-[url(../assets/coast.jpg)] bg-no-repeat h-full w-full bg-cover bg-bottom rounded-4xl absolute z-0 brightness-70' />
                        <div className='relative z-10 text-white m-auto flex items-center justify-center flex-col gap-3 h-full'>
                            <h1 className='text-[60px] font-semibold font-sans'>Coast</h1>
                            <p className='max-w-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, ratione.</p>
                        </div>
                    </div>
                </div>
            </Container> */}
        </div>
    )
}
