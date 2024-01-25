'use client'
import Link from 'next/link';
import NavLinks from "@/app/ui/nav-links";
import {newsreader} from "@/app/ui/fonts";
import React, {useState, useEffect} from "react";
import {useDebounce} from "use-debounce";
import {usePathname} from "next/navigation";


export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

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

    function toggleMenu() {
        setMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }

    return (
        <>
            <div
                className={`flex w-screen flex-row pl-3 md:pl-2 pr-5 md:pd-4  transition-all duration-300 ${isScrolled ? 'border-b' : ''}
              border-gray-150 bg-${isScrolled ? 'white' : 'transparent'}
             ${isScrolled ? 'py-4' : 'pb-4 pt-8'} ${isMenuOpen ? 'h-screen bg-white' : 'bg-transparent h-auto'} `}>
                <Link
                    className="flex items-end justify-start p-4 "
                    href="/"
                >
                <span
                    className={`${newsreader.className} text-green-900 text-md sm:text-lg md:text-xl lg:text-2xl`}>
                    RECYCLE PRO 2.0
                </span>
                </Link>
                <div className="absolute right-5 mt-1">
                    <button data-collapse-toggle="navbar-default" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
                    hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
                    dark:focus:ring-gray-600 ml-auto"
                            aria-controls="navbar-default" aria-expanded={isMenuOpen ? 'true' : 'false'}
                            onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

                <div
                    className={`absolute w-full ${isMenuOpen ? 'flex' : 'hidden'} `} id="navbar-default">
                    <NavLinks mobile={isMenuOpen} toggle={toggleMenu}/>
                </div>
            </div>
        </>
    );
}
//{`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default"

//Original NAvbar
//className="flex grow flex-row pr-10 justify-end items-center space-x-4 md:flex-row md:space-x-0 "


//