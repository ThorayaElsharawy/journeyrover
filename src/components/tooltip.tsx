import { getCountryDetails } from '@/services/country.services'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function Tooltip({ hoveredArea }: { hoveredArea: string }) {
    const { data } = useQuery({
        queryKey: ['countryName', hoveredArea],
        queryFn: () => getCountryDetails(hoveredArea),
        enabled: !!hoveredArea
    })

    if (!data) return
    const country = data[0]
    return (
        <div className='absolute bottom-3 right-2 end-0 z-50 max-w-min lg:max-w-[250px]  w-full h-[270px] bg-white shadow-2xl p-2.5 rounded-lg border border-black/5'>
            <img className='-mt-10 w-[120px] h-[100px] ml-auto rounded-3xl shadow-[0_0_5px_#88726bb5]' src={country?.flags?.png} alt="" />
            <div className='border-b pb-2 border-gray-300'>
                <h2 className='text-xl mb-2 font-bold'>{country?.name?.common}</h2>
                <h1 className='text-[#a46602] font-semibold'>Federal Republic of Germany</h1>
            </div>

            <ul className='space-y-0.5 mt-5'>
                <li className='flex justify-between'>
                    <small >Capital:</small>
                    <p className='font-bold'>{country?.capital[0]}</p>
                </li>
                <li className='flex justify-between'>
                    <small>Region:</small>
                    <p className='font-bold'>{country?.region}</p>
                </li>
                <li className='flex justify-between'>
                    <small>Population:</small>
                    <p className='font-bold'>{country?.population}</p>
                </li>
            </ul>
        </div>
    )
}
