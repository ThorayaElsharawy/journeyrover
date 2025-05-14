import React from 'react'

export const metadata = {
    title: 'country | Journey Rover'
}

export default async function page({ params }: { params: { country: string } }) {
    const { country } = params
    console.log(country); // Works now

    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })

    return (
        <>Hiiii</>
    )
}
