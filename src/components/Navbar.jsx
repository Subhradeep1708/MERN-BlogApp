import { Image } from '@imagekit/react'
import React, { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full md:h-20 flex items-center justify-between '>
            {/* LOGO */}
            <div className=" flex items-center gap-4 font-bold text-2xl ">
                <img src="./logo2.svg" alt="Logo" className='w-9 h-9' />
                <Image
                    // urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                    src="./logo2.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                />
                <span>Blogspace.</span>
            </div>
            {/* Mobile Menu*/}
            <div className="md:hidden">
                <div className="cursor-pointer text-4xl" onClick={() => setOpen((prev) => !prev)}>
                    {open ? "X" : "☰"}
                </div>
                {/* Mobile Links List */}
                <div className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"
                    }`}>

                    <a href="/">Home</a>
                    <a href="/">Trending</a>
                    <a href="/">Most Popular</a>
                    <a href="/">About</a>
                    <a href="/">
                        <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
                    </a>
                </div>
            </div>
            {/* Desktop Menu*/}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <a href="/">Home</a>
                <a href="/">Trending</a>
                <a href="/">Most Popular</a>
                <a href="/">About</a>
                <a href="/">
                    <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
                </a>
            </div>
        </div>
    )
}

export default Navbar
