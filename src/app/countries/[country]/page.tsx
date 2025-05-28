import Container from '@/components/container'
import React from 'react'

import logo from '../../../../public/logo.png'

import Image from 'next/image'
import { MdSunny } from 'react-icons/md'
import CitiesImg from '@/components/cities-img'


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
            <div className='relative'>
                <div className='bg-[url(../assets/egypt1.jpg)] bg-no-repeat bg-cover absolute inset-0 -z-1 brightness-20 object-cover ' />

                <Container className='flex flex-col pt-10'>
                    <nav className='p-3 text-white flex items-center justify-between bg-white/5 rounded-4xl backdrop-blur-2xl'>
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
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center text-white m-auto w-full h-full py-26'>
                        <div className='space-y-8'>
                            <div className='p-4 px-8 text-xl bg-white/10 max-w-max rounded-md backdrop-blur-3xl'>
                                <p className='flex items-center '>
                                    <MdSunny className='text-[#cf6f14]' />
                                    <span className='mx-1'>28°C</span>  - Sunny</p>
                                <p>Cairo, May 24</p>
                            </div>
                            <div className='text-5xl uppercase space-y-2 font-bold font-mono'>
                                <h2>Discover</h2>
                                <h1>egypt (<span className='text-yellow-700 px-1'>Africa</span>)</h1>
                            </div>
                            <p className='max-w-md'>
                                Historically, geographically, and culturally, Egypt is a colossus. Its past reads like a grand epic, and the country is rich in signposts to this story,                                </p>

                        </div>
                        <div className=' relative'>
                            <CitiesImg />
                        </div>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-8 gap-3  items-center justify-between py-6 '>
                        <div className='md:col-span-2 border-l-[.5px] border-white/50 ps-3 py-3 space-y-2'>
                            <small className='text-white/80 inline-block'>Best time to visit</small>
                            <p className='text-white font-semibold'>October to May to avoid the heat</p>
                        </div>
                        <div className='border-l-[.5px] border-white/50 ps-3 py-3 space-y-2'>
                            <small className='text-white/80 inline-block'>Capital</small>
                            <p className='text-white font-semibold'>Cairo</p>
                        </div>
                        <div className='border-l-[.5px] border-white/50 ps-3 py-3 space-y-2'>
                            <small className='text-white/80 inline-block'>Language</small>
                            <p className='text-white font-semibold'>Arabic</p>
                        </div>
                        <div className='md:col-span-2 border-l-[.5px] border-white/50 ps-3 py-3 space-y-2'>
                            <small className='text-white/80 inline-block'>Currency</small>
                            <p className='text-white font-semibold'>Egyptian Pound = 0.020 $</p>
                        </div>
                        <div className='border-l-[.5px] border-white/50 ps-3 py-3 space-y-2'>
                            <small className='text-white/80 inline-block'>Police Number</small>
                            <p className='text-white font-semibold'>122</p>
                        </div>
                        <div className='border-l-[.5px] border-white/50 ps-3 py-3 space-y-2'>
                            <small className='text-white/80 inline-block'>Ambulance Number</small>
                            <p className='text-white font-semibold'>123</p>
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






{/* <div className='w-full rounded-xl bg-cover bg-center relative'>
                            <div className='bg-[url(../assets/egypt-world.png)] absolute h-[300px] w-full bg-center bg-cover bg-no-repeat rounded-xl -z-1 brightness-20' />
                            <div className='p-5  space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <p className='flex items-center text-xl'>
                                        <MdSunny className='text-[#cf6f14] text-2xl' />
                                        <span className='mx-1'>28°C</span>  - Sunny
                                    </p>
                                    <p className=''>Warm</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='flex items-center gap-2'><FaLocationCrosshairs className='text-[#cf6f14] text-2xl' />Capital</p>
                                    <p>Cairo</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='flex items-center gap-2'>
                                        <IoLanguage className='text-[#cf6f14] text-2xl' />Language
                                    </p>
                                    Arabic
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='flex items-center gap-2'>
                                        <MdCurrencyExchange className='text-[#cf6f14] text-2xl' />
                                        currency
                                    </p>
                                    <div>
                                        Egyptian Pound = 0.020 $
                                    </div>
                                </div>
                                <div>
                                    Emergency:
                                    <p>police: 122</p>
                                    <p>Ambulance: 123</p>
                                </div>
                                <div>Best Mounth to visit: from APR to May</div>
                            </div>
                        </div> */}