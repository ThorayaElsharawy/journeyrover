import React from 'react'
import WorldMap from './world-map'

export default function MostActiveDest() {
    return (
        <div className='py-5 bg-[#3b444c]/5 my-10'>
            <h2 className="font-bold text-3xl mx-auto max-w-screen-xl px-6">Most Active Destinations</h2>
            <WorldMap />
        </div>
    )
}
