'use client'
import Link from 'next/link';
import {dmSerif, newsreader} from "@/app/ui/fonts";
import React, {useState, useEffect} from "react";
import {useDebounce} from "use-debounce";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import {useScroll} from "@react-spring/web";


export default function NavBar2() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false);
    const [debouncedScroll] = useDebounce(handleScroll, 200);
    const pathname = usePathname();

    useEffect(() => {
        window.addEventListener('scroll', debouncedScroll);
        return () => {
            window.removeEventListener('scroll', debouncedScroll);
        };
    }, [debouncedScroll]);

    function handleScroll() {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 0);
    }

    const links = [
        {name: 'Learn', href: '/learn'},
        {name: 'Practices', href: '/practices'},
        {name: 'Cost Calculator', href: '/calculator'},
        {name: 'About Us', href: '/about'}
    ];

    return (
        <div className={`flex justify-between items-center w-full px-4 fixed 
        transition-all duration-300 ${isScrolled ? 'border-b' : ''} ${isScrolled ? 'py-4' : 'pb-4 pt-8'}
              border-gray-150 bg-${isScrolled ? 'white' : 'transparent'}`}>
            <Link
                className="flex items-end justify-start p-4 "
                href="/"
            >

                <span
                    className={`${newsreader.className} text-green-900 text-lg sm:text-xl md:text-2xl lg:text-3xl`}>
                    HomeGrown
                </span>
                <Image className="mx-2 mb-2" src={'/LogoNo_Background.svg'} alt={"Logo"} height={30} width={30}/>

            </Link>

            <ul className="hidden md:flex">
                {links.map(({name, href}) => (
                    <li
                        key={name}
                        className="nav-links px-4 cursor-pointer font-medium text-black hover:scale-105 hover:text-green-500 duration-200"
                    >
                        <Link href={href} className={clsx({'text-green-600': pathname === href,})

                        }>{name}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="cursor-pointer pr-4 z-10 text-white md:hidden"
            >
                {isMenuOpen ? <Image src={'/close.svg'} alt={"close button"} width={30} height={30}/>: <Image src={'menu.svg'} alt={"menu"} width={30} height={30}/>}
            </div>

            {isMenuOpen && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white">
                    {links.map(({name, href}) => (
                        <li
                            key={name}
                            className="px-4 cursor-pointer text-green-500 font-bold py-6 text-4xl"
                        >
                            <Link onClick={() => setMenuOpen(!isMenuOpen)} href={href}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
