import { Image } from '@imagekit/react'
import { useState } from 'react'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import LoginBtn from './LoginBtn';


const Navbar = () => {
    const navbarLinks = [
        { id: 1, name: "Home", href: "/" },
        { id: 2, name: "Trending", href: "/" },
        { id: 3, name: "Most Popular", href: "/" },
        { id: 4, name: "About", href: "/" },
    ]

    const [open, setOpen] = useState(false)
    return (
        <div className='w-full md:h-20 flex items-center justify-between px-8 py-8 backdrop-blur-md'>
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
                {/* <div className="cursor-pointer text-4xl" onClick={() => setOpen((prev) => !prev)}>
                    {open ? <RxCross1 /> : <RxHamburgerMenu />
}
                </div> */}
                <div
                    className="cursor-pointer relative w-10 h-10 flex items-center justify-center"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <RxHamburgerMenu
                        className={`absolute text-4xl transform transition-all duration-500 ${open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                            }`}
                    />
                    <RxCross1
                        className={`absolute text-4xl transform transition-all duration-500 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                            }`}
                    />
                </div>

                {/* Mobile Links List */}
                <div className={`w-full h-screen bg-[#e6e6ff] items-center justify-center gap-8 font-medium text-lg absolute top-18 transition-all ease-in-out duration-700 ${open ? "right-0 flex flex-col  " : "opacity-0 hidden"} backdrop-blur-3xl `}>
                    {navbarLinks.map((id, name, href) => (
                        <a href={href} key={id}>{name}</a>
                    ))}
                    {/* <a href="/">Home</a>
                    <a href="/">Trending</a>
                    <a href="/">Most Popular</a>
                    <a href="/">About</a> */}
                    <LoginBtn />
                </div>
            </div>

            {/* Desktop Menu*/}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-semibold ">
                {/* <a href="/" className='hover:underline duration-900 transform  transition-transform'>Home</a> */}
                {navbarLinks.map((nav) => (
                    <a href={nav.href} key={nav.id} className='duration-700 transform  transition-transform hover:scale-110'>{nav.name}</a>
                ))}
                {/* <a href="/">Home</a>
                <a href="/">Trending</a>
                <a href="/">Most Popular</a>
                <a href="/">About</a> */}
                <LoginBtn />
            </div>
        </div>
    )
}

export default Navbar
