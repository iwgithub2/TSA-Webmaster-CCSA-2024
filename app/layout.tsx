import {Inter} from 'next/font/google'
import './ui/globals.css'
import NavBar2 from "@/app/ui/navigation/navbar2";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={inter.className}>
        <header className="fixed z-50">
            <NavBar2/>
        </header>
        {children}
        </body>
        </html>
    )
}
