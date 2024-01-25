'use client';

import Link from 'next/link';
import {usePathname} from "next/navigation";
//clsx for conditional classes and therefore conditional formatting
import clsx from 'clsx';

const links = [
    {name: 'Learn', href: '/learn'},
    {name: 'Practices', href: '/practices'},
    {name: 'Cost Calculator', href: '/calculator'},
    {name: 'About Us', href: '/about'}
];

interface NavLinkProps {
    mobile : boolean;
    toggle: () => void;
}
export default function NavLinks({mobile, toggle} : NavLinkProps) {
    const pathname = usePathname();

    return (
            <div className={`flex ${mobile ? ' flex-col space-y-5' : 'flex-row space-x-5'}  bg-white mt-2 border w-auto border-gray-100 rounded-lg`}>
                {links.map((link) => (
                    <Link key={link.name} href={link.href} onClick={toggle} className={`py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                            {link.name}
                    </Link>
                ))}
            </div>
    );
}
//Old Navbar
//<>
//             {
//                 links.map((link) => {
//                     return (
//                         <Link key={link.name} href={link.href} className={clsx(
//                             "flex grow items-center justify-center gap-2 rounded-md" +
//                             " text-sm font-medium hover:bg-sky-100 hover:text-green-600 md:flex-none md:justify-start" +
//                             " md:p-2 md:px-3",
//                             {
//                                 'text-green-600': pathname === link.href,
//                             },
//
//                         )}>
//                             <p className="hidden md:block ">{link.name}</p>
//                         </Link>
//                     );
//                 })
//             }
//         </>