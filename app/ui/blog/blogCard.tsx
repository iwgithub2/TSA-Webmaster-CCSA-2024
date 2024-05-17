import Image from "next/image";
import Link from "next/link";
import {BlogCardProps} from "@/app/ui/blog/blogInfo";

export default function BlogCard({blog}: { blog: BlogCardProps }) {
    return (
        <Link href={{
            pathname: blog.link,
            query: {
                article: blog.id
            }

        }}>
            <div
                className="flex flex-row border-b-2 justify-between p-10 border-darkcream hover:scale-105 transition duration-100 delay-25">
                <div className="flex flex-col">
                    <p>
                        {blog.date}
                    </p>
                    <p className="font-bold text-3xl">
                        {blog.title}
                    </p>
                    <p>
                        {blog.synopsis}
                    </p>
                    <p>
                        {blog.author}
                    </p>
                </div>
                <Image src={blog.image} alt={"sdff"} width={100} height={100}/>
            </div>
        </Link>

    );
}