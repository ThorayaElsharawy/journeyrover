import React from 'react'
import Container from './container'
import place1 from '@/assets/place1.jpg'
import place2 from '@/assets/place2.jpg'
import place3 from '@/assets/place3.jpg'
// import place4 from '@/assets/place4.jpeg'
// import place5 from '@/assets/place5.jpg'
import place6 from '@/assets/place6.jpg'
import place7 from '@/assets/place7.jpg'
import place8 from '@/assets/place8.jpg'
import place9 from '@/assets/place9.jpg'
import Image from 'next/image'

export default function TopVacationDestination() {
    return (
        <Container className='py-12'>
            <h2 className='text-3xl font-bold'>Top Vacation Destination</h2>
            <div className='grid grid-cols-3 gap-3 mt-5'>
                <div className='bg-[url(@/assets/place3.jpg)] bg-cover bg-top bg-no-repeat h-[300px] rounded-3xl relative group cursor-pointer'>
                    <div className='flex items-center justify-center absolute bottom-0 w-full z-20 bg-gradient-to-t from-black via-black/80 to-white/10  h-[60px] text-center text-white text-xl rounded-b-3xl'>
                        <p className='group-hover:text-[24px] transition-all duration-300 text-lg font-semibold'>Delhi</p>
                    </div>
                </div>
                <div className='bg-[url(@/assets/place2.jpg)] bg-cover bg-top bg-no-repeat h-[300px] rounded-3xl relative group cursor-pointer'>
                    <div className='flex items-center justify-center absolute bottom-0 w-full z-20 bg-gradient-to-t from-black via-black/80 to-white/10  h-[60px] text-center text-white text-xl rounded-b-3xl'>
                        <p className='group-hover:text-[24px] transition-all duration-300 text-lg font-semibold'>Amritsar</p>
                    </div>
                </div>
                <div className='bg-[url(@/assets/place1.jpg)] bg-cover bg-top bg-no-repeat h-[300px] rounded-3xl relative group cursor-pointer'>
                    <div className='flex items-center justify-center absolute bottom-0 w-full z-20 bg-gradient-to-t from-black via-black/80 to-white/10  h-[60px] text-center text-white text-xl rounded-b-3xl'>
                        <p className='group-hover:text-[24px] transition-all duration-300 text-lg font-semibold'>Arga</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-3 mt-5'>

                <div className='bg-[url(@/assets/place4.jpg)] bg-cover bg-top bg-no-repeat h-[300px] rounded-3xl relative group cursor-pointer'>
                    <div className='flex items-center justify-center absolute bottom-0 w-full z-20 bg-gradient-to-t from-black via-black/80 to-white/10  h-[60px] text-center text-white text-xl rounded-b-3xl'>
                        <p className='group-hover:text-[24px] transition-all duration-300 text-lg font-semibold'>Munnar</p>
                    </div>
                </div>
                <div className='bg-[url(@/assets/place5.jpg)] bg-cover bg-top bg-no-repeat h-[300px] rounded-3xl relative group cursor-pointer'>
                    <div className='flex items-center justify-center absolute bottom-0 w-full z-20 bg-gradient-to-t from-black via-black/80 to-white/10  h-[60px] text-center text-white text-xl rounded-b-3xl'>
                        <p className='group-hover:text-[24px] transition-all duration-300 text-lg font-semibold'>Jaipur</p>
                    </div>
                </div>

                <div className='bg-[url(@/assets/place6.jpg)] bg-cover bg-top bg-no-repeat h-[300px] rounded-3xl relative group cursor-pointer'>
                    <div className='flex items-center justify-center absolute bottom-0 w-full z-20 bg-gradient-to-t from-black via-black/80 to-white/10  h-[60px] text-center text-white text-xl rounded-b-3xl'>
                        <p className='group-hover:text-[24px] transition-all duration-300 text-lg font-semibold'>Rishikesh</p>
                    </div>
                </div>

                <div className='bg-[url(@/assets/place7.jpg)] bg-cover bg-top bg-no-repeat h-[300px] rounded-3xl relative group cursor-pointer'>
                    <div className='flex items-center justify-center absolute bottom-0 w-full z-20 bg-gradient-to-t from-black via-black/80 to-white/10  h-[60px] text-center text-white text-xl rounded-b-3xl'>
                        <p className='group-hover:text-[24px] transition-all duration-300 text-lg font-semibold'>Manali</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
                <div className='bg-[url(@/assets/place8.jpg)] bg-cover bg-top bg-no-repeat h-[300px] rounded-3xl relative group cursor-pointer'>
                    <div className='flex items-center justify-center absolute bottom-0 w-full z-20 bg-gradient-to-t from-black via-black/80 to-white/10  h-[60px] text-center text-white text-xl rounded-b-3xl'>
                        <p className='group-hover:text-[24px] transition-all duration-300 text-lg font-semibold'>Thiruvananthapuram</p>
                    </div>
                </div>
                <div className='bg-[url(@/assets/place9.jpg)] bg-cover bg-top bg-no-repeat h-[300px] rounded-3xl relative group cursor-pointer'>
                    <div className='flex items-center justify-center absolute bottom-0 w-full z-20 bg-gradient-to-t from-black via-black/80 to-white/10  h-[60px] text-center text-white text-xl rounded-b-3xl'>
                        <p className='group-hover:text-[24px] transition-all duration-300 text-lg font-semibold'>Dehradun</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
