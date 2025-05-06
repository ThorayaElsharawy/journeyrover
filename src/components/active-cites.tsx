import React from 'react'
import Container from './container'
import { MdOutlineArrowOutward } from 'react-icons/md'
import China from './maps/china'
import Emirates from './maps/emirates'
import London from './maps/london'
import Spain from './maps/spain'

export default function ActiveCites() {
    return (
        <Container className='py-10 '>
            <h1 className='font-bold text-3xl'>Most Active Cites</h1>
            <div className='grid md:grid-cols-2 gap-3 items-center mt-5'>
                <div className='h-full rounded-lg p-3 bg-[#3b444c]'>
                    <div className='text-[#dcbb87] flex items-center justify-between'>
                        <h2 className='text-lg font-bold '>China</h2>
                        <MdOutlineArrowOutward />
                    </div>
                    <div>
                        <China />
                    </div>
                </div>
                <div className='h-full rounded-lg p-3 bg-[#3b444c]'>
                    <div className='text-[#dcbb87] flex items-center justify-between'>
                        <h2 className='text-lg font-bold'>Spain</h2>
                        <MdOutlineArrowOutward />
                    </div>
                    <div>
                        <Spain />
                    </div>
                </div>
                <div className='h-full rounded-lg p-3 bg-[#3b444c]'>
                    <div className='text-[#dcbb87] flex items-center justify-between'>
                        <h2 className='text-lg font-bold'>London</h2>
                        <MdOutlineArrowOutward />
                    </div>
                    <div>
                        <London />
                    </div>
                </div>
                <div className='h-full rounded-lg p-3 bg-[#3b444c]'>
                    <div className='text-[#dcbb87] flex items-center justify-between'>
                        <h2 className='text-lg font-bold'>United Arab Emirates </h2>
                        <MdOutlineArrowOutward />
                    </div>
                    <div>
                        <Emirates />
                    </div>
                </div>
            </div>
        </Container>
    )
}
