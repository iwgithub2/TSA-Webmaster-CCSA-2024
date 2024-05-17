'use client'
import Link from 'next/link';
import {dmSerif, newsreader} from "@/app/ui/fonts";
import React, {useState, useEffect} from "react";
import {useDebounce} from "use-debounce";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import {stagger, useAnimate} from "framer-motion";
import {MenuToggle} from "@/app/ui/navigation/MenuToggle";

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    "nav",
                    {transform: "translateX(0%)"},
                    {ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6}
                ],
                [
                    "li",
                    {transform: "scale(1)", opacity: 1, filter: "blur(0px)"},
                    {delay: stagger(0.05), at: "-0.1"}
                ]
            ]
            : [
                [
                    "li",
                    {transform: "scale(0.5)", opacity: 0, filter: "blur(10px)"},
                    {delay: stagger(0.05, {from: "last"}), at: "<"}
                ],
                ["nav", {transform: "translateX(-100%)"}, {at: "-0.1"}]
            ];

        // @ts-ignore
        animate([
            [
                "path.top",
                {d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"},
                {at: "<"}
            ],
            [
                "path.middle", {opacity: isOpen ? 0 : 1}, {at: "<"}
            ],
            [
                "path.bottom",
                {d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"},
                {at: "<"}
            ],
            ...menuAnimations
        ]);

    }, [isOpen]);
    return scope;
}

export default function NavBar2() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [debouncedScroll] = useDebounce(handleScroll, 200);
    const pathname = usePathname();
    const scope = useMenuAnimation(isMenuOpen);

    useEffect(() => {
        window.addEventListener('scroll', debouncedScroll);
        return () => {
            window.removeEventListener('scroll', debouncedScroll);
        };
    }, [debouncedScroll]);

    function handleScroll() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        setScrollPercentage(scrollTop / docHeight);
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


            <div className="md:hidden" ref={scope}>
                <ul className={`flex flex-col justify-center items-center top-0 left-0 w-full h-screen absolute transition duration-100 ${isMenuOpen ? "bg-darkgreen" : "bg-transparent hidden"}`}>
                    {links.map(({name, href}) => (
                        <li
                            key={name}
                            className="px-4 cursor-pointer text-white font-bold py-6 text-4xl"
                        >
                            <Link onClick={() => setMenuOpen(!isMenuOpen)} href={href}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <MenuToggle toggle={() => setMenuOpen(!isMenuOpen)}/>
            </div>

        </div>
    );
}