import React from 'react'

export default function Tooltipe({ hoveredArea }: { hoveredArea: string }) {
    return (
        <div className='absolute bottom-3 right-2 end-0 z-50 max-w-min lg:max-w-[220px]  w-full h-[130px] shadow-md bg-[#262F30] text-white p-2.5 rounded-lg'>
            {hoveredArea}
            
        </div>
    )
}
