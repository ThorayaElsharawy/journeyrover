import React from 'react'
import Image from "next/image";
import logo from '../../public/logo.png'

export default function Nav() {
    return (
        <nav>
            <div className="flex items-center">
                <Image src={logo} width={80} height={80} alt="logo" className='' />
                <h2 className="text-2xl uppercase font-poetsen text-black">Journey Rover</h2>
            </div>
        </nav>
    )
}
