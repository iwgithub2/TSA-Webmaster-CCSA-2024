'use client'
import Link from 'next/link';
import NavLinks from "@/app/ui/nav-links";
import {newsreader} from "@/app/ui/fonts";
import React, {useState, useEffect} from "react";
import {useDebounce} from "use-debounce";
import {usePathname} from "next/navigation";


export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    //this fucking debounce doesnt work but lets wait until site crashes to fix
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

    return (
        <div
            className={`flex w-screen flex-row pl-3 md:pl-2 pr-5 md:pd-4  transition-all duration-300 ${isScrolled ? 'border-b' : ''}
              border-gray-150 bg-${isScrolled ? (pathname === '/about' ? 'accent-purple-300' : 'white') : 'transparent'}
             ${isScrolled ? 'py-4' : 'pb-4 pt-8'}`}>
            <Link
                className="flex items-end justify-start p-4 "
                href="/"
            >
                <span
                    className={`${newsreader.className} ${pathname === '/about' ? 'text-white' : 'text-green-900'} text-xl`}>RECYCLE PRO 2.0</span>
            </Link>
            <div
                className="flex grow flex-row pr-10 justify-end items-center space-x-4 md:flex-row md:space-x-0 ">
                <NavLinks/>
            </div>
        </div>
    );
}
//conditionally style it by doing {condtion ? format1 : format2}