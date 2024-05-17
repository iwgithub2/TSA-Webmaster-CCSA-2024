'use client'
import {BlogData} from "@/app/ui/blog/blogInfo";
import {useSearchParams} from "next/navigation";
import {dmSerif, inter} from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
    const searchParams = useSearchParams();
    const data = BlogData[+searchParams.get('article')!];

    return (
        <main className="relative min-h-screen flex  bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="flex flex-col mt-40 max-w-5xl mx-auto items-center ">
                <p className={`${dmSerif.className} mx-auto text-green-900 max-w-5xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl py-10 px-2 tracking-tight`}>
                    {data.title}
                </p>
                <Image src={data.image} alt={"rizzler"} height={1000} width={1000}/>
                <p className={`${inter.className} font-medium text-left w-full mb-5 lg:text-2xl md:text-xl sm:text-lg text-md mt-4 mx-5 font-serif tracking-tight`}>
                    {data.author} • {data.date}
                </p>
                <p className="pb-20">
                    {data.blog}
                </p>
            </div>
        </main>
    );
}