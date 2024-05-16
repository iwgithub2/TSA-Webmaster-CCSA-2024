import {dmSerif, inter} from "@/app/ui/fonts";
import BlogCard from "@/app/ui/blog/blogCard";

export default function Blog() {
    return(
        <main className="relative min-h-screen flex justify-center bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="flex flex-col mt-40 w-full mx-20">
                <p className={`${dmSerif.className} text-green-900 max-w-5xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight`}>
                    Blog
                </p>
                <div className="border-2 border-black w-full"/>
                <p className={`${inter.className} font-medium text-center mb-5 lg:text-2xl md:text-xl sm:text-lg text-md mt-4 mx-5 font-serif tracking-tight`}>
                    Read from our best writers
                </p>
                <div className="border-2 border-black w-full"/>
                <BlogCard/>
            </div>
        </main>
    );
}