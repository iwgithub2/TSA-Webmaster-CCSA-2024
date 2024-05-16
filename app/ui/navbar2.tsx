'use client'
import Link from 'next/link';
import {dmSerif, newsreader} from "@/app/ui/fonts";
import React, {useState, useEffect} from "react";
import {useDebounce} from "use-debounce";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import Image from "next/image";


export default function NavBar2() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);
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
        const docHeight = document.documentElement.scrollHeight;
        setScrollPercentage( scrollTop / docHeight);
        setIsScrolled(scrollTop > 0);
    }

    const links = [
        {name: 'Learn', href: '/learn'},
        {name: 'Practices', href: '/practices'},
        {name: 'Cost Calculator', href: '/calculator'},
        {name: 'Blog', href: '/blog'},
        {name: 'About Us', href: '/about'}
    ];

    const gradientStartColor: string = '#e5d3c2'; // Start color of your gradient background
    const gradientEndColor: string = '#4a7c47'; // End color of your gradient background

    function calculateInterpolatedColor(startColor: number[], endColor: number[], percentage: number): string {
        const r: number = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * percentage);
        const g: number = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * percentage);
        const b: number = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * percentage);
        return `rgb(${r},${g},${b})`;
    }

    const startColor: number[] = gradientStartColor.match(/\w\w/g)?.map(hex => parseInt(hex, 16)) || [0, 0, 0];
    const endColor: number[] = gradientEndColor.match(/\w\w/g)?.map(hex => parseInt(hex, 16)) || [255, 255, 255];
    const interpolatedColor: string = calculateInterpolatedColor(startColor, endColor, scrollPercentage);

    //${isScrolled ? 'bg-cream' : 'bg-transparent'}
    return (
        <div className={`flex justify-between items-center w-full px-4 fixed 
        transition-all duration-300  ${isScrolled ? 'py-4' : 'pb-4 pt-8'}
              `}
            style={{
            backgroundColor: isScrolled ? interpolatedColor : 'transparent'
        }}>
            <Link
                className="flex items-end justify-start p-4 "
                href="/"
            >

                <span
                    className={`${newsreader.className} text-green-900 text-lg sm:text-xl md:text-2xl lg:text-3xl`}>
                    HomeGrown
                </span>
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
