import React from 'react'

export const metadata = {
    title: 'country | Journey Rover'
}

type Tparams = Promise<{ country: string }>

export default async function Page({ params }: {params: Tparams}) {
    const { country } = await params
    return (
        <>{country}</>
    )
}
