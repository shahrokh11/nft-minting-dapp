import { ConnectWallet } from '@thirdweb-dev/react';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div name="navbar" className="flex justify-between pt-2 items-center text-white fixed w-full">
            <Link to="hero" smooth={true} duration={500}>
                <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/267.png" alt="NFT Image"
                    className='w-[50px] rounded-full ml-5 cursor-pointer md:mr-[100px]' />
            </Link>
            <ul className="hidden md:flex space-x-20 mr-8 text-2xl font-bold cursor-pointer">
                <li>
                    <Link to="hero" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="roadmap" smooth={true} duration={500} >
                        Roadmap
                    </Link>
                </li>
                <li>
                    <Link to="team" smooth={true} duration={500} >
                        Team
                    </Link>
                </li>
            </ul>
            <div className="px-2">
                <ConnectWallet accentColor='#B3FFBF' />
            </div>

            {/* Hamburger  */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={
                !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t from-lime-700 to-slate-900'
            }>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="roadmap" smooth={true} duration={500} >
                    Roadmap
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="team" smooth={true} duration={500} >
                    Team
                </Link></li>
            </ul>
        </div>
    )
}

export default Navbar