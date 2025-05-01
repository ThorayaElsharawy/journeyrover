import Image from 'next/image'
import React from 'react'
import airplane from '@/assets/element-2.png'

export default function Hero() {
    return (
        <section className=' h-full relative py-24 text-black'>
            <div className='grid grid-cols-[38%_1fr] items-center justify-between'>
                <div className='h-full py-24 '>
                    <h3 className='text-[50px] font-bold -tracking-[2px]'>Discover the World's <span className='text-[#f1764d]'>Hidden</span> Wonders</h3>
                    <p className='mt-2 max-w-[400px]'>Find the unloue moments and niaden gems that ignite unforgettable experiences.
                        From rare encounters to remarkable destinations.
                        we nelo vou uncover the soark that turns every trip into a cherished story.</p>
                </div>
                <div className='flex-1 pt-20'>
                    <Image src={airplane} width={400} height={400} alt='airplane' className='w-[780px] hero-img' />
                </div>
            </div>

        </section>
    )
}
