import Image from 'next/image'
import React from 'react'
import footerImg from '@/assets/footer-img.png'
import logo from '@/assets/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Container from './container'

export default function Footer() {
    return (
        <footer className='bg-[#19232d] py-24 relative'>
            <Image src={footerImg} alt='footer img' width={600} height={200} className='w-[70%] absolute h-full top-0 right-0' />
            {/* <div className="bg-[url(@/assets/footer-img.png)] bg-no-repeat bg-cover absolute w-[100%] h-[200px] right-0" /> */}

            <Container>
                <div className='grid md:grid-cols-[40%_1fr] gap-12 md:gap-0 w-full items-center justify-between'>
                    <div className='md:justify-self-start'>
                        <div className="flex items-center justify-center">
                            <Image src={logo} width={80} height={80} alt="logo" className='brightness-0 invert-100' />
                            <h2 className="text-2xl uppercase font-poetsen text-white">Journey Rover</h2>
                        </div>
                        <div className='flex items-center justify-center gap-4 text-[#dcbb87] text-sm'>
                            <button className='p-2 rounded-full border border-[#dcbb874d] hover:bg-[#dcbb87] hover:text-white transition-all cursor-pointer duration-300'>
                                <FaInstagram />
                            </button>
                            <button className='p-2 rounded-full border border-[#dcbb874d] hover:bg-[#dcbb87] hover:text-white transition-all cursor-pointer duration-300'>
                                <FaFacebookF />
                            </button>
                            <button className='p-2 rounded-full border border-[#dcbb874d] hover:bg-[#dcbb87] hover:text-white transition-all cursor-pointer duration-300'>
                                <FaLinkedinIn />
                            </button>
                            <button className='p-2 rounded-full border border-[#dcbb874d] hover:bg-[#dcbb87] hover:text-white transition-all cursor-pointer duration-300'>
                                <FaTwitter />
                            </button>
                        </div>
                    </div>
                    <div className='m-auto text-lg text-white border border-[#dcbb87] p-5 px-10 rounded-3xl'>
                        <span className='font-bold text-[#dcbb87]'>Journey Rover</span> invites you to <span className=' text-[#dcbb87] '>rediscover</span> the world with <span className=' text-[#dcbb87] '>fresh eyes</span>.
                        Uncover <span className='text-[#dcbb87]'>powerful places</span> that <span className='text-[#dcbb87]'>move the soul</span> and spark your <span className='text-[#dcbb87]'>curiosity</span>.
                        From <span className='text-[#dcbb87]'>awe-inspiring</span> cities to hidden corners of the earth, <span className='text-[#dcbb87]'>wonder awaits</span>.
                        Every destination tells a story — we help you find the ones worth hearing.
                        Let your journey begin with the places that truly <span className='text-[#dcbb87]'>inspire</span>.
                    </div>
                </div>
            </Container>

        </footer>
    )
}
