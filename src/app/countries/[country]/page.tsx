import React from 'react'

export const metadata = {
    title: 'country | Journey Rover'
}

export default function Page({ params }: { params: { country: string } }) {
    const { country } = params
    console.log(country); // Works now
    return (
        <>Hiiii</>
    )
}
