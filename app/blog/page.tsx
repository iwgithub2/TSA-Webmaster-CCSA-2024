import {dmSerif, inter} from "@/app/ui/fonts";
import BlogCard from "@/app/ui/blog/blogCard";
import Link from "next/link";
import {BlogCardProps} from "@/app/ui/blog/blogInfo";
import {BlogData} from "@/app/ui/blog/blogInfo";


export default function Blog() {
    return(
        <main className="relative min-h-screen flex  bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="flex flex-col mt-40 w-full mx-20 ">
                <p className={`${dmSerif.className} mx-auto text-green-900 max-w-5xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl py-10 px-2 tracking-tight`}>
                    Home Green Home Blog
                </p>
                <div className="border-2 border-darkcream w-full"/>
                <p className={`${inter.className} font-medium text-center mb-5 lg:text-2xl md:text-xl sm:text-lg text-md mt-4 mx-5 font-serif tracking-tight`}>
                    Read from our best writers
                </p>
                <div className="border-2 border-darkcream w-full"/>
                <div className="flex flex-col">
                    <BlogCard blog={BlogData[0]}/>
                    <BlogCard blog={BlogData[1]}/>
                    <BlogCard blog={BlogData[2]}/>
                    <BlogCard blog={BlogData[0]}/>
                    <BlogCard blog={BlogData[0]}/>
                </div>
                <div className="min-h-1/2 flex flex-col py-20">

                </div>
            </div>
        </main>
    );
}