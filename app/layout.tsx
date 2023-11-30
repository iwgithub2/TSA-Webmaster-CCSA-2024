import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './ui/globals.css'
import NavBar from "@/app/ui/navbar";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex w-full flex-row md:overflow-hidden">
            <NavBar/>
        </div>
        {children}
        </body>
        </html>
    )
}
