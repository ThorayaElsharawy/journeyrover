import React from 'react'
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Nav() {
    return (
        <nav>
            <div className="flex items-center ">
                <Image src={logo} width={80} height={80} alt="logo" />
                <h2 className="text-2xl uppercase font-poetsen">Journey Rover</h2>
            </div>
        </nav>
    )
}
