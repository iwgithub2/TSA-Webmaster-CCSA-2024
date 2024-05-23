import Image from "next/image";
import Link from "next/link";
import {BlogCardProps} from "@/app/ui/blog/blogInfo";
import {dmSans, dmSerif} from "@/app/ui/fonts";

export default function BlogCard({blog}: { blog: BlogCardProps }) {
    return (
        <Link href={{
            pathname: blog.link,
            query: {
                article: blog.id
            }

        }}>
            <div
                className="flex flex-col md:flex-row border-b-2 justify-between p-10 border-darkcream hover:scale-105 transition duration-100 delay-25">
                <div className="flex flex-col my-2 md:my-0">
                    <p className={`${dmSans.className} text-bold lg:text-xl md:text-lg sm:text-md text-sm text-yellow-950`}>
                        {blog.date}
                    </p>
                    <p className={`${dmSerif.className} font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-green-900`}>
                        {blog.title}
                    </p>
                    <p className={`${dmSans.className} font-semibold lg:text-xl md:text-lg sm:text-md text-sm text-yellow-950`}>
                        {blog.synopsis}
                    </p>
                    <p className={`${dmSans.className} text-bold lg:text-xl md:text-lg sm:text-md text-sm text-yellow-950`}>
                        {blog.author}
                    </p>
                </div>
                <Image src={blog.image} alt={"sdff"} width={200} height={100}/>
            </div>
        </Link>

    );
}