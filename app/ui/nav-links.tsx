'use client';

import Link from 'next/link';
import {usePathname} from "next/navigation";
//clsx for conditional classes and therefore conditional formatting
import clsx from 'clsx';

const links = [
    {name: 'Learn', href: '/learn'},
    {name: 'Practices', href: '/practices'},
    {name: 'Cost Calculator', href: '/calculator'}
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {
                links.map((link) => {
                    return (
                        <Link key={link.name} href={link.href} className={clsx(
                            "flex grow items-center justify-center gap-2 rounded-md" +
                            " text-sm font-medium hover:bg-sky-100 hover:text-green-600 md:flex-none md:justify-start" +
                            " md:p-2 md:px-3",
                            {
                                'text-green-600': pathname === link.href,
                            },

                        )}>
                            <p className="hidden md:block ">{link.name}</p>
                        </Link>
                    );
                })
            }
        </>
    );
}