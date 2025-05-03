import React from 'react'
import Container from './container'
import { MdOutlineArrowOutward } from 'react-icons/md'
import China from './maps/china'

export default function Active() {
    return (
        <Container>
            <h1 className='font-bold text-3xl'>Active Know</h1>
            <div className='flex flex-wrap gap-3 items-center justify-between mt-5'>
                <div className='w-[49%] border border-[#f1764db5] rounded-lg p-3 bg-[#f1764db5]'>
                    <div className='text-white flex items-center justify-between'>
                        <h2 className='text-lg font-bold'>China</h2>
                        <MdOutlineArrowOutward />
                    </div>
                    <div>
                        <China />
                    </div>
                </div>
                <div className='w-[49%] border border-[#f1764db5] rounded-lg p-3 bg-[#f1764db5]'>
                    <div className='text-white flex items-center justify-between'>
                        <h2 className='text-lg font-bold'>Thailand</h2>
                        <MdOutlineArrowOutward />
                    </div>
                    <div>

                    </div>
                </div>
                <div className='w-[49%] border border-[#f1764db5] rounded-lg p-3 bg-[#f1764db5]'>
                    <div className='text-white flex items-center justify-between'>
                        <h2 className='text-lg font-bold'>London</h2>
                        <MdOutlineArrowOutward />
                    </div>
                    <div>

                    </div>
                </div>
                <div className='w-[49%] border border-[#f1764db5] rounded-lg p-3 bg-[#f1764db5]'>
                    <div className='text-white flex items-center justify-between'>
                        <h2 className='text-lg font-bold'>Dubai</h2>
                        <MdOutlineArrowOutward />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Container>
    )
}
