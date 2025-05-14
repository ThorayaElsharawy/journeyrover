import React from 'react'

export const metadata = {
    title: 'country | Journey Rover'
}

export default async function Page({ params }: { params: { country: string } }) {
    const { country } = await params
    return (
        <>{country}</>
    )
}
