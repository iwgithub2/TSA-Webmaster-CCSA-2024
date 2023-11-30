import Link from 'next/link';
import NavLinks from "@/app/ui/nav-links";
import {newsreader} from "@/app/ui/fonts";

export default function NavBar() {
    return (
        <div className="flex w-screen flex-row px-3 md:px-2 py-4 border-b border-gray-150">
            <Link
                className="flex items-end justify-start p-4 "
                href="/"
            >
                <span className={`${newsreader.className} text-green-900 text-xl`}>RECYCLE PRO 2.0</span>
            </Link>
            <div
                className="flex grow flex-row justify-end items-center space-x-2 md:flex-row md:space-x-0 ">
                <NavLinks/>
            </div>
            <Link className="flex  items-center rounded-md bg-darkgreen hover:bg-green-600 px-4 m-3 "  href="/login">
                <span className="text-white">Login</span>
            </Link>
        </div>
    );
}
